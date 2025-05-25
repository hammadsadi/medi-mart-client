"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "./loginValidationSchema";
import { userLogin } from "@/services/AuthServices";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const { setIsLoading } = useUser();

  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Processing...");
    try {
      const res = await userLogin(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        router.push(redirect || "/");
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  // Demo Admin Login
  const handleDemoLogin = async (type: "admin" | "user") => {
    const toastId = toast.loading("Logging in...");
    const data = {
      identifier:
        type === "admin"
          ? process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL
          : process.env.NEXT_PUBLIC_DEMO_USER_EMAIL,
      password:
        type === "admin"
          ? process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD
          : process.env.NEXT_PUBLIC_DEMO_USER_PASSWORD,
    };

    try {
      const res = await userLogin(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        router.push(redirect || "/");
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-2xl p-6 sm:p-8 relative">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">Medi Mart</h2>
          <p className="text-sm text-muted-foreground text-center">
            Welcome back! Please login to continue.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="you@example.com or 01XXXXXXXXX"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
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
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isSubmitting ? (
                <LoaderCircle className="w-4 h-4 animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>

        <p className="text-sm text-center mt-3">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Try a demo account</p>
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDemoLogin("admin")}
            >
              Demo Admin
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDemoLogin("user")}
            >
              Demo User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
