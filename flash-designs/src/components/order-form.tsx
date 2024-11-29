"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      alert("Order submitted successfully! We will contact you shortly.");
    } catch {
      alert("Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="w-full py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
      id="order"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Your Perfect Design Awaits!
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-white/90">
              Fill in the details below, and we&apos;ll deliver your design in
              just 60 minutes!
            </p>
          </div>
          <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Let&apos;s Get Started!
              </CardTitle>
              <CardDescription className="text-white/90">
                Express delivery in 60 minutes for just ₹60
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {/* Basic Information */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="bg-white/20 border-yellow-400/50 text-white placeholder:text-white/70"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter 10-digit number"
                      className="bg-white/20 border-yellow-400/50 text-white placeholder:text-white/70"
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>

                {/* Design Type Selection */}
                <div className="space-y-2">
                  <Label htmlFor="designType" className="text-white">
                    Design Type
                  </Label>
                  <Select name="designType" required>
                    <SelectTrigger className="bg-white/20 border-yellow-400/50 text-white">
                      <SelectValue placeholder="Choose your design type" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-yellow-400/50">
                      <SelectGroup>
                        <SelectItem
                          value="social"
                          className="text-white hover:bg-purple-800"
                        >
                          Social Media Post
                        </SelectItem>
                        <SelectItem
                          value="flyer"
                          className="text-white hover:bg-purple-800"
                        >
                          Flyer
                        </SelectItem>
                        <SelectItem
                          value="invitation"
                          className="text-white hover:bg-purple-800"
                        >
                          Invitation
                        </SelectItem>
                        <SelectItem
                          value="business"
                          className="text-white hover:bg-purple-800"
                        >
                          Business Card
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Design Details */}
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-white">
                    Design Details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Describe what you want in your design"
                    className="bg-white/20 border-yellow-400/50 text-white placeholder:text-white/70"
                    required
                  />
                </div>

                {/* Color Preferences */}
                <div className="space-y-2">
                  <Label htmlFor="colors" className="text-white">
                    Color Preferences (Optional)
                  </Label>
                  <Input
                    id="colors"
                    name="colors"
                    placeholder="e.g., Blue and Gold, Pastel colors"
                    className="bg-white/20 border-yellow-400/50 text-white placeholder:text-white/70"
                  />
                </div>

                {/* Email (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address (Optional)
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="For receiving design files"
                    className="bg-white/20 border-yellow-400/50 text-white placeholder:text-white/70"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-lg h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Order Now - ₹60 Only"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
