const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Get the info of any server",
  run: async (client, message, args) => {
    if (message.guild.premiumTier === "Level 0") message.guild.premiumTier = "0"
    if (message.guild.premiumTier === "Level 1") message.guild.premiumTier = "1"
    if (message.guild.premiumTier === "Level 2") message.guild.premiumTier = "2"
    if (message.guild.premiumTier === "Level 3") message.guild.premiumTier = "3"
    
    if (message.guild.region === "india") message.guild.region = "<a:India:764200316156510218> India"
    if (message.guild.region === "brazil") message.guild.region = "🇧🇷 Brazil"
    if (message.guild.region === "japan") message.guild.region = "🇯🇵 Japan"
    if (message.guild.region === "russia") message.guild.region = "🇷🇺 Russia"
    if (message.guild.region === "europe") message.guild.region = "🇪🇺 Europe"
    if (message.guild.region === "sydney") message.guild.region = "🇦🇺 Sydney"
    if (message.guild.region === "singapore") message.guild.region = "🇸🇬 Singapore"
    if (message.guild.region === "hongkong") message.guild.region = "🇭🇰 Hong Kong"
    if (message.guild.region === "southafrica") message.guild.region = "🇿🇦 South Africa"
    if (message.guild.region === "us-east") message.guild.region = "🇺🇸 US East" 
    if (message.guild.region === "us-west") message.guild.region = "🇺🇸 US West"
    if (message.guild.region === "us-central") message.guild.region = "🇺🇸US Central"
    if (message.guild.region === "us-south") message.guild.region = "🇺🇸 US South"
    
      let boostlevel = message.guild.premiumTier
    
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    let sicon = message.guild.iconURL({ dynamic: true, size: 2048 });
    
    let embed = new discord.MessageEmbed()
      .setTitle(message.guild)
      .setDescription(
        `
<a:vshield:764199958257336321> **OWNER**
<a:q1:764200105786998815> ${message.guild.owner.user.tag}

<a:vshield:764199958257336321> **SERVER ID**
<a:q1:764200105786998815> ${message.guild.id}

<a:vshield:764199958257336321> **REGION**
<a:q1:764200105786998815> ${message.guild.region}

<a:vshield:764199958257336321> **TOTAL MEMBERS**
<a:q1:764200105786998815> ${message.guild.memberCount}

<a:vshield:764199958257336321> **TOTAL CHANNELS **
<a:q1:764200105786998815> ${message.guild.channels.cache.size}

<a:vshield:764199958257336321> **TOTAL ROLES**
<a:q1:764200105786998815> ${message.guild.roles.cache.size}

<a:vshield:764199958257336321> **TOTAL EMOJI **
<a:q1:764200105786998815> ${message.guild.emojis.cache.size}

<a:vshield:764199958257336321> **SERVER CREATED AT**
<a:q1:764200105786998815> ${message.guild.createdAt}

<a:vshield:764199958257336321> **SERVER BOOST**
<a:q1:764200105786998815> ${message.guild.premiumSubscriptionCount}

<a:vshield:764199958257336321> **BOOST LEVEL**
<a:q1:764200105786998815> ${boostlevel}

<a:vshield:764199958257336321> **Security** 
<a:q1:764200105786998815> ${message.guild.verificationLevel}
`)
      
      .setImage(message.guild.iconURL({dynamic: true, size: 1024}))
      .setColor("#00ff00")
      .setFooter(message.guild)

    message.channel.send(embed);
  }
};