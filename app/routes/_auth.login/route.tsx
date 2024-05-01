import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import type { z } from "zod";

import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { PasswordInput } from "~/components/password";
import { Routes } from "~/routes";
import { commitSession, getSession } from "~/utils/session";

import { loginSchema } from "./schema";
import { TwoPanel } from "./TwoPanel";

type LoginForm = z.infer<typeof loginSchema>;

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");

  if (!loginSchema.safeParse({ email, password })) {
    // TODO: i18n
    session.flash("error", "Invalid email or password");
    return json({ error: "Invalid email or password" }, { status: 400 });
  }

  // perform login logic here...

  return redirect(Routes.Home, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export default function Login() {
  const {
    register,
    formState: { isValid, isValidating, errors },
  } = useForm<LoginForm>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  return (
    <TwoPanel
      img="https://images.unsplash.com/photo-1526662756420-76da8f67f7aa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="">
      <img
        src="/logo.svg"
        alt="Launch Inc."
        className="object-cover w-full h-56 -mb-12 z-0"
      />
      <Form className="z-10 w-1/2">
        <Input
          label="Email"
          type="email"
          required
          {...register("email")}
          error={Boolean(errors.email)}
          help={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          required
          {...register("password")}
          error={Boolean(errors.password)}
          help={errors.password?.message}
        />
        <Button
          auto
          className="mt-6"
          type="submit"
          disabled={!isValid || isValidating}>
          Login
        </Button>
        <Link
          to={Routes.CreateAccount}
          className="mt-4 block text-center text-sm">
          Create account
        </Link>
      </Form>
    </TwoPanel>
  );
}
