const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

// Token aus Render Environment
const token = process.env.BOT_TOKEN;

// Bot starten
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Willkommen bei ISBOT 🧠\nSchreib /signal für ein Beispiel-Signal.");
});

bot.onText(/\/signal/, (msg) => {
  const text = `
ISBOT – Aggressives Beispiel-Signal

Asset: XAUUSD
Richtung: LONG
Entry: 2179.00
SL: 2165.00
TP1: 2195.00
TP2: 2210.00
TP3: 2230.00
  `;
  bot.sendMessage(msg.chat.id, text);
});

// Webserver für Render
app.get("/", (req, res) => {
  res.send("ISBOT Telegram läuft.");
});

app.listen(3000, () => console.log("Server läuft auf Render"));
