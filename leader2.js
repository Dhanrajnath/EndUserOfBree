const redis = require("redis");
const client = redis.createClient();

const leaderChannel = "leader";
const serverId = process.env.SERVER_ID || "server1";

function startLeaderElection() {
  // subscribe to the leader channel
  client.subscribe(leaderChannel);

  // when receiving a message, check if it's a leader announcement
  client.on("message", (channel, message) => {
    if (channel === leaderChannel) {
      console.log(`Received leader message: ${message}`);

      // parse the message to get the current leader and check if it's this server
      const currentLeader = JSON.parse(message).leader;
      const isLeader = currentLeader === serverId;

      if (isLeader) {
        console.log("This server is now the leader");

        // Perform any necessary initialization steps before taking over as leader
        // ...
      }
    }
  });

  // periodically announce this server as a candidate to become the leader
  setInterval(() => {
    client.publish(leaderChannel, JSON.stringify({ candidate: serverId }));
  }, 1000);
}

startLeaderElection();
