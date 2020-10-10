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
      .setDescription(`addrole - @user @role

removerole - @user @role 

clear[purge] - c with no of messages to be deleted

ban - @user

kick - @user

voicekick - @user

mute - @user

unmute - @user

slowmode - in channel with time

warn - @user with reason

warnings - @user show warnings

resetwarns - @user reset all warnings of mention user\
`)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764200185253199892"));
  }
};
