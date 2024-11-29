import { FileEdit, MessageSquare, Send } from "lucide-react";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-white/90">
              Get your design in three simple steps
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50">
                <FileEdit className="h-10 w-10 text-purple-600" />
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">
                  1. Place Order
                </h3>
                <p className="text-white/90">
                  Fill out our simple form - just ₹60!
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50">
                <MessageSquare className="h-10 w-10 text-purple-600" />
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">
                  2. Connect
                </h3>
                <p className="text-white/90">
                  We&apos;ll call you to discuss your design
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50">
                <Send className="h-10 w-10 text-purple-600" />
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">
                  3. Receive
                </h3>
                <p className="text-white/90">Get your design in 60 minutes!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
