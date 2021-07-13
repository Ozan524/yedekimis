const Discord = require("discord.js");

exports.run = (client, message) => {

const devils = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Spike Bot 2021** \n**Efkarınız:** **%${devils}** **Olarak Efkar Ölçdüm.** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Efkarınızı ölçer",
  usage: "efkar Ölçer"
};