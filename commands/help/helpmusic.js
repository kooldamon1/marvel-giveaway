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
\`play,p\` - plays with name

\`search,sc\` - search a song

\`skip\` - next track

\`stop\` - stops music 

\`pause\` - pause music 

\`resume\` - resumes paused song

\`nowplaying,np\` - shows current playing song

\`queue\` - shows play list

\`volume,vol\` - changes the volume 

\`loop\` - loops the music
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
