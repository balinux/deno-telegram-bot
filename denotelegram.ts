import { Bot, Context } from "https://deno.land/x/telegram@master/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const token = Deno.env.get("TOKEN_BOT") as string;

const bot = new Bot(token)

bot.use(async (ctx, next) => {
    try {
        await next(ctx)
    } catch (error) {
        console.log(error);
    }
})

bot.use(async (ctx, next) => {
    const text = ctx.message?.text;

    if (text == "/start") {
        await ctx.reply("Selamat datang di denoTelegram")
    } else {
        ctx.state.role = ctx.message?.text;
        console.log(await ctx.state.role);
        await next(ctx)
    }
})

bot.on("message", async (ctx) => {
    const message = ctx.message?.text;
    const randomPhoto = `http://placekitten.com/200/${Math.floor(Math.random() * 200) + 100}`;
    if (message == "cute") {
        await ctx.telegram.sendPhoto({ chat_id: `${ctx.message?.chat.id}`, photo: randomPhoto })
    } else {
        console.log(`shared role name: ${ctx.state.makan}`);

        await ctx.telegram.sendPhoto({ chat_id: `${ctx.message?.chat.id}`, photo: "https://picsum.photos/200/300/?random" })
    }
})

bot.launch()