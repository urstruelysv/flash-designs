"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

const exampleWorks = [
  {
    category: "Social Media Posts",
    description: "Eye-catching posts for Instagram, Facebook & more",
    examples: [
      {
        title: "Restaurant Food Post",
        image: "/restimg.png",
        price: "₹60",
        turnaround: "60 min",
      },
      {
        title: "Fashion Sale Post",
        image: "/1010.png?height=300&width=300",
        price: "₹60",
        turnaround: "60 min",
      },
    ],
  },
  {
    category: "Business Flyers",
    description: "Professional flyers for your business promotions",
    examples: [
      {
        title: "Grand Opening Flyer",
        image: "/gopen.png?height=400&width=300",
        price: "₹60",
        turnaround: "60 min",
      },
      {
        title: "Special Offer Flyer",
        image: "/bigsale.png?height=400&width=300",
        price: "₹60",
        turnaround: "60 min",
      },
    ],
  },
  {
    category: "Event Invitations",
    description: "Beautiful invitations for all your special occasions",
    examples: [
      {
        title: "Wedding Invitation",
        image: "/invi.png?height=400&width=300",
        price: "₹60",
        turnaround: "60 min",
      },
      {
        title: "Birthday Invitation",
        image: "/birthday.png?height=400&width=300",
        price: "₹60",
        turnaround: "60 min",
      },
    ],
  },
  {
    category: "Business Cards",
    description: "Stand out with unique business card designs",
    examples: [
      {
        title: "Modern Business Card",
        image: "/Card.png?height=200&width=350",
        price: "₹60",
        turnaround: "60 min",
      },
      {
        title: "Creative Business Card",
        image: "/creat.png?height=200&width=350",
        price: "₹60",
        turnaround: "60 min",
      },
    ],
  },
];

export function ExampleWorks() {
  const router = useRouter();

  const scrollToOrder = () => {
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#order");
    }
  };

  return (
    <section
      id="example-works"
      className="w-full py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Example Designs
          </h2>
          <p className="text-xl text-white/90">
            Check out what you can get for just ₹60!
          </p>
        </div>
        <div className="grid gap-6 md:gap-8">
          {exampleWorks.map((category, index) => (
            <Card
              key={index}
              className="bg-white/10 border-2 border-yellow-400/50 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center justify-between">
                  {category.category}
                  <Badge
                    variant="secondary"
                    className="bg-yellow-400 text-purple-900 text-sm"
                  >
                    ₹60 Only
                  </Badge>
                </CardTitle>
                <p className="text-white/90">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="relative group rounded-lg overflow-hidden bg-white/5 p-2 transition-all hover:bg-white/20"
                    >
                      <Image
                        src={example.image}
                        alt={example.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full"
                      />
                      <div className="mt-2 space-y-1">
                        <h3 className="text-white font-semibold group-hover:text-yellow-400">
                          {example.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/90">
                            Delivery: {example.turnaround}
                          </span>
                          <span className="text-yellow-400 font-bold">
                            {example.price}
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <button
                          className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold transform -translate-y-full group-hover:translate-y-0 transition-transform"
                          onClick={scrollToOrder}
                        >
                          Order Similar Design
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
