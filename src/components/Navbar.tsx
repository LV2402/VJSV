import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock function for demo
  const isActive = (path) => path === "/";

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/assets/vjsvlogo.png" alt="" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-800">
                విజ్ఞానజ్యోతి సాహితీవనం
              </h1>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-white/30 text-gray-700 hover:text-gray-900 transition-all duration-200 text-base font-medium">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md border border-white/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((d) => (
                      <a
                        key={d.path}
                        href={d.path}
                        className={`block px-3 py-2 text-base hover:bg-blue-50/50 first:rounded-t-lg last:rounded-b-lg transition-all duration-200 ${isActive(d.path) ? "bg-blue-100/50 font-medium text-blue-800" : "text-gray-700"}`}
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/30 ${isActive(item.path) ? "text-blue-700 bg-white/20" : "text-gray-700"}`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 hover:bg-white/30 rounded-md transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/30 bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-600">{item.label}</div>
                    {item.dropdown.map((d) => (
                      <a
                        key={d.path}
                        href={d.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-2 text-base transition-all duration-200 hover:bg-blue-50/50 rounded-md ${isActive(d.path) ? "bg-blue-100/50 font-medium text-blue-800" : "text-gray-700"}`}
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-white/30 rounded-md ${isActive(item.path) ? "text-blue-700 bg-white/20 font-medium" : "text-gray-700"}`}
                  >
                    {item.label}
                  </a>
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