const discord = require("discord.js");
module.exports = {
  name: "support",
  category: "help",
  description: "SUPPORT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`SUPPORT SERVER <a:tick1:764199777281114133>`)
      .setDescription(`[CLICK HERE](https://discord.gg/FYQ2mrt)`)
      .setColor("#ffffff")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
