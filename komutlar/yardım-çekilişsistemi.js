const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
 **s!hızlıçekiliş** = Hızlı Çekiliş Yapar.
 **s!çekiliş-başlat** = Çekiliş başlatır.
 **s!reroll** = Çekilişi yeniden çeker.
 **s!çekilişbitir** = Çekilişi bitirir.
`)
 .setFooter(`Spike BOT`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};