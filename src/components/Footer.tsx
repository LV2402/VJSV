import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: Mail,
      href: "mailto:vjsv@vnrvjiet.ac.in",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const quickLinks = [
    { label: "About VJSV", href: "/about" },
    { label: "Akshara Festival", href: "/akshara" },
    { label: "Events", href: "/events" },
  ];

  const eventTypes = [
    { label: "Sintilatunz", href: "/events/sintilatunz" },
    { label: "Convergence", href: "/events/convergence" },
    { label: "Workshops", href: "/events/workshops" },
  ];

  return (
    <footer className="bg-gradient-to-tr from-[#f9dbbd] via-[#ffa5ab] to-[#da627d] text-[#2b0d0d] pb-20 md:pb-10 lg:pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Main Footer Content */}
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Club Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#811414] to-[#d21421] rounded-lg flex items-center justify-center shadow-warm">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#811414]">VJSV</h3>
              <p className="text-sm text-[#450920]">Sahithi Vanam</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed opacity-90">
            Vignana Jyothi Sahithi Vanam - A vibrant Telugu literature club
            fostering creativity, cultural heritage, and literary excellence
            at VNRVJIET.
          </p>

          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-[#811414]">Quick Links</h4>
          <nav className="space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-sm opacity-80 hover:opacity-100 hover:text-[#811414] transition-all duration-300 hover:translate-x-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Events */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-[#811414]">Events & Programs</h4>
          <nav className="space-y-3">
            {eventTypes.map((event) => (
              <Link
                key={event.label}
                to={event.href}
                className="block text-sm opacity-80 hover:opacity-100 hover:text-[#a53860] transition-all duration-300 hover:translate-x-1"
              >
                {event.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact & Feedback */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-[#811414]">Get in Touch</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Email Us</p>
              <a
                href="mailto:vjsv@vnrvjiet.ac.in"
                className="text-sm opacity-80 hover:opacity-100 hover:text-[#d21421] transition-smooth"
              >
                vjsv@vnrvjiet.ac.in
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm opacity-80">
                VNRVJIET, Hyderabad
                <br />
                Telangana, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 text-sm opacity-80">
          <span>© {currentYear} VJSV - Vignana Jyothi Sahithi Vanam.</span>
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-1 text-sm opacity-80 mr-0 md:mr-16">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>for Telugu Literature</span>
        </div>
      </div>
    </div>
  </div>

  {/* Feedback Button */}
  <div className="fixed bottom-6 right-6 z-40">
    <Button
      asChild
      size="lg"
      className="rounded-full bg-[#a53860] hover:bg-[#450920] text-white shadow-md transition-all duration-300"
    >
      <Link to="" className="flex items-center space-x-2">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Feedback</span>
      </Link>
    </Button>
  </div>
</footer>

  );
};

export default Footer;
