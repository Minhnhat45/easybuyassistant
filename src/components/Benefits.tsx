
import { Motion } from "@/components/ui/motion";
import { Clock, Sparkles, Lock, LineChart } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-shopperly-accent" />,
    title: "Save Hours of Shopping Time",
    description: "Shopperly does the research, comparison, and checkout for you, cutting shopping time from hours to minutes."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-shopperly-accent" />,
    title: "Make Confident Decisions",
    description: "Get detailed product insights and personalized recommendations based on your specific needs."
  },
  {
    icon: <Lock className="w-6 h-6 text-shopperly-accent" />,
    title: "Secure Checkout Process",
    description: "Shopperly uses encrypted connections and never stores your payment details, ensuring safe transactions."
  },
  {
    icon: <LineChart className="w-6 h-6 text-shopperly-accent" />,
    title: "Find the Best Deals",
    description: "Our AI automatically compares prices across multiple platforms to ensure you get the best possible value."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container-narrow">
        <Motion animation="fade-in-up" className="text-center mb-16">
          <h2 className="section-heading">
            Why Choose <span className="text-gradient">Shopperly</span>
          </h2>
          <p className="section-subheading">
            Discover how Shopperly transforms your shopping experience
          </p>
        </Motion>
        
        <div className="flex flex-col md:flex-row flex-wrap">
          {benefits.map((benefit, index) => (
            <Motion 
              key={index}
              animation="fade-in-up"
              delay={`delay-${index * 100}`}
              className="w-full md:w-1/2 p-4"
            >
              <div className="flex h-full">
                <div className="mr-4 mt-1">
                  <div className="w-12 h-12 rounded-full bg-shopperly-accent/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="text-shopperly-muted">{benefit.description}</p>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        
        <Motion animation="fade-in-up" delay="delay-400" className="mt-16">
          <div className="glass-card p-8 lg:p-12 bg-gradient-to-br from-shopperly-light to-white">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
                <h3 className="text-2xl font-bold mb-4">Ready to transform your shopping experience?</h3>
                <p className="text-shopperly-muted mb-6">Join thousands of satisfied shoppers who save time and make better purchasing decisions with Shopperly.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="button-primary">
                    Get Started Free
                  </button>
                  <button className="button-secondary">
                    See How It Works
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 bg-white rounded-xl shadow-sm border border-shopperly-border p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah L.</p>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm italic">"Shopperly saved me hours of research when buying a new laptop. It found options I wouldn't have discovered on my own and got me the best deal. I'm never shopping without it again!"</p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Benefits;
