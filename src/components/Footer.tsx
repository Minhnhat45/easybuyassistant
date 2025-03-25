
import { ShoppingCart, Twitter, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 bg-white border-t border-shopperly-border">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
              <li>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                  FAQ
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
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                  Press
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
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-shopperly-muted hover:text-shopperly-accent transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-shopperly-border flex flex-col md:flex-row justify-between items-center">
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
  );
};

export default Footer;
