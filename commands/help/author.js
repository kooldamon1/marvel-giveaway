const discord = require("discord.js");

module.exports = {
  name: "author",
  aliases: ["owner"],
  category: "help",
  description: "KNOW ABOUT THE CREATOR OF BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`ABOUT SHADOW <a:em:764943862677635102>`)
      .setDescription(
        `
━━━━━━━━━━━━━━━━━━━━━━━━━
__THE CREATOR OF THE BOT Is ShaDoW__

HE IS A PROFSSIONAL SERVER DESIGNER,
MANAGER & BOT DEVELOPER.
MAINLY HE USES JS TO CREATE BOT
━━━━━━━━━━━━━━━━━━━━━━━━━`
      )
      .setColor("RANDOM")
      .setFooter(`BOT MADE BY:- ShaDoW & Typhon`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
