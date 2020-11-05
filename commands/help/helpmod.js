const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpmod",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`MODERATION COMMANDS <a:op11:764200185253199892>`)
      .setDescription(
        `━━━━━━━━━━━━━━━━━━━━━━━━━
\`ataddrole\` - @user @role

\`atremoverole,atrmrole,-\` - @user @role 

\`atclear,atpurge,atc\` - with no of messages to be deleted

\`atban\` - ban the mentioned user

\`atkick\` - kick the mentioneduser

\`atvoicekick\` - disconnect the mention user from vc

\`atmute\` - mute user (require the muted role)

\`atunmute\` - unmute user

\`atslowmode\` - in channel with time

\`atwarn\` - wanr user with reason

\`atwarnings\` - show warnings of mentioned user

\`atresetwarns\` - reset all warnings of mentioned user
━━━━━━━━━━━━━━━━━━━━━━━━━\
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764200185253199892"));
  }
};
