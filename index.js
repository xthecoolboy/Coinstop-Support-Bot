const Discord = require('discord.js');
const parsers = require('./parsers/Parsers');
const CommandHandler = require('./commands/TicketCommandHandler.js');
client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageReactionAdd", (reaction, user) => {
    if(reaction.message.channel.name.startsWith("closed-") && reaction.emoji.name === "✅" && user.id !== client.user.id){
        CommandHandler.openTicket(reaction.message.channel, user)
    }
});

client.on('message', msg => {
    if (msg.content.startsWith("!")) {
        const splitCommand = msg.content.substr(1, msg.content.length).split(" "); // get command without the prefix
        switch (splitCommand[0]) {
            case "ticket":
                parsers.parseTicket(msg, splitCommand)
                break;
            case "alert":
                parsers.parseAlert(msg,splitCommand)
                break;
            case "prune":
                if (!msg.member.roles.find(val => val.name === 'CoinStop Staff')) {
                    msg.reply(`You do not have permission to perform this action.`);
                    return
                }
                let messagecount = parseInt(splitCommand[1]);
                msg.channel.fetchMessages({ limit: messagecount })
                    .then(bulkmsgs => msg.channel.bulkDelete(bulkmsgs));
                break;
            default:
                msg.reply("Unknown command. Please stop being an idiot")
        }

    }
});



client.login('');