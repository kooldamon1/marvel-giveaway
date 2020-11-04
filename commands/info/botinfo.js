const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(
        `__**INFORMATION ABOUT BOT**__ <a:2628_rainbowdown:764201083068743710>`
      )
      .addField("BOT NAME <a:vshield:764199958257336321>", `SHADOW OFFICIAL™`)
      .addField(
        "BOT DEVELOPER <a:vshield:764199958257336321>",
        `

<@672027578181353473>`
      )

      .addField(
        "BOT TEAM <a:vshield:764199958257336321>",
        ` <@479987197844652042>  `
      )

      .addField(
        "TOTAL SERVER <a:vshield:764199958257336321>",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "TOTAL CHANNAL <a:vshield:764199958257336321>",
        `${client.channels.cache.size}`
      )
      .addField(
        "TOTAL USER <a:vshield:764199958257336321>",
        `${client.users.cache.size}`,
        true
      )
      .addField("BOT LIBRARY <a:vshield:764199958257336321>", `discord.js`)
      .addField(
        "BOT LATENCY <a:vshield:764199958257336321>",
        `${client.ws.ping}ms`
      )

      .setColor("RANDOM")
      .setFooter(`BOT CREDIT :- ShaDoW`);

    message.channel.send(embed);
  }
};
