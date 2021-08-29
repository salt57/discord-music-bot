const { SlashCommand, CommandOptionType } = require('slash-create');
const { proposal } = require("../content")

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "virish",
            description: "our cute proposal",
            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        await ctx.defer();

        return void ctx.sendFollowUp({ content: `${proposal}` });
    }
}
