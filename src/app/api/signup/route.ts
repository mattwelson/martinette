import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_PREFIX,
});

async function handler(request: Request) {
  const data = await request.json();

  const response = await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_LIST_ID!,
    {
      email_address: data.email,
      status: "pending",
    }
  );

  return Response.json({ success: response.status });
}

export const POST = verifySignatureAppRouter(handler);
