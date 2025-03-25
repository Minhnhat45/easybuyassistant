
import { Motion } from "@/components/ui/motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    title: "Technology Enthusiast",
    image: "bg-blue-500",
    text: "Shopperly completely changed how I shop for tech gadgets. The AI found me a camera that matched my exact specifications and was $200 cheaper than what I was about to buy!"
  },
  {
    name: "Emily Rodriguez",
    title: "Busy Parent",
    image: "bg-green-500",
    text: "As a parent of three, I have no time to research products. Shopperly recommended the perfect stroller for my needs and handled the checkout process while I was putting the kids to bed. A true time-saver!"
  },
  {
    name: "David Chen",
    title: "Product Designer",
    image: "bg-purple-500",
    text: "The product comparison feature is incredible. Shopperly laid out all the specs side by side for the laptops I was considering, and highlighted which one was best for design work specifically."
  },
  {
    name: "Alexandra Kim",
    title: "Online Shopper",
    image: "bg-pink-500",
    text: "I was skeptical about an AI handling my checkout, but Shopperly made it so seamless! It found a promo code I didn't know about and saved me an extra 15% on my purchase."
  },
  {
    name: "James Wilson",
    title: "Smart Home Enthusiast",
    image: "bg-yellow-500",
    text: "When setting up my smart home, Shopperly was invaluable. It recommended compatible devices and even told me which ones would integrate with my existing setup. So much easier than hours of research!"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(scrollRef.current.scrollLeft - 300);
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollRef.current.scrollLeft + 300);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-shopperly-light">
      <div className="container-narrow">
        <Motion animation="fade-in-up" className="text-center mb-16">
          <h2 className="section-heading">
            What Our Users <span className="text-gradient">Say</span>
          </h2>
          <p className="section-subheading">
            Join thousands of shoppers who've transformed their shopping experience with Shopperly
          </p>
        </Motion>
        
        <div className="relative">
          <Motion animation="fade-in" className="overflow-hidden">
            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto gap-6 pb-8 scrollbar-none"
              onScroll={() => scrollRef.current && setScrollPosition(scrollRef.current.scrollLeft)}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[300px] md:min-w-[350px] flex-shrink-0">
                  <div className="bg-white rounded-xl shadow-sm border border-shopperly-border p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${testimonial.image} mr-3 flex-shrink-0`}></div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-shopperly-muted">{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      <span>★★★★★</span>
                    </div>
                    <p className="text-sm">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Motion>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white border border-shopperly-border shadow-sm hover:bg-shopperly-light transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 rounded-full bg-white border border-shopperly-border shadow-sm hover:bg-shopperly-light transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
