const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "boobs",
  category: "fun",
  description: "Slap someone",
  run: async (client, message, args) => {
    let data = await random.getAnimeImgURL("boobs");

    let embed = new discord.MessageEmbed()
      .setImage(data)
      .setColor("RANDOM")
      .setFooter(`${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
