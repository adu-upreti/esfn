"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  Calculator,
  Leaf,
  Car,
  Home,
  Utensils,
} from "lucide-react";

export function CarbonCalculator() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    // Food
    dietType: "",
    meatFrequency: "",
    dairyFrequency: "",
    localFood: "",

    // Transport
    carOwnership: "",
    carType: "",
    carMileage: "",
    publicTransport: "",
    flights: "",

    // Home
    homeSize: "",
    homeType: "",
    heatingType: "",
    electricitySource: "",
    energyEfficiency: "",

    // Shopping
    clothingFrequency: "",
    electronicsFrequency: "",
    packagingConscious: "",
  });

  const [result, setResult] = useState<{
    total: number;
    food: number;
    transport: number;
    home: number;
    shopping: number;
  } | null>(null);

  const steps = [
    { id: "food", title: "Food", icon: Utensils },
    { id: "transport", title: "Transport", icon: Car },
    { id: "home", title: "Home", icon: Home },
    { id: "shopping", title: "Shopping", icon: Leaf },
  ];

  const calculateFootprint = async () => {
    setIsCalculating(true);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Food calculations
    let foodScore = 0;
    if (formData.dietType === "vegan") foodScore += 1;
    else if (formData.dietType === "vegetarian") foodScore += 2;
    else if (formData.dietType === "pescatarian") foodScore += 3;
    else foodScore += 4;

    if (formData.meatFrequency === "never") foodScore += 0;
    else if (formData.meatFrequency === "rarely") foodScore += 1;
    else if (formData.meatFrequency === "weekly") foodScore += 2;
    else foodScore += 3;

    if (formData.localFood === "always") foodScore -= 0.5;
    else if (formData.localFood === "sometimes") foodScore += 0.5;

    // Transport calculations
    let transportScore = 0;
    if (formData.carOwnership === "no") transportScore += 0;
    else if (formData.carOwnership === "electric") transportScore += 1;
    else if (formData.carOwnership === "hybrid") transportScore += 2;
    else transportScore += 3;

    const mileage = parseFloat(formData.carMileage || "0");
    transportScore += mileage * 0.01;

    if (formData.publicTransport === "daily") transportScore -= 1;
    else if (formData.publicTransport === "weekly") transportScore -= 0.5;

    const flights = parseFloat(formData.flights || "0");
    transportScore += flights * 2;

    // Home calculations
    let homeScore = 0;
    if (formData.homeSize === "small") homeScore += 1;
    else if (formData.homeSize === "medium") homeScore += 2;
    else homeScore += 3;

    if (formData.heatingType === "renewable") homeScore += 0.5;
    else if (formData.heatingType === "gas") homeScore += 2;
    else homeScore += 3;

    if (formData.electricitySource === "renewable") homeScore += 0.5;
    else if (formData.electricitySource === "mixed") homeScore += 2;
    else homeScore += 3;

    if (formData.energyEfficiency === "excellent") homeScore -= 1;
    else if (formData.energyEfficiency === "good") homeScore -= 0.5;

    // Shopping calculations
    let shoppingScore = 0;
    if (formData.clothingFrequency === "rarely") shoppingScore += 0.5;
    else if (formData.clothingFrequency === "monthly") shoppingScore += 1;
    else shoppingScore += 2;

    if (formData.electronicsFrequency === "rarely") shoppingScore += 0.5;
    else if (formData.electronicsFrequency === "yearly") shoppingScore += 1;
    else shoppingScore += 2;

    if (formData.packagingConscious === "always") shoppingScore -= 0.5;
    else if (formData.packagingConscious === "sometimes") shoppingScore += 0.5;

    // Convert to tons CO2 per year
    const food = Math.max(0, foodScore * 0.8);
    const transport = Math.max(0, transportScore * 1.2);
    const home = Math.max(0, homeScore * 1.5);
    const shopping = Math.max(0, shoppingScore * 0.5);
    const total = food + transport + home + shopping;

    setResult({ total, food, transport, home, shopping });
    setIsCalculating(false);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateFootprint();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const chartData = result
    ? [
        { name: "Food", value: result.food, color: "#10b981" },
        { name: "Transport", value: result.transport, color: "#3b82f6" },
        { name: "Home", value: result.home, color: "#f59e0b" },
        { name: "Shopping", value: result.shopping, color: "#ef4444" },
      ]
    : [];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Food
        return (
          <div className="space-y-6">
            <div>
              <Label>{t("calculator.food.dietType")}</Label>
              <Select
                value={formData.dietType}
                onValueChange={(value) => updateFormData("dietType", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t("calculator.food.selectDiet")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegan">
                    {t("calculator.food.vegan")}
                  </SelectItem>
                  <SelectItem value="vegetarian">
                    {t("calculator.food.vegetarian")}
                  </SelectItem>
                  <SelectItem value="pescatarian">
                    {t("calculator.food.pescatarian")}
                  </SelectItem>
                  <SelectItem value="omnivore">
                    {t("calculator.food.omnivore")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.food.meatFrequency")}</Label>
              <Select
                value={formData.meatFrequency}
                onValueChange={(value) =>
                  updateFormData("meatFrequency", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t("calculator.food.selectMeat")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="never">
                    {t("calculator.food.never")}
                  </SelectItem>
                  <SelectItem value="rarely">
                    {t("calculator.food.rarely")}
                  </SelectItem>
                  <SelectItem value="weekly">
                    {t("calculator.food.weekly")}
                  </SelectItem>
                  <SelectItem value="daily">
                    {t("calculator.food.daily")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.food.localFood")}</Label>
              <Select
                value={formData.localFood}
                onValueChange={(value) => updateFormData("localFood", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t("calculator.food.selectLocal")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">
                    {t("calculator.food.always")}
                  </SelectItem>
                  <SelectItem value="sometimes">
                    {t("calculator.food.sometimes")}
                  </SelectItem>
                  <SelectItem value="rarely">
                    {t("calculator.food.rarely")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 1: // Transport
        return (
          <div className="space-y-6">
            <div>
              <Label>{t("calculator.transport.carOwnership")}</Label>
              <Select
                value={formData.carOwnership}
                onValueChange={(value) => updateFormData("carOwnership", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.transport.selectCar")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">
                    {t("calculator.transport.noCar")}
                  </SelectItem>
                  <SelectItem value="electric">
                    {t("calculator.transport.electric")}
                  </SelectItem>
                  <SelectItem value="hybrid">
                    {t("calculator.transport.hybrid")}
                  </SelectItem>
                  <SelectItem value="petrol">
                    {t("calculator.transport.petrol")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.transport.carMileage")}</Label>
              <Input
                type="number"
                placeholder="0"
                value={formData.carMileage}
                onChange={(e) => updateFormData("carMileage", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label>{t("calculator.transport.publicTransport")}</Label>
              <Select
                value={formData.publicTransport}
                onValueChange={(value) =>
                  updateFormData("publicTransport", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.transport.selectPublic")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">
                    {t("calculator.transport.daily")}
                  </SelectItem>
                  <SelectItem value="weekly">
                    {t("calculator.transport.weekly")}
                  </SelectItem>
                  <SelectItem value="monthly">
                    {t("calculator.transport.monthly")}
                  </SelectItem>
                  <SelectItem value="rarely">
                    {t("calculator.transport.rarely")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.transport.flights")}</Label>
              <Input
                type="number"
                placeholder="0"
                value={formData.flights}
                onChange={(e) => updateFormData("flights", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        );

      case 2: // Home
        return (
          <div className="space-y-6">
            <div>
              <Label>{t("calculator.home.homeSize")}</Label>
              <Select
                value={formData.homeSize}
                onValueChange={(value) => updateFormData("homeSize", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder={t("calculator.home.selectSize")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">
                    {t("calculator.home.small")}
                  </SelectItem>
                  <SelectItem value="medium">
                    {t("calculator.home.medium")}
                  </SelectItem>
                  <SelectItem value="large">
                    {t("calculator.home.large")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.home.heatingType")}</Label>
              <Select
                value={formData.heatingType}
                onValueChange={(value) => updateFormData("heatingType", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.home.selectHeating")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="renewable">
                    {t("calculator.home.renewable")}
                  </SelectItem>
                  <SelectItem value="gas">
                    {t("calculator.home.gas")}
                  </SelectItem>
                  <SelectItem value="electric">
                    {t("calculator.home.electric")}
                  </SelectItem>
                  <SelectItem value="oil">
                    {t("calculator.home.oil")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.home.electricitySource")}</Label>
              <Select
                value={formData.electricitySource}
                onValueChange={(value) =>
                  updateFormData("electricitySource", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.home.selectElectricity")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="renewable">
                    {t("calculator.home.renewable")}
                  </SelectItem>
                  <SelectItem value="mixed">
                    {t("calculator.home.mixed")}
                  </SelectItem>
                  <SelectItem value="fossil">
                    {t("calculator.home.fossil")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.home.energyEfficiency")}</Label>
              <Select
                value={formData.energyEfficiency}
                onValueChange={(value) =>
                  updateFormData("energyEfficiency", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.home.selectEfficiency")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">
                    {t("calculator.home.excellent")}
                  </SelectItem>
                  <SelectItem value="good">
                    {t("calculator.home.good")}
                  </SelectItem>
                  <SelectItem value="average">
                    {t("calculator.home.average")}
                  </SelectItem>
                  <SelectItem value="poor">
                    {t("calculator.home.poor")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3: // Shopping
        return (
          <div className="space-y-6">
            <div>
              <Label>{t("calculator.shopping.clothingFrequency")}</Label>
              <Select
                value={formData.clothingFrequency}
                onValueChange={(value) =>
                  updateFormData("clothingFrequency", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.shopping.selectClothing")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rarely">
                    {t("calculator.shopping.rarely")}
                  </SelectItem>
                  <SelectItem value="monthly">
                    {t("calculator.shopping.monthly")}
                  </SelectItem>
                  <SelectItem value="weekly">
                    {t("calculator.shopping.weekly")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.shopping.electronicsFrequency")}</Label>
              <Select
                value={formData.electronicsFrequency}
                onValueChange={(value) =>
                  updateFormData("electronicsFrequency", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.shopping.selectElectronics")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rarely">
                    {t("calculator.shopping.rarely")}
                  </SelectItem>
                  <SelectItem value="yearly">
                    {t("calculator.shopping.yearly")}
                  </SelectItem>
                  <SelectItem value="monthly">
                    {t("calculator.shopping.monthly")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t("calculator.shopping.packagingConscious")}</Label>
              <Select
                value={formData.packagingConscious}
                onValueChange={(value) =>
                  updateFormData("packagingConscious", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue
                    placeholder={t("calculator.shopping.selectPackaging")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">
                    {t("calculator.shopping.always")}
                  </SelectItem>
                  <SelectItem value="sometimes">
                    {t("calculator.shopping.sometimes")}
                  </SelectItem>
                  <SelectItem value="rarely">
                    {t("calculator.shopping.rarely")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="calculator"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("calculator.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("calculator.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              {!result ? (
                <>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {steps[currentStep].title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {currentStep + 1} / {steps.length}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-esf-primary h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${((currentStep + 1) / steps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-6">{renderStepContent()}</div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      {t("calculator.previous")}
                    </Button>

                    <Button
                      onClick={nextStep}
                      disabled={isCalculating}
                      className="flex items-center gap-2 bg-esf-primary hover:bg-esf-primary/90 text-white"
                    >
                      {isCalculating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Calculating...
                        </>
                      ) : currentStep === steps.length - 1 ? (
                        <>
                          <Calculator className="w-4 h-4" />
                          {t("calculator.calculate")}
                        </>
                      ) : (
                        <>
                          {t("calculator.next")}
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("calculator.result")}
                  </h3>

                  <div className="text-6xl font-bold text-esf-primary dark:text-white mb-8">
                    {result.total.toFixed(1)}{" "}
                    <span className="text-3xl">
                      {t("calculator.tonsPerYear")}
                    </span>
                  </div>

                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="mt-6 space-y-2">
                    {chartData.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-semibold">
                          {item.value.toFixed(1)}t
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-6 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => {
                      setResult(null);
                      setCurrentStep(0);
                      setFormData({
                        dietType: "",
                        meatFrequency: "",
                        dairyFrequency: "",
                        localFood: "",
                        carOwnership: "",
                        carType: "",
                        carMileage: "",
                        publicTransport: "",
                        flights: "",
                        homeSize: "",
                        homeType: "",
                        heatingType: "",
                        electricitySource: "",
                        energyEfficiency: "",
                        clothingFrequency: "",
                        electronicsFrequency: "",
                        packagingConscious: "",
                      });
                    }}
                  >
                    {t("calculator.startOver")}
                  </Button>
                </motion.div>
              )}
            </Card>
          </div>

          {/* Sidebar with Tips */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-esf-primary dark:text-white" />
                Quick Tips
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-esf-primary-light dark:bg-esf-primary-dark rounded-lg border border-esf-primary/20 dark:border-esf-primary/40">
                  <h4 className="font-medium text-esf-primary dark:text-white mb-2 flex items-center gap-2">
                    🌱 Food
                  </h4>
                  <p className="text-sm text-esf-primary/80 dark:text-gray-300">
                    Plant-based diets can reduce your food carbon footprint by
                    up to 73%.
                  </p>
                </div>

                <div className="p-4 bg-esf-primary-light dark:bg-esf-primary-dark rounded-lg border border-esf-primary/20 dark:border-esf-primary/40">
                  <h4 className="font-medium text-esf-primary dark:text-white mb-2 flex items-center gap-2">
                    🚗 Transport
                  </h4>
                  <p className="text-sm text-esf-primary/80 dark:text-gray-300">
                    Walking or cycling for short trips reduces transport
                    emissions by 75%.
                  </p>
                </div>

                <div className="p-4 bg-esf-primary-light dark:bg-esf-primary-dark rounded-lg border border-esf-primary/20 dark:border-esf-primary/40">
                  <h4 className="font-medium text-esf-primary dark:text-white mb-2 flex items-center gap-2">
                    🏠 Home
                  </h4>
                  <p className="text-sm text-esf-primary/80 dark:text-gray-300">
                    LED bulbs use 75% less energy and last 25 times longer than
                    incandescent bulbs.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-esf-primary text-white rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  💡 Did You Know?
                </h4>
                <p className="text-sm opacity-90">
                  The average global carbon footprint is 4.8 tons per person per
                  year.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
