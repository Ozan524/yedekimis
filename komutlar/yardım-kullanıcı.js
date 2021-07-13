const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **s!davet** = Botu davet edersiniz.
 **s!toplam-komut** = Botda Bulunan Komut Sayısını Gösterir.
 **s!shardbilgi** = Botun shard bilgilerini gösterir.
 **s!pp** = Etiketlediğiniz kişinin avatarını gösterir.
 **s!randompp** = Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **s!öneri** = Bota öneri belirtirsiniz. [KAPALI KOMUT]
 **s!istatistik** = Botun istatistiğini gösterir.
 **s!sonmesaj** = Yazdığınız son mesajı gösterir.
`)
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};