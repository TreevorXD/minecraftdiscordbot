const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path');
require("dotenv").config();
require('dotenv/config');
 
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
 


new CommandKit({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    devGuildIds: ['1160606389048197192'],
    devUserIds: ['1068316524470874173'],
    skipBuiltInValidations: true,
    bulkRegister: true,
});


client.login(process.env.TOKEN);
