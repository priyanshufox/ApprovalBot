const createApprovalMessage = (requesterId, requestText) => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `New approval request from <@${requesterId}>`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Request:*\n${requestText}`,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Approve",
            },
            style: "primary",
            action_id: "approve_button",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Reject",
            },
            style: "danger",
            action_id: "reject_button",
          },
        ],
      },
    ],
  };
};

module.exports = { createApprovalMessage };
