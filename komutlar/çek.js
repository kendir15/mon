const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmasınız.`);
    if (!message.member.voiceChannel) { return message.channel.send(":warning: | Bir Ses Kanalında Olmalısın"); }
  
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(':warning: | Bir Kullanıcıyı Etiketlemelisin')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voiceChannel) return message.channel.send(":x: | Etiketlenen Kullanıcı Ses Kanalında Değil !")
  
  const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
  member.setVoiceChannel(voiceChannel);
   message.react('tik')
   const voiceChannel1 = message.member.voiceChannel.name;
  let embed= new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("MON-BOT")
    .setDescription(message.author+ "Adlı Yetkili Tarafından "+kullanıcı+ "Adlı Kullanıcı Ses Kanalına Çekildi.")
    .setFooter("MON-BOT", client.user.avatarURL)
   .setTimestamp()  
    message.channel.send(embed)
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}
exports.help = {
  name: 'çek',
  description: " ",
  usage: 'çek'
}