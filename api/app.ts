import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import router from "./routes/routes.ts";
import postgres from "https://deno.land/x/postgresjs@v3.4.2/mod.js";

const PORT = config().PORT;
const HOST = config().HOST;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PASS = config().DB_PASS;
const HOST_DB = config().DB_HOST;

export const sql = postgres(
    "postgresql://postgres:" + PASS + "@" + HOST_DB + ":5432/postgres",
    {
        host: HOST_DB,
        port: 5432,
        password: PASS,
    }
);

console.log(`Listening on port ${PORT}...`);
await app.listen(`${HOST}:${PORT}`);
