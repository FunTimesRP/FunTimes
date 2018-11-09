const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$fivem') {
    	message.reply('https://forum.fivem.net/');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '$paintjobs') {
    	message.reply('go to five-m-specials');
  	}
});

client.on('message', message => {
    if (message.content === '/web') {
    	message.reply('https://bubble.is/site/funtimesnetworks/');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('**Commands:** $website, $hello, $ip. If you need further help go here ---> ❔support❔');
  	}
});

client.on('message', message => {
    if (message.content === '$hello') {
    	message.reply('Hi I am the Owners Assistant. If you need any help type $help');
  	}
});

client.on('message', message => {
    if (message.content === '$ip') {
    	message.reply('149.56.202.39:30120');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
