const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Sunucu Komutları Menüsü`)
.setColor('BLACK')
.addField("MON-BOT | Sunucu Sayfası",`
**<a:elmas_23:753542886410158140> = \`duyuru\` : Bot duyuru yapar.**
**<a:elmas_23:753542886410158140> = \`oylama\` : Bot oylama başlatır.**
**<a:elmas_23:753542886410158140> = \`kanal-gizle\` : Sohbeti gizlersiniz.**
**<a:elmas_23:753542886410158140> = \`kanal-gizle-kapat\` : Sohbet'in gizliliğini kaldırırsınız.**
**<a:elmas_23:753542886410158140> = \`çekiliş\` : Bot çekiliş düzenler.**
**<a:elmas_23:753542886410158140> = \`hızlıçek\` : Çekiliş için hızlıca birini seçer.**
**<a:elmas_23:753542886410158140> = \`üye\` : Üyeler hakkında bilgi alırsınız.**
**<a:elmas_23:753542886410158140> = \`sunucubilgi\` : Sunucu hakkında bilgi alırsınız.**
**<a:elmas_23:753542886410158140> = \`sunucudavet\` : Sunucunun davet linkini atar.**
**<a:elmas_23:753542886410158140> = \`canlı-destek\` : Canlı destek oluşturursunuz.**
**<a:elmas_23:753542886410158140> = \`reklam-tara\` : Sunucuda reklam taraması çalıştırır.**`)

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
  name: 'sunucu'
}; 