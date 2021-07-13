const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
 **s!alkış** = Alkışlar
 **s!kaç-cm** = Malafatını Ölçer.
 **s!atatürk** = Atatürk'ün Bir Sözü İle Fotoğrafını Atar. 
 **s!token** = Botun Tokenini Atar (Küfür,Hakaret... Bulunmamaktadır.)
 **s!boğazla** = Kapak Fotoğrafınıza Boğazlama Haraketinizi Göstererek Kanala Atar.
 **s!spoiler** = Yazınızı Sansürliyerek Gönderir.
 **s!efkarım** = Efkarınızı Ölçer.
 **s!kral-ol** = Kral Olursunuz.
 **s!korona-ol** = Korona Olursunuz.
 **s!fbi** = Evinize FBI Girer.
 **s!balık-tut** = Balık Tutarsınız.
 **s!Covid19-tablo** = Günlük Korona Tablosunu Gösterir.
 **s!espiri** = Bot Espiri Yapar.
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
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};