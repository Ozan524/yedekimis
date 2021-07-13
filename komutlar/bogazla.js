const { MessageEmbed, MessageAttachment } = require("discord.js");

exports.run = async (client, message, args) => {


    message.channel.send(`:timer: | Biraz Beklemelisin...`).then(m => m.delete({timeout: 1400}));
    message.channel.startTyping();
  let link = `https://api.devs-hub.xyz/grab?image=${message.author.displayAvatarURL({size: 1024})}`;

  
  const ek = new MessageAttachment(link, `theykaa.png`);

  message.channel.stopTyping();

  return message.channel.send(ek);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "boğazla",
  description: "",
  usage: ""
};