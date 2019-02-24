const CommandHandler = require("../commands/TicketCommandHandler");
exports.parse = (command,splitCommand) => {
    switch (splitCommand[1]) {
        case "create":
            CommandHandler.createTicket(command.channel, command.member);
            command.reply("ticket created");
            break;
        case "close":
            CommandHandler.closeTicket(command.channel, command.member);
            break;
        case "delete":
            CommandHandler.deleteTicket(command.channel, command.member);
            break;
    }
};
