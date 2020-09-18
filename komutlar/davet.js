const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:tac_1:753542917154668554>\ ${client.user.username}   \  `)
        .setDescription(`
<a:tac_1:753542917154668554>\ **Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8) 
<a:tac_1:753542917154668554>\ **Destek Sunucusu İçin** [TIKLA](https://discord.gg/a2jVCK7)
<a:tac_1:753542917154668554>\ **WEBSİTE** [YAKINDA](YAKINDA/)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
   .setColor('BLACK')
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
