"use client";

import { useState } from "react";
import { Button } from "@/UI/ui/button";
import { Menu, X, Scale, MessageCircle, Phone, LogIn } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Case Tracking", href: "#tracking" },
    { name: "Legal Aid", href: "#legal-aid" },
    { name: "eFiling", href: "#efiling" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Nyaysetu</span>
              <span className="text-xs text-muted-foreground">Gateway for Justice</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 reveal-on-scroll reveal-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium link-underline"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="glass" className="text-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Help: 1800-123-456
            </Button>
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-smooth"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Chat
            </Button>
            <Button
              variant="glow"
              className="transition-bounce"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="glass"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-3 mt-3 space-y-2">
                <Button variant="glass" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Help: 1800-123-456
                </Button>
                <Button 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  AI Chat Assistant
                </Button>
                <Button
                  variant="glow"
                  className="w-full"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;