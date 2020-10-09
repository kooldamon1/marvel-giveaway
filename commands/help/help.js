const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "help",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT  HELP MENU `)
      .setDescription(
        `
__**MODERATION COMMANDS**__ <a:op11:764200185253199892>
\`addrole,
removerole,
clear[purge],
ban,
kick,
voicekick,
mute,
unmute,
slowmode,
warn,
warnings,
resetwarns\`

__**FUN COMMANDS**__ <a:wink_pikachu:764199916456902666>
\`advice,
suggest,
ascii,
dog,
fact,
hug,
joke,
kpop,
math,
meme,
mw\`

__**INFORMATION COMMANDS**__ <a:load:764201016287559712>
\`avatar,
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
\`play,
search,
skip,
stop,
pause,
resume,
nowplaying,
queue,
volume\`

__**NSFW COMMANDS**__ <a:Cross:764209193790996512>
\`haa ye krlo phle\`

__**WELCOME COMMANDS**__ <a:welcome:764200994837758022>
\`setwelcome,
setmessage\`

__**SPECIAL COMMANDS**__ <a:party:764200631803838545>
\`giveaway,
math,
announce,
emoji,
weather \`

__**CORONA COMMANDS**__ <a:heartbreak:764210242636349441>
\`corona all, 
corona <country>\`
 
If any contact is not working contact the bot owner
`
      )

      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react(client.emojis.cache.get("764200316156510218"));
  }
};
