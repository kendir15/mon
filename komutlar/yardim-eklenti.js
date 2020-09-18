const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Eklenti Menüsü`)
.setColor('BLACK')
.addField("MON-BOT'un gelişmiş sistemleri!",`
**<a:elmas_23:753542886410158140> = \`invite\` : Davet sistemi komutlarını gösterir.**
**<a:elmas_23:753542886410158140> = \`yardımkayıt\` : Kayıt sistemi komutlarını gösterir.**
**<a:elmas_23:753542886410158140> = \`sunucu-kur\` : Basit bir sunucu kurar. (YAKINDA)**
**<a:elmas_23:753542886410158140> = \`panel-kur\` : Sunucuda kişi paneli oluşturur.**`)
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
  name: 'eklenti'
}; 