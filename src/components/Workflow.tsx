
import { useState } from "react";
import { Motion } from "@/components/ui/motion";
import { Search, ShoppingCart, CreditCard, Check } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Ask Shopperly",
    description: "Tell Shopperly what you're looking for in natural language.",
    preview: (
      <div className="rounded-lg bg-white p-4 border border-shopperly-border shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-shopperly-light rounded-full flex items-center justify-center mr-3">
            <span className="text-xs font-medium">You</span>
          </div>
          <p>I need a good coffee maker for under $100</p>
        </div>
      </div>
    )
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "AI Product Research",
    description: "Shopperly searches the internet to find and analyze the best options.",
    preview: (
      <div className="rounded-lg bg-white p-4 border border-shopperly-border shadow-sm">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-shopperly-accent/20 rounded-full flex items-center justify-center mr-3 shrink-0">
            <ShoppingCart className="w-4 h-4 text-shopperly-accent" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Searching for coffee makers under $100...</p>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-16 h-16 bg-shopperly-light rounded flex-shrink-0"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Smart Recommendation",
    description: "Get personalized recommendations with detailed comparisons.",
    preview: (
      <div className="rounded-lg bg-white p-4 border border-shopperly-border shadow-sm">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-shopperly-accent/20 rounded-full flex items-center justify-center mr-3 shrink-0">
            <ShoppingCart className="w-4 h-4 text-shopperly-accent" />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Top Recommendation:</p>
            <p className="text-sm mb-2">The <span className="font-medium">Ninja CE251 Coffee Maker</span> ($79.99) offers the best value with:</p>
            <ul className="text-xs space-y-1 mb-2">
              <li className="flex items-start">
                <Check className="w-3 h-3 text-green-500 mr-1 mt-0.5" />
                <span>12-cup programmable brewing</span>
              </li>
              <li className="flex items-start">
                <Check className="w-3 h-3 text-green-500 mr-1 mt-0.5" />
                <span>Advanced boiler for optimal brew temperature</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Automated Checkout",
    description: "Shopperly can navigate to the product site, add to cart, and complete checkout for you.",
    preview: (
      <div className="rounded-lg bg-white p-4 border border-shopperly-border shadow-sm">
        <div className="space-y-2">
          <div className="h-3 w-3/4 bg-shopperly-light rounded"></div>
          <div className="flex space-x-2">
            <div className="h-8 w-24 bg-shopperly-accent rounded"></div>
            <div className="h-8 flex-1 bg-shopperly-light rounded"></div>
          </div>
          <div className="flex justify-end">
            <div className="h-10 w-40 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-medium">Order Complete</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-24 bg-gradient-to-b from-white to-shopperly-light">
      <div className="container-narrow">
        <Motion animation="fade-in-up" className="text-center mb-16">
          <h2 className="section-heading">
            How <span className="text-gradient">Shopperly</span> Works
          </h2>
          <p className="section-subheading">
            A seamless journey from your product query to finding exactly what you need
          </p>
        </Motion>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="sticky top-24 space-y-4">
              {steps.map((step, index) => (
                <Motion 
                  key={index} 
                  animation="fade-in-up" 
                  delay={`delay-${index * 100}`}
                >
                  <button 
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start border-2 ${
                      activeStep === index 
                        ? "border-shopperly-accent bg-white shadow-md" 
                        : "border-transparent hover:bg-white"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-10 h-10 rounded-full mr-4 flex items-center justify-center shrink-0 ${
                      activeStep === index 
                        ? "bg-shopperly-accent text-white" 
                        : "bg-shopperly-accent/10 text-shopperly-accent"
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{step.title}</h3>
                      <p className="text-sm text-shopperly-muted">{step.description}</p>
                    </div>
                  </button>
                </Motion>
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <Motion animation="fade-in" className="glass-card p-8 h-96 flex items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                {steps[activeStep].preview}
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
