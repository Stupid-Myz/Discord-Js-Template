const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
    fs.readdirSync('./commands/').forEach(dir => {
        const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js')); 
        for (const file of commandFiles){
        const command = require(`./commands/${dir}/${file}`);
            client.commands.set(command.name, command);
        }
    })
    client.on('message', (message) => require('./Helpers/message.js').handle(client, message));
    client.on('ready', (message) => require('./Helpers/ready.js').handle());
    client.login(config.token);
