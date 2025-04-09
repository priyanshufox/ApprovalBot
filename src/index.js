const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Slack app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Import handlers
const { registerSlashCommand } = require("./handlers/slashCommand");
const {
  registerInteractionHandlers,
} = require("./handlers/interactionHandler");

// Register handlers
registerSlashCommand(app);
registerInteractionHandlers(app);

// Start the app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Slack Approval Bot is running!");
})();
