import express from 'express';
import request from 'request';
import cron from 'node-cron';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const chatId = process.env.CHAT_ID;
const url = process.env.TARGET_URL;
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });
const app = express();

app.listen(3000, () => console.log('Server started on port 3000'));

cron.schedule(process.env.CRON_EXPRESSION, () => {
    console.log(`Running cron on URL ${url}`);
    request(url, (error, response, body) => {
        if (error) {
            bot.sendMessage(chatId, `Error checking URL ${url}`);
        } else if (response.statusCode !== 200) {
            bot.sendMessage(chatId, `URL ${url} returned HTTP ${response.statusCode}`);
        }
    });
});