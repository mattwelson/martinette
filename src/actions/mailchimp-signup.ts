"use server";

import { createServerAction } from "zsa";
import z from "zod";
import { Client } from "@upstash/qstash";

const qstashClient = new Client({
  // Add your token to a .env file
  token: process.env.QSTASH_TOKEN!,
});

// Subscribes users to mailchimp list via a qstash queue
// See api endpoint "/api/signup"
export const mailchimpSignupAction = createServerAction()
  .input(
    z.object({
      email: z.string().email(),
    })
  )
  .handler(async ({ input }) => {
    const result = await qstashClient.publishJSON({
      url: process.env.SIGNUP_ENDPOINT!,
      body: {
        email: input.email,
      },
      contentBasedDeduplication: true,
    });
    return result.messageId;
  });
