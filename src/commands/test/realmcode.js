const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: {
        name: 'realminformation',
        description: 'Current Realm info!',
    },
 
    run: ({ interaction, client, handler }) => {
        const embed = new EmbedBuilder()
        .setTitle('The current realm code is') // Set the title to "Current map"
        .setDescription(`Realm Code: **Dojr4ZpSWsc**\nRealm Discord: **00000000**\nSeason: **1**\nOwner: **12345**`) // Set the image URL
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