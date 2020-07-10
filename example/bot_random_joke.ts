import { Bot, Context } from "https://deno.land/x/telegram@master/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const token = Deno.env.get("TOKEN_BOT") as string;
const bot = new Bot(token);

// error handler
bot.use((ctx, next) => {
    try {
        next(ctx)
    } catch (error) {
        console.log(error);
    }
})

// command handler
bot.use(async (ctx, next) => {
    const message = ctx.message?.text;

    if (message == "/start") {
        await ctx.reply("Selamat datang di denotelegramBot");
    } else if (message == '/joke') {
        
    } else {
        next(ctx);
    }
})

// message handler
bot.on("message", async (ctx) => {
    const { text, chat }: any = ctx.message;
    const randomImage = `http://placekitten.com/200/${Math.floor(Math.random() * 200) + 100}`
    if (text == "cute" || text == "/cute") {
        await ctx.telegram.sendPhoto({ chat_id: `${chat.id}`, photo: randomImage })
    } else {
        await ctx.telegram.sendPhoto({ chat_id: `${chat.id}`, photo: "https://picsum.photos/200/300/?random" })
    }
})

bot.launch();