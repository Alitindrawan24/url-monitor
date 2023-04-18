import express from 'express';
import request from 'request';
import cron from 'node-cron';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to URL Monitor")
})

app.get('/url-monitor', (req, res) => {
    const time = new Date().getTime();
    const { url } = req.query
    console.log(`Running cron on URL ${url} at ${time}`);
    request(url, (error, response, body) => {
        if (error) {
            bot.sendMessage(chatId, `Error : The URL ${url}`);
            res.status(500).send(`Error : The URL ${url}`)
        } else if (response.statusCode !== 200) {
            bot.sendMessage(chatId, `Fail : The URL ${url} returned HTTP ${response.statusCode}`);
            res.status(response.statusCode).send(`Fail : The URL ${url} returned HTTP ${response.statusCode}`)
        } else {
            res.send(`Success: The URL ${url} was successfully accessed.`);
        }
    });
})

app.listen(3000, () => console.log('Server started on port 3000'));