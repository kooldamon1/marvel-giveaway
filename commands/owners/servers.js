const { util } = require("discord.js-commando");
const { prefix, bowner } = require("../../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "servers",

  description: "Gives List Of Servers",

  async run(client, message, args) {
    if (message.author.id !== bowner) return;

    let page = 1;

    let servers = client.guilds.cache
      .sort((a, b) => b.memberCount - a.memberCount)
      .map(g => g);

    let paginated = util.paginate(servers, page, 20);

    const embed = new Discord.MessageEmbed()

      .setColor("RANDOM")

      .setDescription(
        paginated.items.map(g => `${g.name} - ${g.memberCount} (${g.id})`)
      );

    let m = await message.channel.send(embed);

    await m.react("◀️");

    await m.react("▶️");

    await m.react("❌");

    const filter = (reaction, user) =>
      (reaction.emoji.name === "◀️" && user.id === message.author.id) ||
      (reaction.emoji.name === "▶️" && user.id === message.author.id) ||
      (reaction.emoji.name === "❌" && user.id === message.author.id);

    let reactionChoice = await m.createReactionCollector(filter, {
      time: 500000
    });

    reactionChoice.on("collect", async r => {
      if (r.emoji.name === "◀️") {
        page--;

        paginated = util.paginate(servers, page, 20);

        let edit = new Discord.MessageEmbed()

          .setColor("RANDOM")

          .setDescription(
            paginated.items.map(g => `${g.name} - ${g.memberCount} (${g.id})`)
          );

        m.edit(edit);
      } else if (r.emoji.name === "▶️") {
        page++;

        paginated = util.paginate(servers, page, 20);

        let edit = new Discord.MessageEmbed()

          .setColor("RANDOM")

          .setDescription(
            paginated.items.map(g => `${g.name} - ${g.memberCount} (${g.id})`)
          );

        m.edit(edit);
      }

      if (r.emoji.name === "❌") {
        m.delete();

        return;
      }
    });
  }
};
