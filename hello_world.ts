// import * as telegram from "../mod.ts";
import { Bot } from "https://deno.land/x/telegram@0.1.2/bot.ts";
// app.ts
import "https://deno.land/x/dotenv/load.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") as string);

bot.use((ctx) => {
  if (ctx.message?.text === "/start") {
    ctx.reply("hello, world");
  }
});

bot.launch();