import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Search, 
  FileText, 
  Gavel, 
  Users, 
  Clock,
  Shield,
  Smartphone,
  Globe,
  FileCheck,
  Headphones,
  BookOpen
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "AI Legal Assistant",
    description: "Get instant answers to your legal questions with our advanced AI chatbot trained on Indian legal system.",
    features: ["24/7 Availability", "Multi-language Support", "Legal Document Help"],
    color: "text-blue-600"
  },
  {
    icon: Search,
    title: "Case Tracking",
    description: "Track your court cases in real-time across all Indian courts with detailed status updates.",
    features: ["Real-time Updates", "SMS Notifications", "Court Calendar"],
    color: "text-green-600"
  },
  {
    icon: FileText,
    title: "eFiling Services",
    description: "File your legal documents electronically with our secure and efficient eFiling system.",
    features: ["Secure Upload", "Digital Signatures", "Status Tracking"],
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "Legal Aid Access",
    description: "Connect with legal aid services and find qualified lawyers for your legal needs.",
    features: ["Lawyer Directory", "Free Consultations", "Legal Aid Programs"],
    color: "text-orange-600"
  },
  {
    icon: Gavel,
    title: "Court Information",
    description: "Access comprehensive information about courts, judges, and judicial procedures.",
    features: ["Court Directories", "Judge Information", "Procedure Guides"],
    color: "text-red-600"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Access all services on-the-go with our feature-rich mobile application.",
    features: ["Cross-platform", "Offline Access", "Push Notifications"],
    color: "text-indigo-600"
  }
];

const additionalFeatures = [
  { icon: Clock, title: "Fast Track Courts", description: "Information about expedited court processes" },
  { icon: Shield, title: "Data Security", description: "Bank-level encryption for all your data" },
  { icon: Globe, title: "Multi-language", description: "Available in 12 Indian languages" },
  { icon: FileCheck, title: "Document Verification", description: "Verify authenticity of legal documents" },
  { icon: Headphones, title: "Help Desk", description: "Dedicated support for technical assistance" },
  { icon: BookOpen, title: "Legal Resources", description: "Comprehensive legal knowledge base" }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering citizens with digital access to justice through innovative technology 
            and user-friendly legal services.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`service-card tilt-on-hover shine-on-hover reveal-on-scroll reveal-zoom`}
            >
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="glass" 
                  className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-smooth hover-glow-primary hover-scale"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Additional Features & Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center space-y-3 service-card tilt-on-hover shine-on-hover reveal-on-scroll reveal-right`}
              >
                <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center scale-hover">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 reveal-on-scroll reveal-up">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Ready to Access Justice?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of citizens who have simplified their legal journey with Nyaysetu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="h-12 px-6 bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-bounce"
              >
                Get Started Today
              </Button>
              <Button 
                variant="glass" 
                className="h-12 px-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;