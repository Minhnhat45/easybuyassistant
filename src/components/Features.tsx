
import { Motion } from "@/components/ui/motion";
import { Search, ShoppingCart, CreditCard, BarChart } from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-shopperly-accent" />,
    title: "Intelligent Search & Recommendation",
    description: "Input a product query and Shopperly automatically searches the internet for product features and recommendations."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-shopperly-accent" />,
    title: "Seamless Product Discovery",
    description: "Our searching agent retrieves and analyzes product listing cards from multiple shopping platforms."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-shopperly-accent" />,
    title: "Automated Checkout Process",
    description: "The Checkout Agent navigates to the product website, adds it to your cart, auto-fills your details, and completes checkout."
  },
  {
    icon: <BarChart className="w-8 h-8 text-shopperly-accent" />,
    title: "Product Comparison & Decision Support",
    description: "Compare different products and get expert advice on whether a product is worth buying for your specific needs."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container-narrow relative z-10">
        <Motion animation="fade-in-up" className="text-center mb-16">
          <h2 className="section-heading">
            Shopping Made <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="section-subheading">
            Powered by advanced AI, Shopperly transforms your shopping experience from search to checkout.
          </p>
        </Motion>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Motion 
              key={index} 
              animation="fade-in-up" 
              delay={`delay-${index * 100}`} 
              className="glass-card p-8 h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-shopperly-accent/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-shopperly-muted">{feature.description}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
