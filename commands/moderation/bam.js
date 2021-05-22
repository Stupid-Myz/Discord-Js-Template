const Discord = require("discord.js");

module.exports = {
    name: 'bam',
    execute(client, config, message, args) {
        message.channel.send("Bammed")
    },
};  
