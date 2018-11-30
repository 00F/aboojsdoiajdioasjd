const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['320423357709549568','358038951698759680'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(".",{type: 'LISTENING'})
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.Apl')) {
client.user.setActivity(argresult, {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` :heavy_check_mark:  `)
} else 
if (message.content.startsWith('.Als')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(`:heavy_check_mark: `)
  }
          
});
client.login(process.env.MEERCY);
