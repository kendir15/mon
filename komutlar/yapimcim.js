const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
    .setColor('00001')
 .addField("**<a:tac_1:753542917154668554> Yapımcım **", `<@552180565814542336>`)
 .addField("**<a:tac_1:753542917154668554> Yapımcım **", `<@720562744629264427>`)
 
  .setThumbnail(message.author.avatarURL)
  .setFooter(`Komutu Kullanan Kisi:  ${message.author.username}`, message.author.avatarURL)
 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcım'
};