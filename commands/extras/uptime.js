const discord = require("discord.js");
module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "uptime.description",

  run(client, message, args) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    let embed = new discord.MessageEmbed()
      .setTitle(
        "<:marvel_bot:814481094732415026> Bot Uptime <:marvel_bot:814481094732415026>"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> UPTIME",
        days +
          "Day's, " +
          hours +
          "Hour's, " +
          minutes +
          "Minute's, " +
          seconds +
          "Second's"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RED")
      .setFooter(
        "Requested By : " + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.channel.send(embed).catch(console.error);
  }
};
