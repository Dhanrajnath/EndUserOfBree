const EventEmitter = require("events");

class Leader extends EventEmitter {
  constructor() {
    super();
    this.followers = [];
  }

  addFollower(follower) {
    this.followers.push(follower);
    follower.on("ready", () => {
      console.log(`${follower.name} is ready`);
    });
  }

  sendCommand(command) {
    console.log(`Sending command ${command} to all followers`);
    this.followers.forEach((follower) => {
      follower.executeCommand(command);
    });
  }
}

class Follower extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  executeCommand(command) {
    console.log(`${this.name} is executing command ${command}`);
    this.emit("ready");
  }
}

// Create a leader and some followers
const leader = new Leader();
const follower1 = new Follower("Follower 1");
const follower2 = new Follower("Follower 2");

// Add the followers to the leader's list
leader.addFollower(follower1);
leader.addFollower(follower2);

// Send a command to all followers
leader.sendCommand("Do something");
