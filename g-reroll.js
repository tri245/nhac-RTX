// Dependencies
const { ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

	Command = require('../../structures/Command.js');

/**
 * Giveaway reroll command
 * @extends {Command}
*/
class GiveawayReroll extends Command {
	/**
   * @param {Client} client The instantiating client
   * @param {CommandData} data The data for the command
  */
	constructor(bot) {
		super(bot, {
			name: 'g-reroll',
			guildOnly: true,
			dirname: __dirname,
			aliases: ['giveaway-reroll', 'greroll'],
			userPermissions: [Flags.ManageGuild],
			description: 'reroll a giveaway.',
			usage: 'g-reroll <messageID> [winners]',
			cooldown: 2000,
			examples: ['g-reroll 818821436255895612'],
			slash: false,
			isSubCmd: true,
			options: [
				{
					name: 'id',
					description: 'Message ID of the giveaway.',
					type: ApplicationCommandOptionType.Integer,
					required: true,
				},
				{
					name: 'winner',
					description: 'How many winners to reroll.',
					type: ApplicationCommandOptionType.Integer,
					minValue: 1,
					maxValue: 10,
					required: false,
				},
			],
		});
	}

	/**
 	 * Function for receiving message.
 	 * @param {bot} bot The instantiating client
 	 * @param {message} message The message that ran the command
 	 * @param {settings} settings The settings of the channel the command ran in
 	 * @readonly
  */
	async run(bot, message, settings) {
		// Delete message
		if (settings.ModerationClearToggle && message.deletable) message.delete();

		// Make sure the message ID of the giveaway embed is entered
		if (!message.args[0]) return message.channel.error('misc:INCORRECT_FORMAT', { EXAMPLE: settings.prefix.concat(message.translate('giveaway/g-reroll:USAGE')) });

		// re-roll the giveaway
		const messageID = message.args[0];
		try {
			await bot.giveawaysManager.reroll(messageID, {
				winnerCount: !parseInt(message.args[1]) ? bot.giveawaysManager.giveaways.find(g => g.messageID == messageID)?.winnerCount : parseInt(message.args[1]),
				messages: {
					congrat: message.translate('giveaway/g-reroll:CONGRAT'),
					error: message.translate('giveaway/g-reroll:ERROR'),
				},
			});
			message.channel.send(bot.translate('giveaway/g-reroll:SUCCESS_GIVEAWAY'));
		} catch (err) {
			bot.logger.error(`Command: 'g-reroll' has error: ${err}.`);
			message.channel.send(bot.translate('giveaway/g-reroll:UNKNOWN_GIVEAWAY', { ID: messageID }));
		}
	}

	/**
	 * Function for receiving interaction.
	 * @param {bot} bot The instantiating client
	 * @param {interaction} interaction The interaction that ran the command
	 * @param {guild} guild The guild the interaction ran in
	 * @param {args} args The options provided in the command, if any
	 * @readonly
	*/
	async callback(bot, interaction, guild, args) {
		const channel = guild.channels.cache.get(interaction.channelId),
			messageID = args.get('messageID').value,
			winners = args.get('winner')?.value;

		// re-roll the giveaway
		try {
			await bot.giveawaysManager.reroll(messageID, {
				winnerCount: winners ?? bot.giveawaysManager.giveaways.find(g => g.messageID == messageID)?.winnerCount,
				messages: {
					congrat: guild.translate('giveaway/g-reroll:CONGRAT'),
					error: guild.translate('giveaway/g-reroll:ERROR'),
				},
			});
			interaction.reply({ embeds: [channel.success('giveaway/g-reroll:SUCCESS_GIVEAWAY', {}, true)] });
		} catch (err) {
			bot.logger.error(`Command: 'g-reroll' has error: ${err}.`);
			interaction.reply({ content: bot.translate('giveaway/g-reroll:UNKNOWN_GIVEAWAY', { ID: messageID }), ephemeral: true });
		}
	}
}

module.exports = GiveawayReroll;
