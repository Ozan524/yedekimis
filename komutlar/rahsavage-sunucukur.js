const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
 
exports.run = async(client, message, args) => {
 
if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu Komut Sunucu Sahiplerine Özel Olarak Yapılmıştır.. *Yönetici Yetkiniz Bulunsa Bile Sadece Sunucu Sahibi Kullanabilir.*')
  
  
  if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('Sunucu Kur').setDescription('Kanalların Kurulumu Başlatılsın mı?').setFooter('Bunun için Tüm Kanalları Silmeniz Önerilir, Bu eylemi onaylıyorsan ---> evet <---  yazman yeterlidir. Bu 20 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 20000,
errors: ['time'],
})
.then((collected) => {
  
  
            message.guild.channels.create(`ÖNEMLİ KANALLAR`, { type: 'category'});
   
   message.guild.channels.create(`║🥝║kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`║🚀║boosters`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`║🎉║duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
   message.guild.channels.create(`║🍗║toplantı`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
             message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
   message.guild.channels.create(`║💬║sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`║🤖║bot-komut`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`║📷║ss-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
   message.guild.channels.create(`║💎║şikayet-odasi`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
              message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(`║💠║Sesli 1`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
      message.guild.channels.create(`║💠║Sesli 2`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`║💠║Sesli 3`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
      message.guild.channels.create(`║🔰║Oyun 1`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`║🔰║Oyun 2`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`║🔰║Oyun 3`, {type : "voice"})
   .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
   message.guild.channels.create(`║🎻║Müzik 1`, {type : "voice"})
  
            message.guild.channels.create(`EĞLENCE KANALLAR`, { type: 'category'});
   
   message.guild.channels.create(`║🎁║sayı-sayma`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE KANALLAR")))
     message.guild.channels.create(`║🎁║kelime-türetme`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE KANALLAR")))
       message.guild.channels.create(`║🎁║gangsta-bölgesi`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "EĞLENCE KANALLAR")))
  
              message.guild.channels.create(`uyku`, { type: 'category'});
     message.guild.channels.create(`║🌙║uyku`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "uyku")))
  
  message.channel.send("Gerekli Kanallar Kuruluyor. Rolleri Kendiniz Ayarlayınız.")
  message.author.send("Sunucunuz Başarıyla Kurulmuştur !")
          });
});
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//sunucukur2
  permLevel: 4,
  kategori: "mod"
};

exports.help = {
  name: 'sunucukur-gelişmiş',
  description: 'Sunucuyu kurar.',
  usage: 'ewoşgw'
};