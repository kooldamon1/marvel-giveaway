const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "help",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT HELP MENU <a:India:764200316156510218> `)
     .addField("__**MODERATION COMMANDS**__ <a:op11:764200185253199892>"
`helpmod\` use with prefix
)
 .setDescription(
__**FUN COMMANDS**__ <a:wink_pikachu:764199916456902666>
\`helpfun\` use with prefix

__**INFORMATION COMMANDS**__ <a:load:764201016287559712>
\`helpinfo\` use with prefix 

__**MUSIC COMMANDS**__ <a:musicau:764209002741235745>
\`helpmusic\` use with prefix

__**NSFW COMMANDS**__ <a:Cross:764209193790996512>
\`I AM CLEAN BOT\`

__**WELCOME COMMANDS**__ <a:welcome:764200994837758022>
\`setwelcome\` setwelcome #channel
\`setmessage\` setmessage <text you want to set>
\`resetwelcomimg\` reset welcome immage
\`resetwelcomemsg\` reset welcome message

__**SPECIAL COMMANDS**__ <a:party:764200631803838545>
\`giveaway\` giveaway <time channel prize> time in m,h,d format
\`math\` do maths for you 
\`announce\` announce something for you in embed
\`weather <area>\` weather area name 

__**CORONA COMMANDS**__ <a:heartbreak:764210242636349441>
\`corona all\` total deatails about corona on earth
\`corona <country>\` total corona details of named country
 
**__If Any Command Is Not Working Contact The Bot Owner__**
`
              )

      .addField(
        "BOT DEVELOPER <a:vshield:764199958257336321>",

        `

<@672027578181353473>`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

    message.react(client.emojis.cache.get("764200316156510218"));
  }
};
