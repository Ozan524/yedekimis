const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

if (!message.guild) return;
if (message.author.id !== ayarlar.sahip) return message.channel.send("Sahibim Değilsin. **REJECTED**")
message.delete();
message.channel.send('Bot Yeniden Başlatılsın mı ? \n Yeniden Başlatmak İçin: **E** \n Yeniden Başlatmamak İçin: **5 Saniye Bekleyiniz.** \n **Yazınız.**').then(() => {
message.channel.awaitMessages(response => response.content === 'E', {
max: 1,
time: 5000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Reboot Onaylama!').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('Yeniden Başlatma Başarılı!', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Yeniden Başlatma İptal Edildi.').setFooter('Spike Bot 2021', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};