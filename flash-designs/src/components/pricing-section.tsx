import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export function PricingSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              One Simple Price - ₹60 Only!
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-white/90">
              Quality designs at an unbeatable price
            </p>
          </div>
          <Card className="w-full max-w-md border-4 border-yellow-400 bg-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full bg-yellow-400 p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl text-white">Flash Deal!</CardTitle>
              <CardDescription className="text-white/90">
                Everything included
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-center">
                <span className="text-6xl font-bold text-yellow-400">₹60</span>
                <span className="text-white/90 ml-2">per design</span>
              </div>
              <ul className="grid gap-2 text-white">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-400" /> Professional
                  Design
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-400" /> 60-Minute
                  Delivery
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-400" /> 1 Free Revision
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-400" /> High Resolution
                  Files
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-400" /> Ready to Print &
                  Share
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg">
                Order Now - ₹60
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
