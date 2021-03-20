const { prefix, sserver } = require("./config.json");
const { config } = require("dotenv");
const db = require("quick.db");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();
const discord = require("discord.js");
const { GiveawaysManager } = require("discord-giveaways");
const client = new discord.Client({
  disableEveryone: false
});
//require("./brvlogger.js");
require("./uptime.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("ready", async () => {
  // const channel = client.channels.cache.get("805785436399861790");
  //  channel.join().then(connection => {
  //    connection.voice.setSelfDeaf(true);
  //  });
  try {
    console.log(`Successfully logged in as ${client.user.tag}!`);
    //   uction pickStatus() {
    //    let status = ["BLACKOUT OFFICIAL", "bhelp | bsupport"];
    //    let Status = Math.floor(Math.random() * status.length);
    //   client.user.setActivity("BЯΛVΣ丶ΩFFICIΛŁ", {
    //    type: "STREAMING",
    //     url: sserver
    //   });
    //  }

    client.on("message", async message => {
      const prefixMention = new RegExp(`^<@!?${client}>( |)$`);
      if (message.content.match(prefixMention)) {
        let mention = new discord.MessageEmbed()
          .setTitle(client.user.username)
          .addField("PREFIX", `\`${prefix}\``)
          .addField("USAGE", `\`${prefix}help\``)
          .setColor("RANDOM")
          .setFooter(`Bot Mentioned By ${message.author.username}`);
        message.channel.send(mention);
        return;
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
    //  setInterval(pickStatus, 5000);
  } catch (err) {
    console.log(err);
  }
});

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
  // This function is called when the manager needs to get all the giveaway stored in the database.
  async getAllGiveaways() {
    // Get all the giveaway in the database
    return db.get("giveaways");
  }
  // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
  async saveGiveaway(messageID, giveawayData) {
    // Add the new one
    db.push("giveaways", giveawayData);
    // Don't forget to return something!
    return true;
  }

  async editGiveaway(messageID, giveawayData) {
    // Gets all the current giveaways
    const giveaways = db.get("giveaways");
    // Remove the old giveaway from the current giveaways ID
    const newGiveawaysArray = giveaways.filter(
      giveaway => giveaway.messageID !== messageID
    );
    // Push the new giveaway to the array
    newGiveawaysArray.push(giveawayData);
    // Save the updated array
    db.set("giveaways", newGiveawaysArray);
    // Don't forget to return something!
    return true;
  }

  // This function is called when a giveaway needs to be deleted from the database.
  async deleteGiveaway(messageID) {
    // Remove the giveaway from the array
    const newGiveawaysArray = db
      .get("giveaways")
      .filter(giveaway => giveaway.messageID !== messageID);
    // Save the updated array
    db.set("giveaways", newGiveawaysArray);
    // Don't forget to return something!
    return true;
  }
};

if (!db.get("giveaways")) db.set("giveaways", []);

// Create a new instance of your new class

const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
    embedColor: "RED",
    reaction: "🎉"
  }
});

client.giveawaysManager = manager;
// We now have a client.giveawaysManager property to manage our giveaways!
client.giveawaysManager.on(
  "giveawayReactionAdded",
  (giveaway, member, reaction) => {
    console.log(
      `${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`
    );
  }
);

client.giveawaysManager.on(
  "giveawayReactionRemoved",
  (giveaway, member, reaction) => {
    console.log(
      `${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`
    );
  }
);

client.login(process.env.TOKEN);

//auto pinging

let count = 0;

setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),

  300000
);
