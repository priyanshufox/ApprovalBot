# Slack Approval Bot

A Slack bot for managing approval requests in organizations.

## Features

- Create approval requests using `/approval-test` command
- Select approvers from workspace members
- Send approval requests with approve/reject buttons
- Notify requesters of approval status

## Setup

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/slack-approval-bot.git
cd slack-approval-bot
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your Slack credentials:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
SLACK_APP_TOKEN=xapp-your-app-token
```

4. Start the bot:

```bash
npm start
```

## Development

- `npm test` - Run tests
- `npm run dev` - Start development server

## License

MIT
