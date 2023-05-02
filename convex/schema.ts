import { defineSchema, defineTable } from "convex/schema";
import { v } from "convex/values";

export default defineSchema({
  children: defineTable({
    allergies: v.object({ allergies: v.array(v.string()), bool: v.boolean() }),
    authorized: v.array(
      v.object({ Email: v.string(), Name: v.string(), Phone: v.string() })
    ),
    birthday: v.string(),
    class: v.string(),
    img: v.string(),
    medications: v.object({
      bool: v.boolean(),
      medications: v.array(v.string()),
    }),
    name: v.string(),
    potty: v.string(),
  }),
});