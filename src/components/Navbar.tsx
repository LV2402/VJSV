import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "హోమ్ (Home)" },
    { path: "/akshara", label: "అక్షర (Akshara)" },
    {
      label: "ఈవెంట్స్ (Events)",
      dropdown: [
        { path: "/events/Sintillashunz", label: "Sintillashunz" },
        { path: "/events/convergence", label: "Convergence" },
        { path: "/events/workshops", label: "Workshops" },
      ],
    },
    { path: "/gallery", label: "చిత్రమాలిక (Gallery)" },
    { path: "/blogs", label: "రచనలు (Writings)" },
  ];

  const baseLink =
    "relative px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200";
  const activeLink =
    "font-semibold text-[#6c2121] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#6c2121] after:rounded-full";
  const inactiveLink =
    "font-normal text-[#6c2121] hover:opacity-80 truncate";

  const isDropdownChildActive = (dropdownItems: { path: string }[]) =>
    dropdownItems.some((d) => location.pathname.startsWith(d.path));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow-md shrink-0">
              <img src="/assets/vjsvlogo.png" alt="Logo" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg sm:text-xl text-[#6c2121] drop-shadow-sm truncate max-w-[200px] md:max-w-none">
                విజ్ఞానజ్యోతి సాహితీవనం
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`${baseLink} flex items-center space-x-1 ${
                      isDropdownChildActive(item.dropdown)
                        ? activeLink
                        : inactiveLink
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200 text-[#6c2121]" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 border border-gray-200 rounded-xl shadow-xl opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 backdrop-blur-sm">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.path}
                        to={d.path}
                        className={`block px-3 py-2 text-sm sm:text-base rounded-md transition-all duration-200 hover:bg-gray-100 ${
                          isActive(d.path) ? activeLink : inactiveLink
                        }`}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${baseLink} ${
                    isActive(item.path) ? activeLink : inactiveLink
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 hover:bg-gray-100 rounded-md transition-all duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[#6c2121]" />
              ) : (
                <Menu className="w-6 h-6 text-[#6c2121]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-md animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="w-full flex justify-between items-center px-3 py-2 text-sm sm:text-base font-medium text-[#6c2121] hover:bg-gray-100 rounded-md"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {(openDropdown === item.label ||
                      isDropdownChildActive(item.dropdown)) &&
                      item.dropdown.map((d) => (
                        <Link
                          key={d.path}
                          to={d.path}
                          onClick={() => setIsOpen(false)}
                          className={`block w-full px-6 py-2 text-sm sm:text-base rounded-md transition-all duration-200 hover:bg-gray-100 ${
                            isActive(d.path) ? activeLink : inactiveLink
                          }`}
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
                    className={`${baseLink} block ${
                      isActive(item.path) ? activeLink : inactiveLink
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;