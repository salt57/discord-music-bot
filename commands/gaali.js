const { SlashCommand, CommandOptionType } = require('slash-create');
const { gaalis } = require("../content")

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "gaali",
            description: "lists out one of the dumbass gaalis",
            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        await ctx.defer();

        const gaali = gaalis[Math.floor(Math.random() * gaalis.length)];

        return void ctx.sendFollowUp({ content: `Your gaali: ${gaali}` });
    }
}
