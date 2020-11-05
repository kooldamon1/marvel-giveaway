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
\`advice\` - gives you advice 

\`suggest\` - suggest us something

\`ascii\` - chandges text to aescii

\`dog\` - random dog image 

\`fact\` - random fact 

\`hug\` - mention user to hug 

\`joke\` - random joke

\`kpop\` - kpop image random

\`math\` - solve problem 

\`meme\` - random meme

\`mw\` - random mobile wallpaper 

\`slap\` - @user to slap

\`punch\` - @user to punch 

\`cry\` - makes you cry

\`kill\` - kill yourself 

\`kiss\` - kiss mention user

\`cat\` - random cat pic

\`anime\` - random anime

\`neko\` - just use it

\`afk\` - sets afk for you 
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
