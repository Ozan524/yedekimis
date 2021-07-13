const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
 **s!mod-log #kanal** = Mod-log ayarlar.
 **s!mod-log sıfırla** = Mod-log sıfırlar.
 **s!bansay** = Sunucuda kaç banlanan üye olduğunu gösterir.
 **s!ban @kullanıcı** = Etiketlediğiniz kullanıcıyı banlar.
 **s!küfürengel** = Küfür engel açar/kapatır.
 **s!küfürlog #kanal** = Küfür-log ayarlar.
 **s!reklamengel** = Reklam engel açar/kapatır.
 **s!reklamlog #kanal** = Reklam-log ayarlar.
 **s!sa-as aç** = SA-AS sistemini açar.
 **s!sa-as kapat** = SA-AS sistemini kapatır.
 **s!sil** = Yazdığınız miktar kadar mesaj siler.
 **s!say** = Sunucu bilgilerini gösterir.
 **s!oylama** = Oylama yapar.
 **s!otorol-ayarla @rol #kanal** = Otorol ayarlar.
 **s!otorol-sıfırla** = Otorol sıfırlar.
 **s!otorol-mesaj-ayarla** = Otorol mesajı ayarlar.
 **s!otorol-mesaj-sıfırla** = Otorol mesajı sıfırlar.
 **s!yavaş-mod** = Kanala Yavaş Mod Ekler.
 **s!nuke** = Kanalı Siler Ama Clonesini Oluşturur.
 **s!isim-d** = Bir Kullanıcının İsmini Değiştirir.
 **s!mute** = Kullanıcıyı Süreli Susturur.
 **s!capslock-engel aç** = Büyük Harf Yazımını Engellemesini Açar.
 **s!capslock-engel kapat** = Büyük Harf Yazımını Engellemsini Kapatır.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};