const { prefix, bowner } = require("../../config.json");
module.exports = {
  name: "playing",
  description: "",
  async run(client, message, args) {
    if (message.author.id !== bowner) return;
    const activity = args.join(" ");
    client.user.setActivity(activity, {
      type: "PLAYING"
    });
    message.delete();
    await message.channel.send(`Set Activity PLAYING ${activity}`).then(msg => {
      msg.delete({ timeout: 10000 });
    });
  }
};
