const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "helpn",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT HELP MENU <a:India:764200316156510218> `)

      .addField(
        "MODERATION COMMANDS <a:op11:764200185253199892>",
        `
helpmod - shows moderation commands menu
`
      )

      .addField(
        "FUN COMMANDS <a:wink_pikachu:764199916456902666>",
        `helpfun - shows funcommands menu`
      )

      .addField(
        "INFORMATION COMMANDS <a:wink_pikachu:764199916456902666>",
        `
helpinfo - shows information commands menu
`
      )

      .addField(
        "MUSIC COMMANDS <a:musicau:764209002741235745>",
        `       helpmusic - shows music comands menu
`
      )
    
    .addFieldd(""
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
