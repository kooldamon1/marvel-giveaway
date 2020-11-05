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
\`addrole\` - @user @role

\`removerole,rmrole,-\` - @user @role 

\`clear,purge,c\` - with no of messages to be deleted

\`ban\` - ban the mentioned user

\`kick\` - kick the mentioneduser

\`voicekick\` - disconnect the mention user from vc

\`mute\` - mute user (require the muted role)

\`unmute\` - unmute user

\`slowmode\` - in channel with time

\`warn\` - wanr user with reason

\`warnings\` - show warnings of mentioned user

\`resetwarns\` - reset all warnings of mentioned user
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
