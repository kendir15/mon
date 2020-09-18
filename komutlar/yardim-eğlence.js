const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Eğlence Menüsü`)
.setColor('BLACK')
.addField("Eğlenme Vakti!",`
**<a:elmas_23:753542886410158140> = \`zarat\` : Zar atarsınız.**
**<a:elmas_23:753542886410158140> = \`tkm\` : Taş kağıt makas oynarsınız.**
**<a:elmas_23:753542886410158140> = \`wasted\` : Avatarınıza wasted efekti ekler.**
**<a:elmas_23:753542886410158140> = \`pixel\` : Avatarınızı pixelleştirir.**
**<a:elmas_23:753542886410158140> = \`zıtrenk\` : Avatarınızı zıt renge çevirir.**
**<a:elmas_23:753542886410158140> = \`yazıtura\` : Yazı tura oyunu oynarsınız.**`)

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'eğlence'
}; 