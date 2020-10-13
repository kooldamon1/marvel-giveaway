const discord = require("discord.js");

module.exports = {
  name: "servericon",
  aliases: ["si", "gav"],
  category: "info",
  description: "Get avatar of the server",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed();

    embed.setTitle(
      "<a:reddot:764199882189176843>  SERVER ICNON  <a:reddot:764199882189176843> "
    );
    embed.setDescription(
      `[Download](${message.guild.iconURL({ dynamic: true, size: 2048 })})`
    );
    embed.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }));
    embed.setColor("#E67E22");

    message.channel.send(embed);
  }
};
