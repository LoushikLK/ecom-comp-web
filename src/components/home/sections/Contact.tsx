import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions or want to learn more about our services? We would
              love to hear from you!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-4">
              <Input
                className="max-w-lg flex-1"
                placeholder="Your name"
                type="text"
              />
              <Input
                className="max-w-lg flex-1"
                placeholder="Your email"
                type="email"
              />
              <Input
                className="max-w-lg flex-1"
                placeholder="Your message"
                type="text"
              />
              <Button type="submit" className="w-full group">
                Send Message
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
