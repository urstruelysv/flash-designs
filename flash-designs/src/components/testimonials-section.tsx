import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Happy Customers
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-white/90">
              Join thousands of satisfied customers who got amazing designs for
              just ₹60
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="bg-white/10 border-2 border-yellow-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-20 w-20 border-2 border-yellow-400">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Rahul Kumar
                    </h3>
                    <p className="text-white/90">
                      &ldquo;Got my wedding invitation designed in just 45
                      minutes. Fantastic service!&rdquo;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-2 border-yellow-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-20 w-20 border-2 border-yellow-400">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Priya Patel
                    </h3>
                    <p className="text-white/90">
                      &ldquo;Best &apos;60 spent! The designer understood
                      exactly what I wanted for my shop&apos;s poster.&rdquo;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-2 border-yellow-400/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-20 w-20 border-2 border-yellow-400">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Amit Singh</h3>
                    <p className="text-white/90">
                      &ldquo;Got my business flyer designed and delivered in
                      under an hour. Amazing!&rdquo;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
