
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$ip') {
    	message.channel.send('server ip: 198.27.68.8:32294');
  	}
});

client.on('message', message => {
    if (message.content === '$banner') {
    	message.reply('https://cdn.discordapp.com/attachments/292016130535587840/423597590651600896/Fun-Times-Banner-2.gif');
  	}
});

client.on('message', message => {
    if (message.content === '$hello') {
    	message.channel.send('Hi Welcome to Fun Times I am the Owners Assistant! If you need help use command $help');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.channel.send('List Of Commands: $banner, $ip, and $hello');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
