const { SlashCommand, CommandOptionType } = require('slash-create');
const { quotes } = require("../content")

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "quote",
            description: "lists out one of the dumbass quotes",
            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        await ctx.defer();

        const quote = quotes[Math.floor(Math.random() * quotes.length)];

        return void ctx.sendFollowUp({ content: `Your quote: ${quote}` });
    }
}
