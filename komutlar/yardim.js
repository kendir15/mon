const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('BLACK')
.addField("MON-BOT | Yardım Komutları! ",`
**<a:elmas_23:753542886410158140> = \`genel\` : Genel komutları açar.**
**<a:elmas_23:753542886410158140> = \`ayarlar\` : Moderasyon komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`sunucu\` : Sunucu komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`eğlence\` : Eğlence komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`yardımkayıt\` : Kayıt komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`logo\` : Logo yapma komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`eklenti\` : Eklenti komutlarını açar.**`)
.setImage('https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım","yardim"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 