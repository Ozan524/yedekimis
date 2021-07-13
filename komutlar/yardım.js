const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`s!kullanıcı\` \n **Örnek:** \`s!moderasyon\``)
  .addField('Kategoriler:', `
  :arrow_right: **s!kullanıcı**
   
  :arrow_right: **s!eğlence**

  :arrow_right: **s!koruma**

  :arrow_right: **s!moderasyon**

  :arrow_right: **s!çekiliş**
 
  :arrow_right: **s!sunucu-kur**
  
  `)
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}