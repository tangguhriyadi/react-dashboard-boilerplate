import { z } from "zod";

export const listSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  accounts: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
});

export type ListScehma = z.infer<typeof listSchema>;
