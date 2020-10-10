const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpmod",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord
      .MessageEmbed()
      .setTitle(`MODERATION COMMANDS`)
      .setDescription(`addrole,
removerole, 
clear[purge] - c, 
ban, 
kick, 
voicekick, 
mute, 
unmute, 
slowmode, 
warn, 
warnings, 
resetwarns\
`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764200316156510218"));
  }
};
