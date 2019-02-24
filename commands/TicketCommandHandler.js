const createTicketCommand = require( './TicketCommands/CreateTicket');
const closeTicketCommand = require('./TicketCommands/CloseTicket');
const deleteTicketCommand = require('./TicketCommands/DeleteTicket');
const openTicketCommand = require('./TicketCommands/OpenTicket');
const testCommand = require('./AlertCommands/CreateAlert');
module.exports = {
    createTicket: createTicketCommand.createTicket,
    closeTicket: closeTicketCommand.closeTicket,
    deleteTicket: deleteTicketCommand.deleteTicket,
    openTicket: openTicketCommand.openTicket,
    testCommand: testCommand.test,
}