exports.createAlert = (message,color,title,desc,icon) => {
    if (!message.member.roles.find(val => val.name === 'CoinStop Staff')) {
        channel.send(`<@${member.user.id}> You lack notification perms. If you believe this is an error please contact the developer.`);
        return
    }
    message.delete();
    message.channel.send({
        embed: {
            footer: {
                icon_url: icon,
                text: "CoinStop Chat Bot"
            },
            thumbnail: {
                url: icon
            },
            title: "Pool Notification",
            color: color,
            fields: [{
                name: title,
                value: desc
            },
            ],
            timestamp: new Date(),
        }
    });
};