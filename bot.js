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
    if (message.content === '$website') {
    	message.reply('https://funtimesgamingdevelopmentsupport.mistforums.com/');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('Commands: $fivem, $paintjobs, $website, $hello, ping. If you need further help go here ---> ❔support❔');
  	}
});

client.on('message', message => {
    if (message.content === '$hello') {
    	message.reply('Hi I am the Owners Assistant. If you need any help type $help');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
