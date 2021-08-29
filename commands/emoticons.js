const { SlashCommand, CommandOptionType } = require('slash-create');
const { emoticons } = require("../content")

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "emoticons",
            description: "lists out one of the dumbass emoticons",
            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        await ctx.defer();

        const emoticon = emoticons[Math.floor(Math.random() * emoticons.length)];

        return void ctx.sendFollowUp({ content: `Your emoticon: ${emoticon}` });
    }
}
