const Discord = require("discord.js");
var giveMeAJoke = require('give-me-a-joke');
module.exports = {
    name: 'joke',
    execute(client, config, message, args) {
        giveMeAJoke.getRandomDadJoke (function(joke) {
             message.channel.send(joke);
        });
    },
};  
