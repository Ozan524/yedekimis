const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
  let kişi = message.mentions.members.first()


  let devilscodealkış = new Discord.MessageEmbed()
  .setColor('#313131')
  .setDescription(`**<@!${message.author.id}>  Aferin Sana :clap:**`)
.setImage('https://cdn.discordapp.com/attachments/830795219922059304/830851933807575110/alkis.gif')
  message.channel.send(devilscodealkış)  
  
    
  } 

exports.conf = {                
    aliases: ['alkış']
}
exports.help = {
  name: 'alkış',
  usage: 'Alkış Komudu'
}