const discord = require("discord.js");

module.exports = {
  name: "servericon",
  aliases: ["si", "gav"],
  category: "info",
  description: "Get avatar of the server",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed();

    embed.setTitle(
      "<a:reddot:764199882189176843>  SERVER ICNON Requested By :- ${message.author.username} <a:reddot:764199882189176843> "
    );
    embed.setDescription(
      `[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`
    );
    embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }));
    embed.setColor("#E67E22");

    message.channel.send(embed);
  }
};
