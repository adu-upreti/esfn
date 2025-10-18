"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { t } = useTranslation();
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [quotationData, setQuotationData] = useState({
    companyName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setInquiryData({ name: "", email: "", subject: "", message: "" });
  };

  const handleQuotationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your quotation request! We will get back to you soon with a detailed quote."
    );
    setQuotationData({ companyName: "", email: "", subject: "", message: "" });
  };

  const offices = [
    {
      location: "Nepal Office",
      address: "Sanepa, Lalitpur, Nepal",
      email: "info@everestsustainability.com",
      phone: "+977-9855033294",
      coords: [27.6825, 85.3036], // 27°40'57.1"N 85°18'13.1"E
      mapUrl: "https://maps.app.goo.gl/hFuDxxXFwj1bLdBa8",
    },
    {
      location: "Australia Office",
      address: "Sydney, NSW, Australia",
      email: "info@everestsustainability.com",
      coords: [-33.87849, 151.20752], // Latitude: –33.87849, Longitude: 151.20752
      mapUrl: "https://maps.app.goo.gl/1Hypt6Vbj58poy4M9",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("contact.getInTouch")}
          </p>
        </motion.div>

        {/* Forms Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("contact.inquiryForm")}
              </h3>
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div>
                  <Label htmlFor="inquiry-name">{t("contact.name")}</Label>
                  <Input
                    id="inquiry-name"
                    value={inquiryData.name}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiry-email">{t("contact.email")}</Label>
                  <Input
                    id="inquiry-email"
                    type="email"
                    value={inquiryData.email}
                    onChange={(e) =>
                      setInquiryData({ ...inquiryData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiry-subject">
                    {t("contact.subject")}
                  </Label>
                  <Input
                    id="inquiry-subject"
                    value={inquiryData.subject}
                    onChange={(e) =>
                      setInquiryData({
                        ...inquiryData,
                        subject: e.target.value,
                      })
                    }
                    required
                    className="mt-2"
                    placeholder={t("contact.inquirySubjectPlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="inquiry-message">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="inquiry-message"
                    value={inquiryData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setInquiryData({
                        ...inquiryData,
                        message: e.target.value,
                      })
                    }
                    required
                    rows={5}
                    className="mt-2"
                    placeholder={t("contact.inquiryMessagePlaceholder")}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full dark:border-[#fdfdfd]"
                  size="lg"
                >
                  {t("contact.submit")}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Request Quotation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("contact.quotationForm")}
              </h3>
              <form onSubmit={handleQuotationSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="quotation-company">
                    {t("contact.companyName")}
                  </Label>
                  <Input
                    id="quotation-company"
                    value={quotationData.companyName}
                    onChange={(e) =>
                      setQuotationData({
                        ...quotationData,
                        companyName: e.target.value,
                      })
                    }
                    required
                    className="mt-2"
                    placeholder={t("contact.companyNamePlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="quotation-email">{t("contact.email")}</Label>
                  <Input
                    id="quotation-email"
                    type="email"
                    value={quotationData.email}
                    onChange={(e) =>
                      setQuotationData({
                        ...quotationData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="mt-2"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="quotation-subject">
                    {t("contact.subject")}
                  </Label>
                  <Input
                    id="quotation-subject"
                    value={quotationData.subject}
                    onChange={(e) =>
                      setQuotationData({
                        ...quotationData,
                        subject: e.target.value,
                      })
                    }
                    required
                    className="mt-2"
                    placeholder={t("contact.quotationSubjectPlaceholder")}
                  />
                </div>

                <div>
                  <Label htmlFor="quotation-message">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="quotation-message"
                    value={quotationData.message}
                    onChange={(e) =>
                      setQuotationData({
                        ...quotationData,
                        message: e.target.value,
                      })
                    }
                    required
                    rows={5}
                    className="mt-2"
                    placeholder={t("contact.quotationMessagePlaceholder")}
                  />
                </div>

                <Button
                  type="submit"
                  variant="success"
                  className="w-full dark:border-[#fdfdfd]"
                  size="lg"
                >
                  {t("contact.requestQuotation")}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Office Locations Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Nepal Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("contact.nepalOffice")}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-esf-primary dark:text-white mt-1" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {offices[0].address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-esf-primary dark:text-white" />
                  <a
                    href={`mailto:${offices[0].email}`}
                    className="text-esf-primary dark:text-white hover:underline"
                  >
                    {offices[0].email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-esf-primary dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {offices[0].phone}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-esf-primary dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.workingHours")}
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61582395896272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-esf-primary dark:text-white hover:text-esf-primary-hover dark:hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/esf_nepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed - Nepal */}
              <div className="mt-4 h-48 rounded-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${offices[0].coords[0]},${offices[0].coords[1]}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nepal Office Location"
                />
              </div>
            </Card>
          </motion.div>

          {/* Australia Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("contact.australiaOffice")}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-esf-primary dark:text-white mt-1" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {offices[1].address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-esf-primary dark:text-white" />
                  <a
                    href={`mailto:${offices[1].email}`}
                    className="text-esf-primary dark:text-white hover:underline"
                  >
                    {offices[1].email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-esf-primary dark:text-white" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.workingHours")}
                  </p>
                </div>

                {/* Additional spacing for equal container height */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Email us for appointments
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61582395896272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-esf-primary dark:text-white hover:text-esf-primary-hover dark:hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/esf_nepal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Embed - Australia */}
              <div className="mt-4 h-48 rounded-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${offices[1].coords[0]},${offices[1].coords[1]}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Australia Office Location"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
