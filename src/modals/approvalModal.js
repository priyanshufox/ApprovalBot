const buildApprovalModal = async (triggerId) => {
  return {
    trigger_id: triggerId,
    view: {
      type: "modal",
      callback_id: "approval_modal",
      title: {
        type: "plain_text",
        text: "New Approval Request",
      },
      submit: {
        type: "plain_text",
        text: "Submit",
      },
      blocks: [
        {
          type: "input",
          block_id: "approver_block",
          element: {
            type: "users_select",
            placeholder: {
              type: "plain_text",
              text: "Select an approver",
            },
            action_id: "approver_select",
          },
          label: {
            type: "plain_text",
            text: "Approver",
          },
        },
        {
          type: "input",
          block_id: "request_block",
          element: {
            type: "plain_text_input",
            multiline: true,
            action_id: "request_input",
          },
          label: {
            type: "plain_text",
            text: "Request Details",
          },
        },
      ],
    },
  };
};

module.exports = { buildApprovalModal };
