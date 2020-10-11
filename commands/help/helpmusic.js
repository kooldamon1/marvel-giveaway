const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpmod",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord
      .MessageEmbed()
      .setTitle(`MODERATION COMMANDS <a:op11:764200185253199892>`)
      .setDescription(`━━━━━━━━━━━━━━━━━━━━━━━━━
play,p - 

search - sc,

skip,

stop,

pause,

nowplaying - np,

queue - q,

volume - vol
━━━━━━━━━━━━━━━━━━━━━━━━━\
`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764200185253199892"));
  }
};
