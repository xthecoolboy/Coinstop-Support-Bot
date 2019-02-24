exports.getTicketUser = (channel) => {
    return new Promise((resolve,reject) => {
        channel.permissionOverwrites.forEach((p)=>{
            if(p.type === "member"){
                channel.guild.fetchMember(p.id).then((member)=>{
                    return resolve(member);
                })
            }
        })
    });
}



