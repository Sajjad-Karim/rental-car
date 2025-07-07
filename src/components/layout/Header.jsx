import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact-us" },
  { name: "Terms & Conditions", path: "/terms" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="border-b border-border bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Al Shamel Rent a Car"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors px-4 py-2 rounded-full",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:text-foreground/80"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button onClick={() => navigate("/cars")} className="gap-1">
            Choose Your Car <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/my-accout")}
            className="gap-1"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/my-accout")}
            className="gap-1"
          >
            <UserPlus className="w-4 h-4" />
            Register
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(true)}
            className="text-foreground"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md text-foreground md:hidden transition-all">
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(false)}
              className="text-foreground"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block w-full text-base font-medium px-4 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted hover:text-foreground"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button
              onClick={() => {
                setMenuOpen(false);
                navigate("/cars");
              }}
              className="w-full gap-1 mt-4"
            >
              Choose Your Car <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setMenuOpen(false);
                navigate("/my-accout");
              }}
              className="w-full gap-1"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setMenuOpen(false);
                navigate("/my-accout");
              }}
              className="w-full gap-1"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
