const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'kick',
        description: 'Kick a user from the server',
        options: [
            {
                name: 'user',
                type: 6,
                description: 'The user to kick',
                required: true,
            },
            {
                name: 'reason',
                type: 3,
                description: 'Reason for the kick',
                required: false,
            },
        ],
    },
 
    run: async ({ interaction, client, handler }) => {
     
        // Get the user to kick and the reason (if provided)
        const userToKick = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        // Attempt to kick the user
        try {
            await interaction.guild.members.kick(userToKick, { reason });
            const embed = new EmbedBuilder()
                .setTitle('User Kicked')
                .setDescription(`:boot: ${userToKick.tag} has been kicked.\nReason: ${reason}`)
                .setColor('#ff9900'); // You can change the color to your preference
            interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            interaction.reply('An error occurred while trying to kick the user.');
        }
    },
 
    options: {
        devOnly: false,
        guildOnly: false,
        userPermissions: ['KICK_MEMBERS'], // Update to KICK_MEMBERS
        botPermissions: ['KICK_MEMBERS'], // Update to KICK_MEMBERS
        deleted: false,
    },
};
