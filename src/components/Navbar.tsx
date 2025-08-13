import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "హోమ్ (Home)" },
    { path: "/akshara", label: "అక్షర (Akshara)" },
    {
      label: "ఈవెంట్స్ (Events)",
      dropdown: [
        { path: "/events/sintillations", label: "Sintillations" },
        { path: "/events/convergence", label: "Convergence" },
        { path: "/events/workshops", label: "Workshops" }
      ]
    },
    { path: "/gallery", label: "చిత్రమాలిక (Gallery)" },
    { path: "/blogs", label: "రచనలు (Writings)" },
  ];

  return (
    <nav className="font-telugu fixed top-0 left-0 right-0 z-50 border-b border-border bg-[hsla(34,54%,92%,0.50)] backdrop-blur-xl shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/assets/vjsvlogo.png" alt="VJSV Logo" className="w-10 h-10 rounded-lg object-cover" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-foreground font-telugu">
                విజ్ఞానజ్యోతి సాహితీవనం
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-1 hover:bg-muted/60 transition-smooth">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-card/90 backdrop-blur-md border border-border shadow-elegant">
                    {item.dropdown.map((d) => (
                      <DropdownMenuItem key={d.path} asChild>
                        <Link
                          to={d.path}
                          className={`w-full px-3 py-2 text-sm hover:bg-muted transition-smooth ${isActive(d.path) ? "bg-muted font-medium" : ""}`}
                        >
                          {d.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-muted/50 ${isActive(item.path) ? "text-primary" : "text-foreground"}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card/90 backdrop-blur-md animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{item.label}</div>
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.path}
                        to={d.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-2 text-sm transition-smooth hover:bg-muted rounded-md ${isActive(d.path) ? "bg-muted font-medium" : ""}`}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium transition-smooth hover:bg-muted rounded-md ${isActive(item.path) ? "text-primary font-medium" : "text-foreground"}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
