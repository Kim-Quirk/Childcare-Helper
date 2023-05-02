const { ConvexHttpClient } = require("convex/browser");
require("dotenv").config({ path: ".env.local" });
const client = new ConvexHttpClient(process.env["https://dynamic-whale-651.convex.cloud"]);

client.query("getTasks")().then(console.log);