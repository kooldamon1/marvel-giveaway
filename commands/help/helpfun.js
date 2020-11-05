const discord = require("discord.js");
const client = new discord.Client();
module.exports = {
  name: "helpfun",
  category: "help",
  description: "SHADOW OP ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`FUN COMMANDS <a:wink_pikachu:764199916456902666>`)
      .setDescription(
        `━━━━━━━━━━━━━━━━━━━━━━━━━
\`atadvice\` - gives you advice 

\`atsuggest\` - suggest us something

\`atascii\` - chandges text to aescii

\`atdog\` - random dog image 

\`atfact\` - random fact 

\`athug\` - mention user to hug 

\`atjoke\` - random joke

\`atkpop\` - kpop image random

\`atmath\` - solve problem 

\`atmeme\` - random meme

\`atmw\` - random mobile wallpaper 

\`atslap\` - @user to slap

\`atpunch\` - @user to punch 

\`atcry\` - makes you cry

\`atkill\` - kill yourself 

\`atkiss\` - kiss mention user

\`atcat\` - random cat pic

\`atanime\` - random anime

\`atneko\` - just use it 
━━━━━━━━━━━━━━━━━━━━━━━━━\
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#93BFE6")
      .setFooter(`ShaDoW Op`)
      .setTimestamp((message.timestamp = Date.now()));
    await message.channel.send(embed);
    message.react(client.emojis.cache.get("764199916456902666"));
  }
};
