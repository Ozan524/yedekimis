const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = ``

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
 **s!ban-koruma #kanal** = Ban koruma sistemini açar.
 **s!ban-koruma-sıfırla** = Ban koruma sistemini sıfırlar.
 **s!kanal-koruma #kanal** = Kanal koruma sistemini açar.
 **s!kanal-koruma-sıfırla** = Kanal koruma sistemini sıfırlar.
 **s!rol-koruma #kanal** = Rol koruma sistemini açar.
 **s!rol-koruma-sıfırla** = Rol koruma sistemini sıfırlar.
 **s!spam-koruma** = Spam koruma sistemini açar.
 **s!spam-koruma-kapat** = Spam koruma sistemini kapatır.`)
 .setFooter(`Spike BOT`)
 .setTimestamp()
 .setImage(gif)
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
  name: 'koruma',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};