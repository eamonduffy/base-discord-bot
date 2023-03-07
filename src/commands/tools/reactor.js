const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reactor")
    .setDescription("Return reactions!"),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: `React here!`,
      fetchReply: true,
    });

    // // this will allows the bot to use the emoji from all the servers it has access to
    const emoji1 = client.emojis.cache.get("1082456125380759582");

    message.react(emoji1);
    message.react("👍");

    const filter = (reaction, user) => {
      return reaction.emoji.name == "👍" && user.id == interaction.user.id;
    };

    const collector = message.createReactionCollector({
      filter,
      time: 15000,
    });

    collector.on("collect", (reaction, user) => {
      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on("end", (collected) => {
      console.log(`Collected ${collected.size} items`);
    });
  },
};
