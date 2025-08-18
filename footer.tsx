import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { Button } from "@/UI/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About Nyaysetu", href: "#about" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Accessibility", href: "#accessibility" },
    { name: "Sitemap", href: "#sitemap" }
  ];

  const services = [
    { name: "AI Legal Assistant", href: "#legal-assistant" },
    { name: "Case Tracking", href: "#case-tracking" },
    { name: "eFiling Services", href: "#efiling" },
    { name: "Legal Aid", href: "#legal-aid" },
    { name: "Court Information", href: "#court-info" }
  ];

  const resources = [
    { name: "Legal Forms", href: "#forms" },
    { name: "Court Procedures", href: "#procedures" },
    { name: "Legal Glossary", href: "#glossary" },
    { name: "FAQ", href: "#faq" },
    { name: "User Guide", href: "#guide" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nyaysetu</h3>
                <p className="text-secondary text-sm">Gateway for Justice</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering citizens with digital access to justice through innovative technology. 
              Making legal services accessible, transparent, and efficient for everyone.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">1800-123-456 (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">support@nyaysetu.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/90">Ministry of Law & Justice, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold text-secondary mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for latest updates on legal services and new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-smooth"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20 reveal-on-scroll reveal-fade">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 text-sm">
              © 2025 Nyaysetu - Gateway for Justice. All rights reserved. | Ministry of Law and Justice, Government of India
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/70 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/70 hover:text-secondary transition-smooth hover-scale"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;