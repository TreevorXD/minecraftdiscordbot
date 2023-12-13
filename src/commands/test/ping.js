const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: {
        name: 'ping',
        description: 'Pong!',
    },
 
    run: ({ interaction, client, handler }) => {
        const embed = new EmbedBuilder()
        .setTitle('Bot Status') // Set the title to "Current map"
        .setDescription(`:ping_pong: Pong! ${client.ws.ping}ms`) // Set the image URL
        .setColor('#0099ff'); // Set the color of the embed (optional)


        interaction.reply({ embeds: [embed] });
    },
 
    options: {
        devOnly: false,
        guildOnly: false,
        userPermissions: ['Administrator', 'AddReactions'],
        botPermissions: ['Administrator', 'AddReactions'],
        deleted: false,
    },
};