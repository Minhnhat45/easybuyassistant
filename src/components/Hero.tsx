
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import { ShoppingCart, CheckCircle, ArrowRight, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-light"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-light"></div>
      
      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center text-center">
          <Motion animation="fade-in" className="mb-6">
            <div className="inline-flex items-center py-1 px-3 bg-shopperly-accent/10 text-shopperly-accent rounded-full text-sm font-medium">
              <span className="mr-2">⚡</span>
              <span>Transform your shopping experience</span>
            </div>
          </Motion>
          
          <Motion animation="fade-in-up" delay="delay-100" className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your AI Shopping Assistant for <span className="text-gradient">Effortless</span> Smart Shopping
            </h1>
          </Motion>
          
          <Motion animation="fade-in-up" delay="delay-200" className="max-w-2xl">
            <p className="text-lg text-shopperly-muted mb-8">
              Shopperly intelligently searches, recommends, and even checks out for you. Shopping decisions made simple with the power of AI.
            </p>
          </Motion>
          
          <Motion animation="fade-in-up" delay="delay-300" className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="button-primary text-base px-8 py-6">
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="button-secondary text-base px-8 py-6">
              <span>How It Works</span>
            </Button>
          </Motion>
          
          <Motion animation="scale-in" delay="delay-400" className="w-full max-w-5xl relative">
            <div className="glass-card p-6 md:p-8 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center rounded-lg bg-shopperly-light p-4 mb-6">
                <Search className="w-5 h-5 text-shopperly-accent mr-3" />
                <p className="text-shopperly-dark font-medium">Best noise-cancelling headphones under $300</p>
              </div>
              
              <div className="rounded-lg bg-white border border-shopperly-border p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-shopperly-accent/10 flex items-center justify-center mr-3">
                    <ShoppingCart className="w-5 h-5 text-shopperly-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Shopperly AI Assistant</h3>
                    <p className="text-sm text-shopperly-muted">Finding the best match for you...</p>
                  </div>
                </div>
                
                <p className="mb-3">Based on my analysis of over 200 products, the <span className="font-semibold">Sony WH-1000XM4</span> offers the best value for noise-cancelling headphones under $300.</p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Industry-leading noise cancellation technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>30-hour battery life with quick charging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Exceptional sound quality with DSEE Extreme upscaling</span>
                  </li>
                </ul>
                
                <p className="text-sm text-shopperly-muted italic">Would you like me to find the best price and complete the checkout process for you?</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button variant="outline" className="border-shopperly-border">
                  Show Alternatives
                </Button>
                <Button className="bg-shopperly-accent hover:bg-shopperly-hover">
                  Find Best Price & Checkout
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-blue-100 animate-float"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-200 animate-float" style={{ animationDelay: "1s" }}></div>
          </Motion>
          
          <Motion animation="fade-in-up" delay="delay-500" className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <span className="ml-3 text-shopperly-muted text-sm">Trusted by 10,000+ shoppers</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">★★★★★</span>
              <span className="text-shopperly-muted text-sm">Rated 4.9/5 from 2,000+ reviews</span>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default Hero;
