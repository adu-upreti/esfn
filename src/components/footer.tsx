"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo/esf-logo.png"
                alt="ESF Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="font-bold text-lg">ESF</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#what-we-do"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.whatWeDo")}
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.ourWork")}
                </a>
              </li>
              <li>
                <a
                  href="/how-we-work"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.howWeWork")}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#calculator"
                  className="hover:text-white transition-colors"
                >
                  {t("calculator.title")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  News & Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@everestsustainability.com"
                  className="hover:text-white transition-colors"
                >
                  info@everestsustainability.com
                </a>
              </li>
              <li>Nepal: +977-9855033294</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61582395896272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-esf-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/esf_nepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              {new Date().getFullYear()} Everest Sustainability Foundation.{" "}
              {t("footer.allRightsReserved")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.termsOfService")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.cookiePolicy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
