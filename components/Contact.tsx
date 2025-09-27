// app/contact/ContactPage.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // ✅ shadcn/ui input
import { Textarea } from "@/components/ui/textarea"; // ✅ shadcn/ui textarea
import { Button } from "@/components/ui/button"; // ✅ shadcn/ui button

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      // ✅ keeping your existing logic untouched
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0F0C10]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* ✅ Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-bold text-primary mb-10"
        >
          Contact Us
        </motion.h2>

        {/* ✅ Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-white dark:bg-secondary/40 border border-neutral/30 dark:border-neutral/60 rounded-xl shadow-lg p-8"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-accent text-white"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <p
              className={`text-center text-sm font-medium ${
                status.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
