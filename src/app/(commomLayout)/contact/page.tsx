"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";

const contactSchema = z.object({
  name: z.string().min(2, "Name should be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject should be at least 3 characters"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormInputs) {
    try {
      await new Promise((res) => setTimeout(res, 1500));

      setSubmitted(true);
      reset();
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <MyContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions or need assistance? Fill out the form and our expert
            team will get back to you promptly. You can also reach us via phone
            or email.
          </p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p>123 Medi Mart Street, Health City, Wellness State, 12345</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p>+880 1234 567 890</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p>support@medimart.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded-lg p-8"
          noValidate
        >
          {submitted && (
            <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded-md">
              Your message has been sent successfully!
            </div>
          )}

          {/* Name */}
          <div className="mb-5">
            <Label htmlFor="name" className="font-semibold">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="mb-5">
            <Label htmlFor="subject" className="font-semibold">
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Brief subject"
              {...register("subject")}
              className={errors.subject ? "border-red-500" : ""}
            />
            {errors.subject && (
              <p className="text-red-600 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-5">
            <Label htmlFor="message" className="font-semibold">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              {...register("message")}
              className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </MyContainer>
  );
}
