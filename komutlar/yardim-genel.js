const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Genel Komut Menüsü`)
.setColor('BLACK')
.addField("MON-BOT'u Eklemek İsterseniz davet",`
**<a:elmas_23:753542886410158140> = \`davet\` :  Bot davet linkini gönderirsin.**
**<a:elmas_23:753542886410158140> = \`öneri\` : öneri yaparsınız.**
**<a:elmas_23:753542886410158140> = \`profil\` : Kullanıcı bilgilerini gönderir.**
**<a:elmas_23:753542886410158140> = \`botbilgi\` : Bot hakkında bilgi verir.**
**<a:elmas_23:753542886410158140> = \`afk\` : AFK moduna geçiş yaparsın.**
**<a:elmas_23:753542886410158140> = \`embed\` : Embed yazısı ile bota yazı yazdırırsın.**
**<a:elmas_23:753542886410158140> = \`pp\` : Profil fotoğrafını kanala gönderir.**= 
**<a:elmas_23:753542886410158140> = \`çek\` : Bir Kullanıcıyı Ses Kanalına Çeker.**
**<a:elmas_23:753542886410158140> = \`sahibim\` : Geliştiricilerimi Görebilirsiniz.**`)
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
  name: 'genel'
}; 