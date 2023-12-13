const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'ban',
        description: 'Ban a user from the server',
        options: [
            {
                name: 'user',
                type: 6,
                description: 'The user to ban',
                required: true,
            },
            {
                name: 'reason',
                type: 3,
                description: 'Reason for the ban',
                required: false,
            },
        ],
    },
 
    run: async ({ interaction, client, handler }) => {
     
        // Get the user to ban and the reason (if provided)
        const userToBan = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        // Attempt to ban the user
        try {
            await interaction.guild.members.ban(userToBan, { reason });
            const embed = new EmbedBuilder()
                .setTitle('User Banned')
                .setDescription(`:hammer: ${userToBan.tag} has been banned.\nReason: ${reason}`)
                .setColor('#ff0000');
            interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            interaction.reply('An error occurred while trying to ban the user.');
        }
    },
 
    options: {
        devOnly: false,
        guildOnly: false,
        userPermissions: ['BAN_MEMBERS'],
        botPermissions: ['BAN_MEMBERS'],
        deleted: false,
    },
};
