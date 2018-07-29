const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '$fivem');
    	message.reply('https://forum.fivem.net/');
  	}
});

client.on('message', message => {
    if (message.content === '$paintjobs') {
    	message.reply('go to #five-m-specials for the paintjobs');
  	}
});

client.on('message', message => {
    if (message.content === '$hello') {
    	message.reply('Hi Welcome to FunTimes Gaming Development Support I am the Owners Assistant! If you need help use command $help');
  	}
});

client.on('message', message => {
    if (message.content === '$help') {
    	message.reply('List Of Commands: $fivem, $paintjobs, $backgroundinfo, and $hello! For further help go here --> #❔support❔');
  	}
});

client.on('message', message => {
    if (message.content === '$backgroundinfo') {
    	message.reply('FunTimes Gaming Development Support is a support company for Five M! The Owner is [FT] NiceGuy. The owner started FunTimes Gaming Development Support in 2018, and has been working on the company every since. FunTimes Gaming Development Support is a very helpful compan! We help everyone with making the best FiveM RP sevrer and making people feel satisfied with are work! We work are best to fix everyone server or get the server started on how they want it to be. We the company hope you enjoy your stay');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
