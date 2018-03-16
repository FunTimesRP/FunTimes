const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

using Discord.Commands;
using System.Threading.Tasks;

namespace MyBot.Modules
{
    public class Test : ModuleBase<SocketCommandContext>
    {
        [Command("ip")]
        public async Task wdwaDfawd()
        {
            await Context.Channel.SendMessageAsync("@everyone server ip: 198.27.68.8:32294");
        }

        [Command("banner")]
        public async Task wdwaDfawdd()
        {
            await Context.Channel.SendMessageAsync("https://cdn.discordapp.com/attachments/292016130535587840/423597590651600896/Fun-Times-Banner-2.gif");
        }

        [Command("hello")]
        public async Task wdwaDfawdddd()
        {
            await Context.Channel.SendMessageAsync("Welcome to Fun Times I am the Owner's Assistant! If you need help use command $help");
        }

        [Command("help")]
        public async Task wdwaDfawddddd()
        {
            await Context.Channel.SendMessageAsync("List Of Commands: $banner, $ip, and $hello");
        }
    }
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
