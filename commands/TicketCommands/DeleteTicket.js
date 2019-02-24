exports.deleteTicket = (channel, member) => {

    if (!member.roles.find(val => val.name === 'CoinStop Staff')) {
        channel.send(`You do not have permission to perform this action. <@${member.user.id}>`);
        return
    }

    if (!channel.name.startsWith("closed-")) {
        channel.send(`Please close the ticket prior to deleting it. <@${member.user.id}>`);
        return;
    }

    channel.delete();
}

