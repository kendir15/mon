  const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Davet Menüsü`)
.setColor('BLACK')
.addField("MON-BOTU'u Eklemek İsterseniz m.davet",`
**<a:elmas_23:753542886410158140> = \`davet-kanal\` : Davet Kanalı Belirlersiniz**
**<a:elmas_23:753542886410158140> = \`davet-ekle\` : Seçilen Kullanıcıya Davet Ekler**
**<a:elmas_23:753542886410158140> = \`davet-sil\` : Seçilen Kullanıcıya Davet Siler**
**<a:elmas_23:753542886410158140> = \`davet-sıfırla\` : Tüm Davetleri Siler**
**<a:elmas_23:753542886410158140> = \`davet-kanal-sıfırla\` : Davet Kanalını Siler**
**<a:elmas_23:753542886410158140> = \`davetler\`  : Tüm Davetlerini Gösterir**`)
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
  name: 'invite'
}; 