const fetch = require("node-fetch");
const discord = require("discord.js");

function loadCuties(message) {
  fetch("https://www.reddit.com/r/ProgrammerAnimemes.json?limit=100&?sort=hot")
    .then(res => res.json())
    .then(json => json.data.children.map(v => v.data))
    .then(urls => postRandomCutie(urls, message))
    .catch(error => console.log(error.message));
}

function postRandomCutie(urls, message) {
  let randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
  if (urls[randomNumber].pinned === true) {
    randomNumber = Math.floor(Math.random() * urls.length - 1) + 1;
  }

  let myEmbed = new discord.MessageEmbed()

    .setTitle(urls[randomNumber].title)

    .setURL("https://reddit.com" + urls[randomNumber].permalink)

    .setColor("RED")

    .setFooter(
      "Requested By : " + message.author.tag,

      message.author.displayAvatarURL()
    )

    .setTimestamp((message.timestamp = Date.now()))

    .setImage(urls[randomNumber].url);
  message.channel.send({ embed: myEmbed });
}

module.exports = {
  name: "pa",
  aliases: ["programmeranimemes"],

  run(client, message, args) {
    try {
      loadCuties(message);
    } catch (err) {
      console.log(err);
    }
  }
};
