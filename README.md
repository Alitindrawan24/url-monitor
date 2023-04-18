# URL Monitor
URL Monitor is a Node.js application that periodically checks the availability of a website URL and sends a notification to a Telegram user if the website is down. The application uses the axios library to perform an HTTP request to the URL and checks the response status code. The Telegram Bot API is used to send a notification message to the user via Telegram if the website is not responding. The application also utilizes the dotenv library to load environment variables from a .env file, which stores the Telegram bot token, chat ID, and URL to be checked.

## Tech
- Node JS

## Package/Frameworks
- Express JS
- Node Telegram Bot

## Getting Started
To get started, you will need to have Node JS installed on your computer. You can download Node JS from the official website: https://nodejs.org/

Once you have Node Js installed, follow these steps:
- Clone the repository to your local machine using
```bash
git clone https://github.com/Alitindrawan24/url-monitor.git
```
- Navigate to the project directory using the command line.
- Create .env file from .env.example and setup .env with your environment configuration
```bash
cp .env.example .env
```
- Install dependencies
```bash
npm install

```
- Run the app using
```bash
npm run start
```
- After the app is running, it will automatically run the cron to periodically check the URL

## Endpoints
- ```GET/url-monitor``` check URL with parameter ```url```

## What's Next?
- Add Logging for every checking
- Monitoring multiple URLs.