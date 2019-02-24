const util = require("../../util/Util");

exports.closeTicket = (channel, member) => {
    if (channel.name.startsWith("closed-")) {
        channel.send(`<@${member.user.id}> This ticket is closed and cannot be closed again.`);
        return;
    }
    if (!channel.name.startsWith("ticket-")) {
        channel.send(`<@${member.user.id}> This is not a ticket channel therefore you cannot close it.`);
        return;
    }
    if (!member.roles.find(val => val.name === 'CoinStop Staff')) {
        channel.send(`<@${member.user.id}> You do not have permission to close the ticket. Please ask a staff member to do it for you.`);
        return
    }
    util.getTicketUser(channel).then(ticketmember => {
        channel.setName(channel.name.replace("ticket", "closed")).then(()=>{
            channel.overwritePermissions(ticketmember, {//Explicitely allow the user to see and talk
                'VIEW_CHANNEL': true, 'SEND_MESSAGES': false, 'ADD_REACTIONS': true
            });
            channel.setName(channel.name.replace("ticket", "closed"));
            channel.send(`<@${member.user.id}> closed the ticket. <@${ticketmember.user.id}> if you have any further questions simply click the check box below.`).then((msg) => {
                msg.pin()
                msg.react("✅")
            });
        })

    })
}
