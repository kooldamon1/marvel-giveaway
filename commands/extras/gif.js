const { MessageEmbed } = require("discord.js");
const { giphy_API } = require("../../config.json");
const giphy = require("giphy-api")(giphy_API);

module.exports = {
  //    config: {
  name: "gif",
  category: "image",
  aliases: ["search-gif", "search-gifs"],
  description: "Provide a query and I will return a gif!",
  usage: "[query]",
  accessableby: "everyone",
  //   },
  run: async (client, message, args) => {
    if (!args[0]) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("GIF")
        .setDescription("**Please Enter A Search Query!**");
      return message.channel.send(embed);
    }
    try {
      giphy.search(args.join(" ")).then(function(res) {
        let id = res.data[0].id;
        let url = `https://media.giphy.com/media/${id}/giphy.gif`;
        const embed = {
          color: "GREEN",
          timestamp: new Date(),
          footer: {
            text: message.author.username,
            icon_url: message.author.displayAvatarURL()
          },
          image: {
            url: url
          }
        };
        message.channel.send({ embed });
      });
    } catch {
      return message.channel.send("**Not Found!**");
    }
  }
};
