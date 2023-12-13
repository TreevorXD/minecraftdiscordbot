const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: {
        name: 'discordkit',
        description: 'how to claim the discord kit!',
    },
 
    run: ({ interaction, client, handler }) => {
        const embed = new EmbedBuilder()
        .setTitle('How to claim') // Set the title to "Current map"
        .setDescription(`Kit Code: 0 0 0 0 0 0\n Contains: A Prot 4 Iron kit with also emeralds, gapples and experience bottles.\nVideo Guide: [Here](https://e-z.tools/hocm4gj6.mov)`) // Set the image URL
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