const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpinfo",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord
      .MessageEmbed()
      .setTitle(`INFORMATION COMMANDS <a:load:764201016287559712>`)
      .setDescription(`━━━━━━━━━━━━━━━━━━━━━━━━━
avatar - av,
botinfo,
serverinfo,
hastebin,
imdb,
membercount,
weather,
ping,
pokemon,
servericon,
whoiswhois - 
userinfo - show information about user
━━━━━━━━━━━━━━━━━━━━━━━━━\
`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764201016287559712"));
  }
};
