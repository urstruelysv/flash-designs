import { Dock } from "@/components/dock";
import { ExampleWorks } from "@/components/example-works";
import { HeroSection } from "@/components/hero-section";
import { OrderForm } from "@/components/order-form";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-600 to-pink-600">
      <Dock />
      <main>
        <HeroSection />
        <ExampleWorks />
        <OrderForm />
        <ProcessSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
