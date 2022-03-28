import {
    Application,
    dotenv
} from './depts.ts'


import { Router } from "./config/router.ts"

// Get config enviroment variables
const { PORT, ADDRESS } = dotenv.config();

// Define server App
const app : Application = new Application();

// Get and Parse Port number for server
const port  = Number(PORT) || 3000;
const address = ADDRESS || "localhost";

// Set router and allowed Methods
app.use(Router.routes());
app.use(Router.allowedMethods());

console.log(`App running in http://${address}:${port}`)
await app.listen({ port });
