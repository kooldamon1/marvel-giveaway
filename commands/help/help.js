const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "help",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(
        `
__**MODERATION COMMANDS**__ <a:op11:764200185253199892>
\`helpmod\` use with prefix

__**FUN COMMANDS**__ <a:wink_pikachu:764199916456902666>
\`helpfun\` use wit prefix

__**INFORMATION COMMANDS**__ <a:load:764201016287559712>
\`avatar - av,
botinfo,
serverinfo,
hastebin,
imdb,
membercount,
weather,
ping,
pokemon,
servericon,
whoiswhois,
userinfo\`

__**MUSIC COMMANDS**__ <a:musicau:764209002741235745>
\`play - p,
search - sc,
skip,
stop,
pause,
resume,
nowplaying - np,
queue - q,
volume - vol\`

__**NSFW COMMANDS**__ <a:Cross:764209193790996512>
\`I AM CLEAN BOT\`

__**WELCOME COMMANDS**__ <a:welcome:764200994837758022>
\`setwelcome #channel ,
setmessage <text you want to set>\`

__**SPECIAL COMMANDS**__ <a:party:764200631803838545>
\`giveaway time channel prize,
math,
announce,
emoji,
weather <area>\`

__**CORONA COMMANDS**__ <a:heartbreak:764210242636349441>
\`corona all, 
corona <country>\`
 
If any contact is not working contact the bot owner
`
      )

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react(client.emojis.cache.get("764200316156510218"));
  }
};
