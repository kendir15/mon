const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT Uyarı Menüsü`)
.setColor('BLACK')
.addField("MON-BOT'U Eklemek İsterseniz d!davet",`
**<a:elmas_23:753542886410158140> = \`uyar\` : Belirtilen Kişiyi Uyarır**
**<a:elmas_23:753542886410158140> = \`uyarı-sil\` : Kişinin Uyarılarını Siler**
**<a:elmas_23:753542886410158140> = \`uyarılar\` : Kişinin Uyarılarını Görürsünüz**`)

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
  name: 'yardımuyarı'
}; 