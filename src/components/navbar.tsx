"use client";

import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: t("nav.home"), href: "/", type: "link", section: "home" },
    { name: t("nav.about"), href: "#about", type: "scroll", section: "about" },
    {
      name: t("nav.whatWeDo"),
      href: "#what-we-do",
      type: "scroll",
      section: "what-we-do",
    },
    {
      name: t("nav.ourWork"),
      href: "#our-work",
      type: "scroll",
      section: "our-work",
    },
    {
      name: t("nav.howWeWork"),
      href: "/how-we-work",
      type: "link",
      section: "how-we-work",
    },
    {
      name: t("nav.contact"),
      href: "#contact",
      type: "scroll",
      section: "contact",
    },
  ];

  const languages = [
    { code: "en", name: "EN" },
    { code: "np", name: "नेपाली" },
    { code: "fr", name: "FR" },
    { code: "es", name: "ES" },
  ];

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "what-we-do",
        "calculator",
        "our-work",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check on mount
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleNavigation = (href: string, type: string, section: string) => {
    if (type === "scroll") {
      // If we're on the home page, just scroll to the section
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setMobileMenuOpen(false);
        }
      } else {
        // If we're not on the home page, navigate to home page with hash
        router.push(`/${href}`);
        setMobileMenuOpen(false);
      }
    } else {
      setActiveSection(section);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Image
                src="/logo/esf-logo.png"
                alt="ESF Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="hidden md:block text-lg font-semibold text-gray-800 dark:text-white">
                Everest Sustainability Foundation
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive =
                link.type === "link"
                  ? pathname === link.href
                  : activeSection === link.section;

              if (link.type === "link") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-600 dark:text-gray-300 hover:text-esf-primary dark:hover:text-esf-primary transition-colors text-sm font-medium relative ${
                      isActive ? "text-esf-primary dark:text-esf-primary" : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-esf-primary"
                        layoutId="activeSection"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={link.href}
                    onClick={() =>
                      handleNavigation(link.href, link.type, link.section)
                    }
                    className={`text-gray-600 dark:text-gray-300 hover:text-esf-primary dark:hover:text-esf-primary transition-colors text-sm font-medium relative ${
                      isActive ? "text-esf-primary dark:text-esf-primary" : ""
                    }`}
                    type="button"
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-esf-primary"
                        layoutId="activeSection"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              }
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="text-sm border rounded-md px-2 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  link.type === "link"
                    ? pathname === link.href
                    : activeSection === link.section;

                if (link.type === "link") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-esf-primary dark:hover:text-esf-primary transition-colors ${
                        isActive
                          ? "text-esf-primary dark:text-esf-primary font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={link.href}
                      onClick={() =>
                        handleNavigation(link.href, link.type, link.section)
                      }
                      className={`block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-esf-primary dark:hover:text-esf-primary transition-colors ${
                        isActive
                          ? "text-esf-primary dark:text-esf-primary font-semibold"
                          : ""
                      }`}
                      type="button"
                    >
                      {link.name}
                    </button>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
