import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-eco-primary text-white mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-yellow-200 text-eco-secondary" />
              <h3 className="text-2xl font-bold">EcoGenesis</h3>
            </div>
            <p className="text-eco-primary-foreground/80 text-sm leading-relaxed">
              Empowering rural India through IoT-enabled sustainable manufacturing. 
              Building a connected green economy, one unit at a time.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-eco-secondary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-eco-secondary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-eco-secondary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-eco-secondary">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-200">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">IoT Monitoring</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Analytics</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Inventory Management</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-200">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Government Schemes</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Mentorship Program</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-eco-primary-foreground/80 hover:text-eco-secondary transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-200">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-200" />
                <span className="text-eco-primary-foreground/80">contact@ecogenesis.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-200" />
                <span className="text-eco-primary-foreground/80">+91 9192X XXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-200 mt-0.5" />
                <span className="text-eco-primary-foreground/80">
                  Innovation Hub, New Delhi<br />
                  Delhi, India 110045
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-eco-primary-foreground/60">
              © 2025 EcoGenesis. All rights reserved. Building a sustainable future.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-eco-primary-foreground/60 hover:text-eco-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-eco-primary-foreground/60 hover:text-eco-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-eco-primary-foreground/60 hover:text-eco-secondary transition-colors">
                Carbon Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;