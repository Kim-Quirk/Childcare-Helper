const { ConvexHttpClient } = require("convex/browser");
require("dotenv").config({ path: ".env.local" });
const client = new ConvexHttpClient(process.env["CONVEX_URL"]);

client.query("getTasks")().then(console.log);