// DenoBot (@DenoBot)
import { Bot } from "https://deno.land/x/telegram@0.1.2/bot.ts";
import "https://deno.land/x/dotenv/load.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN") as string);

bot.use(async (ctx, next) => {
  try {
    await next(ctx);
  } catch (error) {
    console.log(error.message);
  }
});

bot.use(async (ctx) => {
  const text = ctx.message?.text;

  if (text === "/start") {
    await ctx.reply("hello, world");
  }

  if (text === "/stars" || text === "/stars@DenoBot") {
    const res = await fetch("https://api.github.com/repos/denogram/denogram");
    const data = await res.json();
    await ctx.reply(`Stars: ${data.stargazers_count}`);
  }
});

bot.launch();
