const { buildApprovalModal } = require("../modals/approvalModal");

const registerSlashCommand = (app) => {
  app.command("/approval-test", async ({ ack, body, client }) => {
    // Acknowledge command request
    await ack();

    try {
      // Open the modal
      const modal = await buildApprovalModal(body.trigger_id);
      await client.views.open(modal);
    } catch (error) {
      console.error("Error opening modal:", error);
    }
  });
};

module.exports = { registerSlashCommand };
