import { query } from "./_generated/server";


console.log("HERE");

// Get information from the "tasks" table
export default query(async ({ db }) => {
  console.log("HERE, calling database");
  data = await db.query("children").collect();
  console.log(data);
  return data;
});

