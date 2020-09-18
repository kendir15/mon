const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Kayıt Menüsü`)
.setColor('BLACK')
.addField("MON-BOT | Kayıt Sistemi",`
**<a:elmas_23:753542886410158140> = \`kayıt-rol\` : Kayıt edilecek rolünü ayarlarsınız.**
**<a:elmas_23:753542886410158140> = \`kayıt-log\` : Kayıt denetim kanalını belirtlersiniz.**
**<a:elmas_23:753542886410158140> = \`kayıt-kanal\` : Kayıt için kanal seçersiniz d!kayıt İsim Yaş**`)
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
  name: 'yardımkayıt'
}; 