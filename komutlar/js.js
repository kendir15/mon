const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '739377503956631622')
  if(message.guild.id !== '727909834237673582') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu sadece Kod Paylaşım sunucusunda kullanabilirsin.').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('❌ | **js Rolün Var !**')

  try {
      await (sahip.addRole(jsrolu.id));
      message.channel.sendMessage('**Başarılı !**\n**js Rolü Verildi.**')
    } catch (error) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
      return message.channel.send('❌ | **js Rolün Zaten Var !**')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "js rolü verir.",
  usage: "js"
}