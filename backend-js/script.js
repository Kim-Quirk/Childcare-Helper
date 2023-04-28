// establish our connection
const { ConvexHttpClient } = require("convex/browser");
require("dotenv").config({ path: ".env.local" });
const client = new ConvexHttpClient(process.env["CONVEX_URL"]);

// Looks at the getChild.js function and logs the results
client.query("getChild").then(console.log);