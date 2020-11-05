const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpmusic",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `MUSIC COMMANDS <a:musicau:764209002741235745>
`
      )

      .setDescription(
        `━━━━━━━━━━━━━━━━━━━━━━━━━
\`atplay,atp\` - plays with name

\`atsearch,atsc\` - search a song

\`atskip\` - next track

\`atstop\` - stops music 

\`atpause\` - pause music 

\`atresume\` - resumes paused song

\`atnowplaying,atnp\` - shows current playing song

\`atqueue\` - shows play list

\`atvolume,atvol\` - changes the volume 

\`atloop\` - loops the music
━━━━━━━━━━━━━━━━━━━━━━━━━\
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764209002741235745"));
  }
};
