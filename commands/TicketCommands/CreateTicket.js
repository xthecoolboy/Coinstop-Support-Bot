exports.createTicket = (channel,member) => {
    let id = Math.random().toString(36).substring(8, 15) + Math.random().toString(36).substring(8, 15) + "-" + member.user.id.substr(-5);
    channel.guild.createChannel('ticket-' + id, "text").then((newChannel) => {
        newChannel.setParent('548146182061424650')
            .then(updated => {
                updated.overwritePermissions(member.user, { //Explicitly allow the user to see and talk
                    'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'ADD_REACTIONS': true
                }).catch(console.error);
            }).catch(console.error);


    })
}
