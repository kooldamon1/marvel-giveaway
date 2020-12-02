const { prefix } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
require("./music.js");
require("./uptime.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", async () => {
  try {
    console.log(client.user.tag + " Has Logged In");

    function pickStatus() {
      let status = ["shelp ╏ prefix :- s", "MADE BY :- SHADOW"];
      let Status = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[Status], {
        type: "PLAYING"
      });
    }
    setInterval(pickStatus, 5000);
  } catch (err) {
    console.log(err);
  }
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);

  if (message.content.match(prefixMention)) {
    return message.reply(`HEY MY PREFIX IS  \` at \`  
 __**MODERATION COMMANDS**__ <a:op11:764200185253199892>
\`helpmod\` all mod commands 
 
__**FUN COMMANDS**__ <a:wink_pikachu:764199916456902666>
\`helpfun\` all fun commands

__**INFORMATION COMMANDS**__ <a:load:764201016287559712>
\`helpinfo\` all info commands

__**MUSIC COMMANDS**__ <a:musicau:764209002741235745>
\`helpmusic\` all music commands

__**NSFW COMMANDS**__ <a:Cross:764209193790996512>
\`I AM CLEAN BOT\`

__**WELCOME COMMANDS**__ <a:welcome:764200994837758022>
\`setwelcome\` setwelcome #channel
\`setmessage\` setmessage <text you want to set>
\`resetwelcomimg\` reset welcome immage
\`resetwelcomemsg\` reset welcome message
\`delwelcome\` delete welcome message

__**SPECIAL COMMANDS**__ <a:party:764200631803838545>
\`giveaway\` giveaway <time channel prize> time in m,h,d format
\`math\` do maths for you 
\`announce\` announce something for you in embed
\`weather <area>\` weather area name 

__**CORONA COMMANDS**__ <a:heartbreak:764210242636349441>
\`corona all\` total deatails about corona on earth
\`corona <country>\` total corona details of named country
 
**__If Any Command Is Not Working Contact The Bot Owner__**
`);
  }

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.on("guildMemberAdd", async member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let default_url = `https://cdn.discordapp.com/attachments/696417925418057789/716197399336583178/giphy.gif`;

  let default_msg = `
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎

 | WELCOME ${member} TO ${member.guild}
        
𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎

 | BE SURE THAT YOU HAVE READ |

𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎

 | Username ${member.user.tag}
 | YOU CAN ENJOY IN  CHATTING 

𒃾────────╌╌╌╌╌╌┄┄┈┈┈𖣔︎
        **__THANKS FOR JOINING US__**
`;

  let m1 = db.get(`msg_${member.guild.id}`);
  if (!m1) m1 = default_msg;
  const msg = m1
    .replace("{member}", member.user)
    .replace("{member.guild}", member.guild)
    .replace(
      "${member.user.username} #${member.user.discriminator}",
      member.username
    )
    .replace("{member.user.membercount}", member.user.membercount)
    .replace("(:HEART)", `<a:BH:731369456634429493>`);

  let url = db.get(`url_${member.guild.id}`);
  if (url === null) url = default_url;

  let data = await canva.welcome(member, {
    link: "https://wallpapercave.com/wp/wp5128415.jpg"
  });

  const attachment = new discord.MessageAttachment(data, "welcome-image.png");

  let wembed = new discord.MessageEmbed()
    .setAuthor(
      member.user.username,
      member.user.avatarURL({ dynamic: true, size: 2048 })
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setColor("RANDOM")
    .setImage()
    .setDescription(msg);

  client.channels.cache.get(chx).send(wembed);
  client.channels.cache.get(chx).send(attachment);
});

client.login(process.env.TOKEN);
