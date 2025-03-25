
import { Motion } from "@/components/ui/motion";
import { Search, ShoppingCart, CreditCard, BarChart } from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-shopperly-accent" />,
    title: "Intelligent Search",
    description: "Input a product query and Shopperly searches the internet for the best recommendations."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-shopperly-accent" />,
    title: "Product Discovery",
    description: "Our AI retrieves and analyzes product listings from multiple shopping platforms."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-shopperly-accent" />,
    title: "Automated Checkout",
    description: "The Checkout Agent adds products to your cart, auto-fills details, and completes checkout."
  },
  {
    icon: <BarChart className="w-8 h-8 text-shopperly-accent" />,
    title: "Product Comparison",
    description: "Compare products and get expert advice on what's best for your specific needs."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container-narrow relative z-10">
        <Motion animation="fade-in-up" className="text-center mb-8">
          <h2 className="section-heading">
            Shopping Made <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="section-subheading mb-8">
            Powered by advanced AI, Shopperly transforms your shopping experience.
          </p>
        </Motion>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Motion 
              key={index} 
              animation="fade-in-up" 
              delay={`delay-${index * 100}`} 
              className="glass-card p-4 h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-shopperly-accent/10 flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-shopperly-muted text-sm">{feature.description}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
