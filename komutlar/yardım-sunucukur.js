const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Sunucu Kurma Yardım Menüsü`)
 .setDescription(`
 **s!sunucukur-public** = Public Sunucusu Kurar.
 **s!sunucukur-gelişmiş** = Gelişmiş Sunucu Kurar. 
 **s!** = 
 **s!** = 
`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'sunucu-kur',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};