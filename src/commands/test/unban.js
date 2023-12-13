const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'unban',
        description: 'Unban a user from the server',
        options: [
            {
                name: 'user',
                type: 3,
                description: 'The user to unban (provide the user ID)',
                required: true,
            },
            {
                name: 'reason',
                type: 3,
                description: 'Reason for the unban',
                required: false,
            },
        ],
    },
 
    run: async ({ interaction, client, handler }) => {

        const userToUnbanId = interaction.options.getString('user');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        // Attempt to unban the user
        try {
            await interaction.guild.bans.remove(userToUnbanId, reason);
            const embed = new EmbedBuilder()
                .setTitle('User Unbanned')
                .setDescription(`:white_check_mark: User with ID ${userToUnbanId} has been unbanned.\nReason: ${reason}`)
                .setColor('#00ff00');
            interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            interaction.reply('An error occurred while trying to unban the user.');
        }
    },
 
    options: {
        devOnly: false,
        guildOnly: true,
        userPermissions: ['BAN_MEMBERS'],
        botPermissions: ['BAN_MEMBERS'],
        deleted: false,
    },
};
