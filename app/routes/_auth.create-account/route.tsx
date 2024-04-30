import { Form, Link } from "@remix-run/react";
import { TwoPanel } from "../_auth.login/TwoPanel";
import { Input } from "~/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createAccountSchema } from "./schema";
import { Button } from "~/components/button";
import { Routes } from "~/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "~/components/password";

type FormData = z.infer<typeof createAccountSchema>;

export default function CreateAccount() {
  const {
    register,
    formState: { isValid, isValidating, errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(createAccountSchema),
  });

  return (
    <TwoPanel
      img="https://images.unsplash.com/photo-1508264165352-258db2ebd59b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
      order="left"
      alt="">
      <img
        src="/logo.svg"
        alt="Launch Inc."
        className="object-cover w-full h-56 -mb-12 z-0"
      />
      <Form className="w-1/2 z-10">
        <Input
          label="Name"
          required
          {...register("name", { required: true })}
          error={Boolean(errors.name)}
          help={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          required
          error={Boolean(errors.email)}
          help={errors.email?.message}
          {...register("email", { required: true })}
        />
        <PasswordInput
          label="Password"
          error={Boolean(errors.password)}
          help={errors.password?.message}
          required
          {...register("password", { required: true })}
        />
        <PasswordInput
          label="Confirm Password"
          required
          error={Boolean(errors.confirmPassword)}
          help={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: true,
          })}
        />
        <Input
          label="Company"
          {...register("company")}
          error={Boolean(errors.company)}
          help={errors.company?.message}
        />
        <Button
          type="submit"
          className="mt-6 mb-3"
          auto
          disabled={!isValid || isValidating}>
          Create Account
        </Button>
        <Link className="block text-sm text-center" to={Routes.Login}>
          I already have an account
        </Link>
      </Form>
    </TwoPanel>
  );
}
