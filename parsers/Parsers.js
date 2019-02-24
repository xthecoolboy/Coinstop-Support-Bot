const TicketParser = require('./TicketCommandParser');
const AlertParser = require('./AlertCommandParser');

module.exports = {
    parseTicket: TicketParser.parse,
    parseAlert: AlertParser.parse
}