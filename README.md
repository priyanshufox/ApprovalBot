# Slack Approval Bot
![Image](https://github.com/user-attachments/assets/01feb825-33a8-470f-bb3b-5f2614dd9aeb)
A Slack bot for managing approval requests in organizations.


https://github.com/user-attachments/assets/d10ceda7-58a3-4a66-9185-921f4a153213



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
