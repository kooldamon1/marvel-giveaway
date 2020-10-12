const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "whois",
  aliases: ["userinfo"],
  category: "info",
  description: "Get info of any user",
  run: async (client, message, args) => {
    let target;

    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    if (target.presence.status === "dnd")
      target.presence.status = "Do Not Disturb <a:dnd:764943542597844993>";
    if (target.presence.status === "idle")
      target.presence.status = "Idle <a:idle:764943531072552980>";
    if (target.presence.status === "online")
      target.presence.status = "Online <a:online:764943506409783346>";
    if (target.presence.status === "offline")
      target.presence.status = "Offline <a:offline:764943518929256448>";

    function game() {
      let game;
      if (target.presence.activities.length >= 1)
        game = `${target.presence.activities[0].type} ${target.presence.activities[0].name}`;
      else if (target.presence.activities.length < 1) game = "None";
      return game;
    }

    let x = Date.now() - target.createdAt;
    let y = Date.now() - message.guild.members.cache.get(target.id).joinedAt;
    let created = Math.floor(x / 86400000);
    let joined = Math.floor(y / 86400000);

    const member = message.guild.member(target);
    let nickname =
      member.nickname !== undefined && member.nickname !== null
        ? member.nickname
        : "None";
    let status = target.presence.status;
    let avatar = target.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    let createdate = moment.utc(target.createdAt).format("ddd, Do MMMM YYYY");
    let joindate = moment.utc(target.joinedAt).format("ddd, Do MMMM YYYY");
    let flags = target.flags.toArray();
    if (target.flags.toArray() < 1) flags = "None";

    const embed = new MessageEmbed()
      .setAuthor(target.tag, avatar)
      .setThumbnail(avatar)
      .setDescription(
        `
**<a:rainbowleft:764200797629186049> Name:** 
<a:loading:764199817769254912> ${target.username}

**<a:rainbowleft:764200797629186049> ID:** 
<a:loading:764199817769254912> ${target.id}

**<a:rainbowleft:764200797629186049> Nickname:** 
<a:loading:764199817769254912> ${nickname}

**<a:rainbowleft:764200797629186049> Account Creation:** 
<a:loading:764199817769254912> ${createdate} | ${created} day(s) ago

**<a:rainbowleft:764200797629186049> Server Joined:** 
<a:loading:764199817769254912> ${joined} day(s) ago

**<a:rainbowleft:764200797629186049> Status:** 
<a:loading:764199817769254912> ${status}

**<a:rainbowleft:764200797629186049> Badges:** 
<a:loading:764199817769254912> ${flags}

**<a:rainbowleft:764200797629186049> Roles:** 
<a:loading:764199817769254912> <@&${member._roles.join("> <@&")}>`
      )
      .setColor("#FFFFFF")
      .setFooter(`Asked by ${message.author.username}`, aicon)
      .setTimestamp();

    message.channel.send(embed);
  }
};
