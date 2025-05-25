import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 font-semibold",
          isScrolled ? "py-3 bg-background/10 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <img
              src="/projects/Untitled_design__10_-removebg-preview.png"
              alt="Logo"
              className={cn(
                "w-14 h-13 mr-1 transition-transform duration-500",
                isScrolled && "slow-spin"
              )}
            />
            <span className="relative z-10">
              <span className="text-glow text-foreground">EnisPopovic</span>.dev
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav toggle button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile nav menu - moved outside container */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto bg-background/30 backdrop-blur-md"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl font-semibold">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* 👇 Inject custom CSS for slow spin */}
      <style jsx="true">{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .slow-spin {
          animation: slow-spin 8s linear infinite;
        }
      `}</style>
    </>
  );
};
