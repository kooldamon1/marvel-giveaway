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
\`atavatar,av\` - avatar of mentioned user

\`atbotinfo\` - bot info

\`atserverinfo\` - information about server

\`athastebin\` - just use it

\`atimdb\` - imdb name gives info of movies

\`atmembercount\` - show member count 

\`atweather\` - show wether of named area

\`atping\` - show latency of bot

\`atpokemon\` - gives info about pokemon - give name 

\`atservericon\` - gives server icon

\`atwhois,atuserinfo\` - sho info about user

\`atemoji\` - show all emoji in the server

\`atauthor,owner\` - about bot creator
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
