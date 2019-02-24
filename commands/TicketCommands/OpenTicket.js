const util = require('../../util/Util');

exports.openTicket = (channel,responsible) => {
    util.getTicketUser(channel).then((member)=>{
        channel.setName(channel.name.replace("closed", "ticket")).then(()=>{
            channel.overwritePermissions(member.user, { //Explicitly allow the user to see and talk
                'SEND_MESSAGES': true
            }).catch(console.error);
            channel.send(`<@${responsible.id}> reopened the ticket. <@${member.user.id}> you may now send messages in regard to this ticket.`)
        });
    })



}
