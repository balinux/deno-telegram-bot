import { Bot } from "https://deno.land/x/telegram@0.1.2/bot.ts";
import "https://deno.land/x/dotenv/load.ts";

const token = Deno.env.get("BOT_TOKEN") as string;
const bot = new Bot(token);

// middlewa log error
bot.use(async (ctx, next) => {
    try {
        await next(ctx)
    } catch (error) {
        console.log(error);
    }
})

/**
 * fungsi untuk menghandle command "/start"
 * selain command "/start" reply dengan pesan yang di tulis oleh user
 */
bot.use(async (ctx) => {
    const text = ctx.message?.text;

    if (text == "/start") {
        await ctx.reply("selamat datang di denobot")
    } else {
        await ctx.reply(`${ctx.message?.text}`)
    }
})

bot.launch()