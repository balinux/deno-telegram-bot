# step 
- create bot and get token
- create deno project and create file .env or rename .env.example to .env
- set token for .env file with key BOT_TOKEN with value "telegram token"
- library:
  ```js
    import { Bot } from "https://deno.land/x/telegram@0.1.2/bot.ts";
    import "https://deno.land/x/dotenv/load.ts";

    // update to    
    import { Bot, Context } from "https://deno.land/x/telegram@master/mod.ts";
    import "https://deno.land/x/dotenv/load.ts";

  ```
  