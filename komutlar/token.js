const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const theykaa = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage("https://image.shutterstock.com/image-vector/rejected-stamp-red-round-grunge-260nw-557065291.jpg")
        .setTitle("Tokenim: ");
    message.channel.send(theykaa);
}; 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["token", "tokenim"],
    permLevel: `0`
};

exports.help = {
    name: "token",
    description: "tokenim",
    usage: "token"
};