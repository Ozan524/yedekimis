const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  //if(db.get(`CodEmingOneri.${message.author.id}`)) return message.channel.send('Bekleyen bir önerin var zaten!')
  let baslık = args[0];
  let ıcerik = args.slice(1).join(" ");
  if (!baslık && !ıcerik)
    return message.channel.send(
      "Bir içerik veya başlık belirtmedin. Lütfen tekrar dene!"
    );
  db.set(`CodEmingOneri.${message.author.id}`, {
    sistembaslık: baslık,
    sistemicerik: ıcerik
  });
  db.add("CodEmingÖneriSıra.", 1);
  db.add("CodEmingÖneriKullanıcıSıra." + message.author.id + "", 1);
  message.delete();
  message.channel.send(":tada: Reportun başarıyla alınmıştır!");

  let log = "858486261501132800";
  let veri = db.get(`CodEmingOneri.${message.author.id}`);
  client.channels.cache.get(log).send(
    new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Kullanıcı: ${message.author.tag} [${message.author.id}]`)
      .setAuthor(
        "Bir Report Belirdi",
        message.author.displayAvatarURL({ dynamic: true }),
        "https://discord.gg/ZDfUWKbr92"
      ).setDescription(`
Raporu
\`\`\`cs
${veri.sistembaslık}
\`\`\`
Gönderme Sırası
\`\`\`cs
${db.get("CodEmingÖneriSıra")}
\`\`\`
Çözüm:
\`\`\`En Geç 1 İş Günü İçerisinde İlgilenicek
${veri.sistemicerik}
\`\`\`
`)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bug-bildir"
};
