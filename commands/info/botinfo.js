const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE SENPAI",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__ <a:2628_rainbowdown:764201083068743710>`)
      .addField("BOT NAME", `SHADOW OFFICIAL™`)
      .addField(
        "BOT DEVELOPER ",
        `

<@672027578181353473>`
      )
      .addField("TOTAL SERVER", `${client.guilds.cache.size}`, true)
      .addField("TOTAL CHANNAL", `${client.channels.cache.size}`)
      .addField("TOTAL USER", `${client.users.cache.size}`, true)
      .addField("BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`BOT CREDIT :- ShaDoW & VeNoM`);

    message.channel.send(embed);
  }
};
