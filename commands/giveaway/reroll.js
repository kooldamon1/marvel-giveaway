const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const { prefix } = require("../../config.json");
module.exports = {
  //  config: {
  name: "reroll",
  description: "Rerolling giveaway winner",
  accessableby: "Administrator",
  category: "giveaway",
  aliases: ["giveaway-reroll"],
  usage: prefix + "reroll <messagegiveawayid>",
  //    },
  run: async (client, message, args) => {
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") &&
      !message.member.roles.cache.some(r => r.name === "Giveaways")
    ) {
      return message.channel.send(
        "<:marvel_cross:814596854436069376> You need to have the manage messages permissions to reroll giveaways."
      );
    }

    // If no message ID or giveaway name is specified
    if (!args[0]) {
      return message.channel.send(
        "<:marvel_cross:814596854436069376> You have to specify a valid message ID!"
      );
    }

    // try to found the giveaway with prize then with ID
    let giveaway =
      // Search with giveaway prize
      client.giveawaysManager.giveaways.find(g => g.prize === args.join(" ")) ||
      // Search with giveaway ID
      client.giveawaysManager.giveaways.find(g => g.messageID === args[0]);

    // If no giveaway was found
    if (!giveaway) {
      return message.channel.send(
        "<:marvel_cross:814596854436069376> Unable to find a giveaway for `" +
          args.join(" ") +
          "`."
      );
    }

    // Reroll the giveaway
    client.giveawaysManager
      .reroll(giveaway.messageID)
      .then(() => {
        // Success message
        message.channel.send(
          "<:marvel_tick:814596834814197781> Giveaway rerolled!"
        );
      })
      .catch(e => {
        if (
          e.startsWith(
            `Giveaway with message ID ${giveaway.messageID} is not ended.`
          )
        ) {
          message.channel.send(
            "<:marvel_cross:814596854436069376> This giveaway is not ended!"
          );
        } else {
          console.error(e);
          message.channel.send(
            "<:marvel_cross:814596854436069376> An error occured..."
          );
        }
      });
  }
};
