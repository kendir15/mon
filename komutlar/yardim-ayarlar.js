const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Ayarlar Menüsü`)
.setColor('BLACK')
.addField("MON-BOTU'u Eklemek İsterseniz m.davet",`
**<a:elmas_23:753542886410158140> = \`reklam-engel\` : Sunucuda reklam yapılmasını engeller.**
**<a:elmas_23:753542886410158140> = \`prefix\` : Prefix ayarlarsınız.**
**<a:elmas_23:753542886410158140> = \`ban\` : Etiketlediğiniz kişiyi sunucudan yasaklar.**
**<a:elmas_23:753542886410158140> = \`kick\` : Etiketlediğiniz kişiyi sunucudan atar.**
**<a:elmas_23:753542886410158140> = \`unban\` : Etiketlediğiniz kişinin banını açar.**
**<a:elmas_23:753542886410158140> = \`modlog\` : Ayarladığınız kanala sunucunun loglarını gönderir.**
**<a:elmas_23:753542886410158140> = \`sayaç\` : Sunucunuzda sayaç sistemi çalıştırır.**
**<a:elmas_23:753542886410158140> = \`yardımuyarı\` : Uyarı sisteminin yardım menüsünü açar.**
**<a:elmas_23:753542886410158140> = \`sayaç-kapat\` : Sunucuda sayaç ayarlıysa sayaçı kaldırır.**
**<a:elmas_23:753542886410158140> = \`bansay\` : Sunucuda yasaklanan kişilerin sayısını gösterir.**
**<a:elmas_23:753542886410158140> = \`banaffı\` : Sunucudaki herkesin yasaklamasını kaldırır.**
**<a:elmas_23:753542886410158140> = \`yavaşmod\` : Girdiğiniz sayı kadar sunucuda yavaş mod ayarlar.**
**<a:elmas_23:753542886410158140> = \`güvenlik\` : Güvenlik sistemini açar.**
**<a:elmas_23:753542886410158140> = \`rolkoruma\` : Rol koruma sistemini açar.**`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ayarlar","yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'ayarlar'
}; 