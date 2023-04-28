import { query } from "./_generated/server";

// Get information from the "tasks" table
export default query(async ({ db }) => {
  return await db.query("children").collect();
});