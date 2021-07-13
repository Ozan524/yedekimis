const Discord = require ("discord.js");
exports.run = (client, message) => {
  
  
  var ZeroCode = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setDescription(`Korona Virüsü Sanada Bulaşdı. \n Bir Vaka Daha Görüldü \n İsmi = ${message.author.username}`)
  .setImage(`https://cdn.discordapp.com/attachments/677985078202073109/689935110551765023/a.gif`)
  
  message.channel.send(ZeroCode)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "",
  permLevel: 0
};
module.exports.help = {
  name: 'korona-ol',
};