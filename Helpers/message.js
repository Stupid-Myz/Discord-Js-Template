const config = require("../config.json")
const Discord = require('discord.js');
module.exports = {
  handle: async (client, message) => {
    if (message.channel.type !== 'text') return;
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;
    command.execute(client, config, message, args);
  },
};
