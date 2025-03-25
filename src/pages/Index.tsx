
import { useState, useEffect } from "react";
import { Motion } from "@/components/ui/motion";
import { 
  ShoppingCart, 
  Search, 
  CreditCard, 
  BarChart, 
  Clock, 
  Sparkles,
  Lock, 
  LineChart,
  CheckCircle,
  ArrowRight,
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin,
  Mail,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-shopperly-light rounded-full animate-spin border-t-shopperly-accent"></div>
        </div>
      </div>
    );
  }

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
    }
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-shopperly-border/50 py-4 z-50">
        <div className="container-narrow flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="w-8 h-8 text-shopperly-accent" />
            <span className="ml-2 text-xl font-bold">Shopperly</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-shopperly-dark hover:text-shopperly-accent transition-colors duration-200">
              Features
            </a>
            <a href="#workflow" className="text-shopperly-dark hover:text-shopperly-accent transition-colors duration-200">
              How It Works
            </a>
            <a href="#benefits" className="text-shopperly-dark hover:text-shopperly-accent transition-colors duration-200">
              Benefits
            </a>
            <a href="#testimonials" className="text-shopperly-dark hover:text-shopperly-accent transition-colors duration-200">
              Testimonials
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-shopperly-border hover:bg-shopperly-light"
            >
              Sign In
            </Button>
            <Button className="bg-shopperly-accent hover:bg-shopperly-hover">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-20 md:pb-24 overflow-hidden">
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
              
              <Motion animation="scale-in" delay="delay-400" className="w-full max-w-4xl relative">
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
              </Motion>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 relative">
          <div className="container-narrow relative z-10">
            <Motion animation="fade-in-up" className="text-center mb-12">
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
                  className="glass-card p-6 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-shopperly-accent/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-shopperly-muted">{feature.description}</p>
                </Motion>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-16 bg-gradient-to-b from-white to-shopperly-light">
          <div className="container-narrow">
            <Motion animation="fade-in-up" className="text-center mb-12">
              <h2 className="section-heading">
                How <span className="text-gradient">Shopperly</span> Works
              </h2>
              <p className="section-subheading">
                A seamless journey from your product query to finding exactly what you need
              </p>
            </Motion>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/5">
                <div className="space-y-4">
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
                <Motion animation="fade-in" className="glass-card p-6 flex items-center justify-center">
                  <div className="w-full max-w-md mx-auto">
                    {steps[activeStep].preview}
                  </div>
                </Motion>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16">
          <div className="container-narrow">
            <Motion animation="fade-in-up" className="text-center mb-12">
              <h2 className="section-heading">
                Why Choose <span className="text-gradient">Shopperly</span>
              </h2>
              <p className="section-subheading">
                Discover how Shopperly transforms your shopping experience
              </p>
            </Motion>
            
            <div className="flex flex-col md:flex-row flex-wrap mb-10">
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
            
            <Motion animation="fade-in-up" className="mt-6">
              <div className="glass-card p-6 lg:p-8 bg-gradient-to-br from-shopperly-light to-white">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to transform your shopping experience?</h3>
                    <p className="text-shopperly-muted mb-6">Join thousands of satisfied shoppers who save time and make better purchasing decisions with Shopperly.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="button-primary">
                        Get Started Free
                      </Button>
                      <Button className="button-secondary">
                        See How It Works
                      </Button>
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-shopperly-light">
          <div className="container-narrow">
            <Motion animation="fade-in-up" className="text-center mb-12">
              <h2 className="section-heading">
                What Our Users <span className="text-gradient">Say</span>
              </h2>
              <p className="section-subheading">
                Join thousands of shoppers who've transformed their shopping experience with Shopperly
              </p>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Motion 
                  key={index}
                  animation="fade-in-up"
                  delay={`delay-${index * 100}`}
                >
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
                </Motion>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-12 pb-6 bg-white border-t border-shopperly-border">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-6 h-6 text-shopperly-accent" />
                <span className="ml-2 text-lg font-bold">Shopperly</span>
              </div>
              <p className="text-shopperly-muted mb-4 text-sm">
                Your AI shopping assistant that makes shopping decisions simple and checkout effortless.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-shopperly-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-shopperly-muted">
              © {new Date().getFullYear()} Shopperly. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="inline-flex items-center text-shopperly-accent hover:text-shopperly-hover transition-colors text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>Subscribe to our newsletter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
