const db = require("quick.db");
const discord = require("discord.js");

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    //OWNER ONLY COMMAND
    if (!message.author.id === "672027578181353473") {
      return message.channel.send("This command can only be used by owner");
    }
    //ARGUMENT
    if (!args.length) {
      return message.channel.send("Please give status message");
    }
    let Status = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[Status], {
      type: "LISTENING"
    });

    db.set(`status`, args.join(" "));
    await message.channel.send("Updated the bot status");
    process.exit(1);
  }
};
