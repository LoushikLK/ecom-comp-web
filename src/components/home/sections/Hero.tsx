"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--scroll", String(scrollY));
  }, [scrollY]);
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
          alt="E-commerce background"
          className="w-full h-full object-cover object-center opacity-50"
          fill
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-multiply"
        style={{
          clipPath: `polygon(0 0, 100% 0, 100% ${
            100 - scrollY * 0.1
          }%, 0 100%)`,
        }}
      />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-fade-up">
              Revolutionizing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                E-commerce{" "}
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl animate-fade-up animate-delay-150">
              Adfolios Software is transforming the online shopping experience
              with innovative solutions and unparalleled customer service.
            </p>
          </div>
          <div className="space-x-4 animate-fade-up animate-delay-300">
            <Button className="inline-flex h-11 items-center justify-center rounded-md bg-white text-purple-600 px-8 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-100 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Learn More
            </Button>
            <Button
              variant="outline"
              className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
