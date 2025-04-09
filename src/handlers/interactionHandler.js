const { createApprovalMessage } = require("../utils/messages");

const registerInteractionHandlers = (app) => {
  // Handle modal submission
  app.view("approval_modal", async ({ ack, body, view, client }) => {
    await ack();

    const approver =
      view.state.values.approver_block.approver_select.selected_user;
    const requestText = view.state.values.request_block.request_input.value;
    const requester = body.user.id;

    try {
      // Send approval request to approver
      await client.chat.postMessage({
        channel: approver,
        ...createApprovalMessage(requester, requestText),
      });
    } catch (error) {
      console.error("Error sending approval request:", error);
    }
  });

  // Handle button actions
  app.action("approve_button", async ({ ack, body, client }) => {
    await ack();
    const requester = body.message.blocks[0].text.text.match(/<@([^>]+)>/)[1];

    try {
      // Notify requester of approval
      await client.chat.postMessage({
        channel: requester,
        text: `✅ Your request has been approved by <@${body.user.id}>!`,
      });

      // Update original message
      await client.chat.update({
        channel: body.channel.id,
        ts: body.message.ts,
        text: "Request Approved ✅",
        blocks: [],
      });
    } catch (error) {
      console.error("Error handling approval:", error);
    }
  });

  app.action("reject_button", async ({ ack, body, client }) => {
    await ack();
    const requester = body.message.blocks[0].text.text.match(/<@([^>]+)>/)[1];

    try {
      // Notify requester of rejection
      await client.chat.postMessage({
        channel: requester,
        text: `❌ Your request has been rejected by <@${body.user.id}>.`,
      });

      // Update original message
      await client.chat.update({
        channel: body.channel.id,
        ts: body.message.ts,
        text: "Request Rejected ❌",
        blocks: [],
      });
    } catch (error) {
      console.error("Error handling rejection:", error);
    }
  });
};

module.exports = { registerInteractionHandlers };
