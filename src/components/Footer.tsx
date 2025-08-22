import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Instagram,
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
      href: "https://www.instagram.com/vj.sahitivanam/",
      label: "Instagram",
      color: "hover:text-pink-500",
      bg: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@vj.sahitivanam",
      label: "YouTube",
      color: "hover:text-red-500",
      bg: "bg-gradient-to-br from-red-500 to-pink-600"
    },
  ];

  const quickLinks = [
    { label: "About VJSV", href: "/" },
    { label: "అక్షర (Akshara)", href: "/akshara" },
  ];

  const eventTypes = [
    { label: "Sintillashunz", href: "/events/sintillations" },
    { label: "Convergence", href: "/events/convergence" },
    { label: "Workshops", href: "/events/workshops" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden pb-20 md:pb-10 lg:pb-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Club Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">VJSV</h3>
                  <p className="text-gray-600">Sahithi Vanam</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Vignana Jyothi Sahithi Vanam - A vibrant Telugu literature club
                fostering creativity, cultural heritage, and literary excellence
                at VNRVJIET.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bg} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-gray-600 hover:text-gray-800 hover:bg-white/60 px-3 py-2 rounded-lg transition-all duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Events */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Events & Programs
              </h4>
              <nav className="space-y-3">
                {eventTypes.map((event) => (
                  <Link
                    key={event.label}
                    to={event.href}
                    className="block text-gray-600 hover:text-gray-800 hover:bg-white/60 px-3 py-2 rounded-lg transition-all duration-300 hover:translate-x-1 transform"
                  >
                    {event.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact & Feedback */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Get in Touch</h4>

              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <p className="font-semibold text-gray-800 mb-2">Email Us</p>
                  <a
                    href="mailto:vjsv@vnrvjiet.ac.in"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                  >
                    vjsv@vnrvjiet.in
                  </a>
                  <a
                    href="mailto:vjsaahitiivanam@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                  >
                    vjsaahitiivanam@gmail.com
                  </a>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                  <p className="font-semibold text-gray-800 mb-2">Contact Us</p>
                  <div className="text-gray-600 space-y-1">
                    <p>ఓంకార్ : +91 8977125589</p>
                    <p>గీతిక : +91 6303724808</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>© {currentYear} VJSV - Vignana Jyothi Sahithi Vanam. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 mr-0 md:mr-16">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
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
          className="rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-0"
        >
          <Link to="" className="flex items-center space-x-2 px-6 py-3">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Feedback</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;