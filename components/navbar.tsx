"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tighter transition-colors hover:text-primary"
        >
          Gaurav
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Link href={"https://drive.google.com/file/d/17eDR63AnfRxm3dxUPqQilglwI0noz5JI/view?usp=sharing"} target="_blank">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Resume
          </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="mr-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center justify-between text-lg font-medium transition-colors hover:text-primary py-4 border-b border-border/50 last:border-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
                <Button 
                  variant="default" 
                  className="flex items-center gap-2 mt-6 w-full text-lg h-12"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/17eDR63AnfRxm3dxUPqQilglwI0noz5JI/view?usp=sharing" target="_blank" download>
                    <Download className="h-5 w-5" /> Download Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
