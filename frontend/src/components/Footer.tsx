import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <img src={logo} alt="Metallica" className="h-20 mb-4 ml-[-8px]" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-body">
              Metallica Co. understands the current and future needs of the oil and gas companies and meets their requirements with excellence and professionalism.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gold/20 hover:bg-gold/40 transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gold/20 hover:bg-gold/40 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gold/20 hover:bg-gold/40 transition-colors">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 gold-text">Useful Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services/import-and-export" },
                { label: "Projects", path: "/projects/mechanical" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 gold-text">Other Services</h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { label: "Renewable Solar Energy", path: "/services/renewable-solar-panel" },
                { label: "Import and Export", path: "/services/import-and-export" },
                { label: "Rental, Leasing & Transportation", path: "/services/rental-leasing-transportation" },
                { label: "Hospitality Services", path: "/services/hospitality-services" },
                { label: "Logistics & Warehouse", path: "/services/logistics-warehouse-management" },
                { label: "Real Estate", path: "/services/real-estate" }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 gold-text">Get In Touch</h4>
            <div className="space-y-4 text-sm text-primary-foreground/70 font-body">
              <div className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 gold-text" />
                <span>Fahaheel, Kuwait</span>
                <MapPin size={16} className="flex-shrink-0 mt-0.5 gold-text" />
                <span>Saudi Arabia</span>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 gold-text" />
                <div className="flex flex-col">
                  <a href="mailto:info@metallicakw.com" className="hover:text-gold transition-colors">info@metallicakw.com</a>
                  <a href="mailto:Info@metallicagcc.com" className="hover:text-gold transition-colors">Info@metallicagcc.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Globe size={16} className="flex-shrink-0 mt-0.5 gold-text" />
                <div className="flex flex-col">
                  <a href="https://www.metallicakw.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">www.metallicakw.com</a>
                  <a href="https://www.metallicagcc.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">www.metallicagcc.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 gold-text" />
                <span>+965 9898 8281, +965 6002 6630, +965 9220 6549</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-primary-foreground/10">
              <h5 className="font-heading font-bold text-sm mb-2 gold-text">Get Free Estimate</h5>
              <p className="text-lg font-bold gold-text font-heading">+965 9898 8281, +965 6002 6630, +965 9220 6549</p>
              <p className="text-xs text-primary-foreground/50 mt-1">Our online scheduling and payment system is safe.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container mx-auto px-4 text-center text-xs text-primary-foreground/50 font-body">
          Copyright © 2024 Metallica. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
