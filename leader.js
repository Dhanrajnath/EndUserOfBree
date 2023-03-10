const Bree = require("bree");

class Node {
  constructor(id, nodes) {
    this.id = id;
    this.nodes = nodes;
    this.leader = null;
    this.bree = new Bree({
      jobs: [
        {
          name: `node-${id}`,
          worker: false,
          interval: 1000,
          timeout: 10000,
          retries: 0,
          data: { id },
        },
      ],
    });
    this.bree.on("worker created", () => {
      console.log(`Node ${id} created worker`);
    });
    this.bree.on("worker message", (job, message) => {
      this.handleMessage(message);
    });
    this.bree.on("worker errored", (job, err) => {
      console.error(`Node ${id} errored:`, err);
    });
  }

  startElection() {
    this.bree.emit("message", { type: "election", id: this.id });
  }

  sendMessage(message, id) {
    const node = this.nodes[id];
    this.bree.run(`node-${node.id}`, message);
  }

  sendToHigherNodes(message) {
    for (let i = this.id + 1; i < this.nodes.length; i++) {
      this.sendMessage(message, i);
    }
  }

  handleMessage(message) {
    if (message.type === "election") {
      if (message.id > this.id) {
        this.startElection();
      } else {
        this.sendMessage({ type: "leader", id: this.leader }, message.id);
      }
    } else if (message.type === "leader") {
      this.leader = message.id;
      console.log(`Node ${this.id} received leader ${this.leader}`);
    }
  }

  start() {
    if (this.leader === null) {
      this.leader = this.id;
      console.log(`Node ${this.id} is the leader`);
      this.sendToHigherNodes({ type: "election", id: this.id });
    } else {
      console.log(`Node ${this.id} is not the leader`);
      this.startElection();
    }
  }
}

const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

nodes.map((node) => new Node(node.id, nodes).bree.start());
