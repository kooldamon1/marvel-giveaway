const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "removerole",
  aliases: ["rrole", "-role"],
  category: "moderation",
  description: "Remove role from any user",
  run: async (client, message, args) => {
    let target = message.mentions.members.first();

    if (!target) return message.reply(`I am unable to find the user`);

    let rrole = message.mentions.roles.first();
    
    if (message.guild.me.roles.highest.position <= role1.position) return message.reply(`My Role isn't High Enough to Assign The Role! ${role1.name}`);

    if (!rrole) return message.reply(`I am unable to find the role`); 

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()

      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(
        `<a:tick1:764199777281114133> | ${rrole} role removed from ${target}`
      )
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp();

    await message.channel.send(embed);

    target.roles.remove(rrole);
  }
};
