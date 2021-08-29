const { SlashCommand, CommandOptionType } = require("slash-create");
const fetch = require("node-fetch");

module.exports = class extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: "gif",
      description: "gibs gif",
      options: [
        {
          name: "query",
          type: CommandOptionType.STRING,
          description: "gif u want",
          required: true,
        },
      ],
      guildIDs: process.env.DISCORD_GUILD_ID
        ? [process.env.DISCORD_GUILD_ID]
        : undefined,
    });
  }

  async run(ctx) {
    await ctx.defer();

    const keywords = ctx.options.query;

    const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&limit=10`;

    let response = await fetch(url);
    let result = await response.json();
    const gif = result.results[Math.floor(Math.random() * result.results.length)].url;

    return void ctx.sendFollowUp({ content: `${gif}` });
  }
};
