const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "kit",
  //aliases: ["porngif", "pgif"],
  description: "nsfw image",
  usage: "",

  async run(client, message, args) {
    //   if (!message.channel.nsfw) {
    //     return message.reply(
    //      "<:marvel_cross:814596854436069376> This channel dosen't support nsfw content"
    //    );
    //   } else {
    const image = await nsfw.kitsune();
    const embed = new MessageEmbed()
      .setColor("RED")
      .setTitle("KITSUNE")
      //    .setDescription(`${message.author} hugs ${victim}`)
      .setImage(image)
      .setTimestamp()
      .setFooter(
        "Requested By :-" + message.author.tag,
        message.author.displayAvatarURL()
      )
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
  //  }
};
