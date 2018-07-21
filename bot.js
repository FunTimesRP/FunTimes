const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$ip') {
    	message.reply('server ip: 185.249.196.20:32186');
  	}
});

client.on('message', message => {
    if (message.content === '$banner') {
    	message.reply('https://cdn.discordapp.com/attachments/292016130535587840/423597590651600896/Fun-Times-Banner-2.gif');
  	}
});

client.on('message', message => {
    if (message.content === '$hello') {
    	message.reply('Hi Welcome to Project San Andreas I am the Owners Assistant! If you need help use command $help');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('List Of Commands: $ip, $backgroundinfo, and $hello');
  	}
});

client.on('message', message => {
    if (message.content === '$backgroundinfo') {
    	message.reply('Project San Andreas is a RP server for Five M! The Owner is N. Henshaw AKA Cuzco. The owner started Project San Andreas in 2018, and has been working on the server every since. Project San Andreas is a very strong community when brought together! We help everyone learn how to RP and make people feel at home! We give everyone a chance on our community. We are the community of forgiveness. We can not help that some people do not like our server or agree on how we think. We have rules, and people have to abide by them. We the community hope you enjoy your stay!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
