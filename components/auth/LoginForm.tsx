"use client";

import * as z from "zod";

import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../common/FormError";
import FormSuccess from "../common/FormSuccess";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(form.getValues());
  };
  return (
    <div className="text-slate-50">
      <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't Have an Account?"
        backButtonHref="/auth/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage className="text-xm text-orange-400 font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="1234567" type="password" />
                    </FormControl>
                    <FormMessage className="text-xm text-orange-400 font-light" />
                  </FormItem>
                )}
              />
            </div>
            <FormError message="Either Your Email Address or Password is Wrong, Kindly Recheck and Try Again" />
            <FormSuccess message="You've successfully managed to log into your account" />
            <Button variant="default" type="submit" className="w-full bg-[#5d8e9a] hover:bg-[#537f8a]">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default LoginForm;
