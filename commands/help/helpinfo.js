const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpinfo",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`INFORMATION COMMANDS <a:load:764201016287559712>`)
      .setDescription(
        `━━━━━━━━━━━━━━━━━━━━━━━━━
\`avatar,av\` - avatar of mentioned user

\`botinfo\` - bot info

\`serverinfo\` - information about server

\`hastebin\` - just use it

\`imdb\` - imdb name gives info of movies

\`membercount\` - show member count 

\`weather\` - show wether of named area

\`ping\` - show latency of bot

\`pokemon\` - gives info about pokemon - give name 

\`servericon\` - gives server icon

\`whois,userinfo\` - sho info about user

\`emoji\` - show all emoji in the server

\`author,owner\` - about bot creator
━━━━━━━━━━━━━━━━━━━━━━━━━\
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764201016287559712"));
  }
};
