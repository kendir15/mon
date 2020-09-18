const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`MON-BOT Logo Yapma Menüsü`)
.setColor('BLACK')
.addField("MON-BOT | Logo Yapma Sistemi",`
**<a:elmas_23:753542886410158140> = \`dinamik\` : Dinamik logo yapar.**
**<a:elmas_23:753542886410158140> = \`altın\` : Altın logo yapar.**`)
.setImage("https://cdn.discordapp.com/attachments/727260799352963194/743866019390554171/AyrmaCubugu_rainboww.gif")
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["logo","yardım"], 
  permLevel: 0
};
exports.help = {
  name: "logo"
}; 