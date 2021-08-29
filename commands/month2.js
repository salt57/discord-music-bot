const { SlashCommand, CommandOptionType } = require('slash-create');
const { month2 } = require("../content")

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "month2",
            description: "i wonder what this does :)",
            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        await ctx.defer();

        return void ctx.sendFollowUp({ content: `${month2}\nhttps://i.imgur.com/iaqmiME.gif` });
    }
}
