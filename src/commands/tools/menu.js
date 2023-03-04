const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Return a select menu!"),
  async execute(interaction, client) {
    // deprecated versions
    // const menu = new SelectMenuBuilder()
    //   .setCustomId(`visit-site-menu`)
    //   .setMinValues(1)
    //   .setMaxValues(1)
    //   .setOptions(
    //     new SelectMenuOptionBuilder({
    //       label: `Option #1`,
    //       value: `https://eamonduffy.dev`,
    //     }),
    //     new SelectMenuOptionBuilder({
    //       label: `Option #2`,
    //       value: `https://github.com/eamonduffy`,
    //     })
    //   );

    const menuNew = new StringSelectMenuBuilder()
      .setCustomId(`visit-site-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Option #1`,
          value: `https://eamonduffy.dev`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Option #2`,
          value: `https://github.com/eamonduffy`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menuNew)],
    });
  },
};
