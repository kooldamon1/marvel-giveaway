const Discord = require("discord.js");
const wiki = require("wikijs").default;
const { prefix } = require("../../config.json");

module.exports = {
  name: "wiki",
  description: "Returns Wiki Information for Mentioned Word/Phrase",
  usage: `\`${prefix}wiki <Text>\``,
  async run(client, message, args) {
    if (!message.guild.me.permissions.has("EMBED_LINKS"))
      return message.channel.send(
        `I Don't Have Permission To Use This Command! Embed Links`
      );
    const query = message.content
      .split(/\s+/g)
      .slice(1)
      .join(" ");
    if (!query) return message.channel.send(`Usage: ${this.usage}`);
    const data = await wiki().search(query, 1);
    if (!data.results || !data.results.length)
      return message.channel.send("No matches found!");
    const page = await wiki().page(data.results[0]);
    const summary = await page.summary();
    const paragraphs = summary.split("\n");
    if (!query.options) paragraphs.length = Math.min(1, paragraphs.length);
    try {
      const embed = new Discord.MessageEmbed()
        .setTitle(page.raw.title)
        .setURL(page.raw.fullurl)
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u_17O8c_xgKnGbjlCl-WpP9sayUfuFsr4lxKV-IcUjU/%3Fwidth%3D469%26height%3D469/https/media.discordapp.net/attachments/751350446593146960/751532147839598682/1024px-Wikipedia_svg_logo.png?width=240&height=240"
        )
        .setDescription(paragraphs.join("\n\n"))
        .setFooter(
          "Requested by" + message.member.user.username.toUpperCase(),
          message.member.user.displayAvatarURL()
        )
        .setColor("#c7c8ca");
      return message.channel.send(
        `First search result of \`${query}\` on Wikipedia:`,
        { embed }
      );
    } catch (err) {
      const embed = new Discord.MessageEmbed()

        .setAuthor(page.raw.title)
        .setDescription(
          "This paragraph was too long for the embed, please click on the title."
        )
        .setFooter(
          "Requested by" + message.member.user.username.toUpperCase(),
          message.member.user.displayAvatarURL()
        )
        .setColor("RANDOM");
      return message.channel.send(
        `First search result of \`${query}\` on Wikipedia:`,
        { embed }
      );
    }
  }
};
