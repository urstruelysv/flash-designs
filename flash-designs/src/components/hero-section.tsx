"use client";

import { Button } from "@/components/ui/button";
import { Clock, Palette, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pt-24 pb-12">
      <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Express Designs
              <br />
              <span className="text-yellow-300 animate-pulse">Just ₹60!</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-white/90 md:text-2xl">
              Professional designs delivered in 60 minutes! Flyers, posters, and
              creative materials at an unbeatable price.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              size="lg"
              className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
              onClick={() =>
                document
                  .getElementById("order")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Order Now - ₹60 Only!
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 border-white text-white hover:bg-white/20"
            >
              View Samples
            </Button> */}
          </div>
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Zap className="h-12 w-12 text-yellow-300" />
              <h2 className="text-xl font-bold text-white">Super Fast</h2>
              <p className="text-white/90">Delivery in 60 mins</p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Palette className="h-12 w-12 text-yellow-300" />
              <h2 className="text-xl font-bold text-white">Pro Design</h2>
              <p className="text-white/90">Expert designers</p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Clock className="h-12 w-12 text-yellow-300" />
              <h2 className="text-xl font-bold text-white">24/7 Support</h2>
              <p className="text-white/90">Always available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
