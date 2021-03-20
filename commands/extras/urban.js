const Discord = require("discord.js");

const urban = require("urban.js");

//const { defprefix } = require('../botconfig.json');

module.exports = {
  name: "urban",

  description: "Returns a Short Description for your Text",

  usage: `\`urban <Text>\``,

  run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );

    const bargs = message.content.split(" ");

    const searchString = bargs.slice(1).join(" ");

    if (!searchString) return message.channel.send(`Usage: ${this.usage}`);

    urban(searchString).then(urbans => {
      const embed = new Discord.MessageEmbed()

        .setDescription(`**Definition**\n${urbans.definition}`)

        .setColor("RANDOM")

        .setAuthor(message.author.username);

      message.channel.send(embed);
    });
  }
};
