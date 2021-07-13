const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Yetkiniz Bulunmamaktadır.`)
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`**Capslock Engel Sistemi KAPATILDI** \n **Açılması Önerilir !!**`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'aç')
    message.channel.send(`**Capslock Engel Sistemi AKTİFLENDİ**`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock-engel'],
  permLevel: 3 
};

exports.help = {
  name: 'capslock-engel aç',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};