const weather = require('weather-js');
const discord = require('discord.js')

module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weather <>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Please give the weather location")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription(" Temperature units can may be differ some time ")
.addField("<a:tick:764200127002443806> Temperature " , `${result[0].current.temperature} Celcius`, true)
.addField("<a:tick:764200127002443806> Sky Text ", result[0].current.skytext, true)
.addField("<a:tick:764200127002443806> Humidity", result[0].current.humidity, true)
.addField("<a:tick:764200127002443806> Wind Speed", result[0].current.windspeed, true)//What about image
.addField("<a:tick:764200127002443806> Observation Time", result[0].current.observationtime, true)
.addField("<a:tick:764200127002443806> Wind Display", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   
    //LETS CHECK OUT PKG
    
  }
}