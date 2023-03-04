const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

// ContextMenuCommandBuilder lets you right click profiles and see an App section and select available methods from there
module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("getAvatar")
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {
    await interaction.reply({
      // if using ApplicationCommandType.Message, you would use targetMessage to get target message
      content: `${interaction.targetUser.displayAvatarURL()}`,
    });
  },
};
