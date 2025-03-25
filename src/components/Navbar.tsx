
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-shopperly-border/50" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="w-8 h-8 text-shopperly-accent" />
          <span className="ml-2 text-xl font-bold">Shopperly</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
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
        </nav>
        
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
        
        <button 
          className="p-2 md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 p-5 flex flex-col animate-fade-in">
          <nav className="flex flex-col space-y-5 mt-5">
            <a 
              href="#features" 
              className="text-lg font-medium p-2 hover:bg-shopperly-light rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#workflow" 
              className="text-lg font-medium p-2 hover:bg-shopperly-light rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-lg font-medium p-2 hover:bg-shopperly-light rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-lg font-medium p-2 hover:bg-shopperly-light rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </nav>
          <div className="flex flex-col space-y-3 mt-auto mb-5">
            <Button 
              variant="outline" 
              className="w-full border-shopperly-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            <Button 
              className="w-full bg-shopperly-accent hover:bg-shopperly-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
