const discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
if(message.channel.type == "dm")  return;
if (message.channel.type !== "text") return;
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanabilmen İçin **Mesajları Yönet** Yetkisine Sahip Olman"); 
const limit = args[0] ? args[0] : 0;
if(!limit) { var fynix = new discord.MessageEmbed()
.setDescription(`Doğru kullanım: \`${prefix}yavaş-mod [0/100]\``)
.setColor('RED')
.setTimestamp()
 message.channel.send({fynix})
return
          }
if (limit > 100) {
    return message.channel.send(new discord.MessageEmbed().setDescription("Maksimum **100** saniye olabilir.").setColor('RED'));
}  
    message.channel.send(new discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('BLUE')).then(m => m.delete({ timeout: 3000, reason: 'Siliniyor' }));
  
var request = require('request');
request({
    url: `https://discord.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,      
  guildOnly: false,
  aliases: ["slow-mode", "yavaşmod"],
  permLevel: 0, 

};

exports.help = {
  name: 'yavaş-mod',    
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod',
};