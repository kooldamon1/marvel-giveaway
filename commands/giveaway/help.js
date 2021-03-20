const discord = require("discord.js");
const { bowner, prefix, binvite } = require("../../config.json");
module.exports = {
  name: "ghelp",
  aliases: ["giveawayhelp", "helpgiveaway"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",

  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()

      .setTitle(
        `<:marvel_party:815337878857973760> GIVEAWAY HELP <:marvel_party:815337878857973760>`
      )
      //   .addField("<:marvel_developer:814763184510337024> Name", "DAMON")
      //   .addField("<:marvel_developer:814763184510337024> Id", bowner)
      .addField(
        "<:marvel_arrow_right:815105698853552128> START A GIVEAWAY",
        "`" +
          prefix +
          "giveaway <channel> <time> <winner amount> <prize>` \nStarts A New Giveaway In Selected Channel. \n\nExample : " +
          prefix +
          "giveaway #channel 10m 1 PREMIUM BOT \n"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> SELECT ANOTHER WINNER",
        "`" +
          prefix +
          "reroll <giveaway message id>` \nReselects A New Winner For Selected Giveaway. \n\nExapmle : " +
          prefix +
          "reroll 63747374737373 \n"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> END GIVEAWAY",
        "`" +
          prefix +
          "end <giveaway message id>` \nEnds The Selected Giveaway With A Winner Within 5 Seconds. \n\nExample : " +
          prefix +
          "end 63747374737373 \n"
      )
      .addField(
        "<:marvel_arrow_right:815105698853552128> RULES",
        "GIVEAWAY MUST HAVE AT LEAST EQUAL PARTICIPANTS AS OF WINNERS TO BE SELECTED OTHER WISE IT WONT SHOW ANY RESULT"
      )
      .addField(
        "<:marvel_discord:814792681157820416> Discord Server",
        "[SUPPORT](https://discord.gg/wXemeVm)"
      )
      .addField(
        " <:marvel_invite:814508240880009276> **Invite**",
        "[discord.gg/invite](" + binvite + ")"
      )
      //   .addField(
      //     "<:marvel_instagram:814792972289310735> Instagram",
      //       "[Profile](https://instagram.com/kool_damon?igshid=19ucgccojy4cp)"
      //           .addField("<:marvel_js:814806752184631317> Code Library", "discord.js")

      .setThumbnail(
        client.user.displayAvatarURL()
        //     "https://cdn.discordapp.com/avatars/672027578181353473/33f98d80d3825b6cdea4ffa66259bc5b.png?size=1024"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/799624878109622312/815350849286438912/20210228_040258.png"
      )
      .setColor("RED")
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));
    message.react("815337878857973760");

    message.channel.send(embed);
  }
};
