import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/akshara", label: "Akshara" },
    { 
      label: "Events", 
      dropdown: [
        { path: "/events/sintilatunz", label: "Sintilatunz" },
        { path: "/events/convergence", label: "Convergence" },
        { path: "/events/workshops", label: "Workshops" }
      ]
    },
    { path: "/gallery", label: "Gallery" },
    { path: "/blogs", label: "Rachanalu" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center shadow-warm">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-foreground">VJSV</h1>
              <p className="text-xs text-muted-foreground -mt-1">Sahithi Vanam</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-1 hover:bg-muted transition-smooth"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-48 bg-card/95 backdrop-blur-md border border-border shadow-elegant"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.path} asChild>
                        <Link
                          to={dropdownItem.path}
                          className={`w-full px-3 py-2 text-sm hover:bg-muted transition-smooth ${
                            isActive(dropdownItem.path) ? 'bg-muted font-medium' : ''
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-muted ${
                    isActive(item.path) 
                      ? 'bg-primary text-primary-foreground shadow-warm' 
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-warm hover:shadow-glow"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                      {item.label}
                    </div>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className={`block px-6 py-2 text-sm transition-smooth hover:bg-muted rounded-md ${
                          isActive(dropdownItem.path) ? 'bg-muted font-medium' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-sm font-medium transition-smooth hover:bg-muted rounded-md ${
                      isActive(item.path) ? 'bg-primary text-primary-foreground' : 'text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <Button 
                  asChild 
                  className="w-full bg-hero-gradient"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;