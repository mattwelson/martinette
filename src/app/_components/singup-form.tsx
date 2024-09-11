"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerAction } from "zsa-react";
import { mailchimpSignupAction } from "@/actions/mailchimp-signup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({ email: z.string().email() });
const defaultValues = {
  email: "",
};

// TODO: replace with a check or thumbs up after submission?
export function SignupForm() {
  const { isPending, execute, data, error } = useServerAction(
    mailchimpSignupAction
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const [data, err] = await execute(values);
    if (err) return toast.error("Could not add email, sorry!");
    toast.success("Email added to mailing list, thanks!");
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@email.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full mt-4">
          {isPending ? "Signing up..." : "Signup"}
        </Button>
      </form>
    </Form>
  );
}
