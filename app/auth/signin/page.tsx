"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "email must be at least 2 characters." })
    .max(50)
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(20),
  rememberMe: z.boolean(),
});

const SignIn = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/dashboard");
    console.log(values);
  }

  return (
    <div className="bg-white w-full max-w-md px-10 py-16 rounded-2xl mx-auto shadow-lg">
      <h1 className="font-bold text-3xl text-center mb-2">Login to Account</h1>
      <p className="text-center">
        Please enter your email and password to continue
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-7 flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-dark-text">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className={
                      form.formState.errors.email && "border-destructive"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-base text-dark-text">
                      Password
                    </FormLabel>
                    <Link
                      href="/forgot-password"
                      className="hover:underline opacity-60"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className={
                        form.formState.errors.password && "border-destructive"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm opacity-60">
                    Remember Password
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="w-[80%] py-5 bg-primary text-white font-bold"
            >
              Sign In
            </Button>
          </div>

          <p className="text-center text-sm">
            Dont have an account?{" "}
            <Link href="/signup" className="text-secondary hover:underline">
              Create Account
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
