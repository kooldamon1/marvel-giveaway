const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setDescription(`<a:loading:764199817769254912> Pong! Latency Is 🔸 -  ${client.ws.ping}ms`)
      .setColor("RANDOM")
      .setFooter(`Requested by ${message.author.username}`);

    message.channel.send(embed);
  }
};
