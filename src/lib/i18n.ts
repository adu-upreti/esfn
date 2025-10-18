import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18n immediately

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        whatWeDo: "What We Do",
        ourWork: "Our Work",
        howWeWork: "How We Work",
        contact: "Contact Us",
      },
      hero: {
        title: "Everest Sustainability Foundation",
        subtitle:
          "Empowering municipalities and communities in Nepal to achieve climate goals through innovation, research, and climate governance.",
        learnMore: "Learn More",
        calculateFootprint: "Calculate Your Carbon Footprint",
      },
      about: {
        title: "About Us",
        mission: "Our Mission",
        vision: "Our Vision",
        description:
          "Everest Sustainability Foundation (ESF) is a non-profit, non-distributing company dedicated to advancing sustainable development through innovation, research, and climate governance.",
        missionText:
          "To empower municipalities and communities in Nepal to achieve national and international climate goals by providing technical, financial, and policy support aligned with the Paris Agreement and UNFCCC frameworks.",
        visionText:
          "A climate-resilient Nepal where local governments actively drive sustainability through innovative technologies, effective policies, and measurable environmental impact.",
        globalReach: "Global Reach",
        globalReachDesc:
          "Operating from Nepal to Australia with international partnerships",
        communityFocus: "Community Focus",
        communityFocusDesc: "Empowering local communities and municipalities",
        scienceBased: "Science-Based",
        scienceBasedDesc: "Data-driven approaches aligned with Paris Agreement",
        ourJourney: "Our Journey",
        milestones: {
          founded: "ESF Founded in Nepal",
          firstInitiative: "First Carbon Initiative Launched",
          partnership: "Partnership with UNESCO Club",
          expansion: "Expansion to Australia",
          nmaPlatform: "NMA Platform Development",
        },
      },
      whatWeDo: {
        title: "What We Do",
        carbonInitiatives: "Carbon Initiatives & Measurement",
        carbonInitiativesDesc:
          "Focused on carbon accounting, emission tracking, and validation.",
        localClimatePolicy: "Local Climate Policy Support",
        localClimatePolicyDesc:
          "Helping municipalities align with national and Paris Agreement climate targets.",
        greenTechnology: "Green Technology & Carbon Capture",
        greenTechnologyDesc:
          "Promoting carbon sequestration and sustainable technology adoption.",
        advisoryCapacity: "Advisory & Capacity Building",
        advisoryCapacityDesc:
          "Providing expert guidance, training, and technical support for climate action.",
      },
      parisAgreement: {
        title: "Paris Agreement Implementation",
        subtitle: "Supporting international climate cooperation mechanisms",
        article62: {
          title: "Cooperative Approaches (ITMOs)",
          description: [
            "Enables countries to exchange carbon reductions through Internationally Transferred Mitigation Outcomes (ITMOs)",
            "Ensures transparency and accurate accounting to prevent double counting",
            "Supports bilateral and multilateral cooperation to meet national climate targets",
            "Encourages investment, technology sharing, and capacity building between nations",
            "Promotes climate integrity through robust monitoring and reporting systems",
          ],
        },
        article64: {
          title: "Global Carbon Market Mechanism",
          description: [
            "Establishes a UN-supervised mechanism to generate verified carbon credits",
            "Allows emission-reduction projects to issue A6.4ERs (Article 6.4 Emission Reductions)",
            "Each project must align with host country authorization and national targets",
            "Overseen by a Supervisory Body ensuring high environmental standards",
            "Focused on sustainable development, transparency, and long-term impact",
          ],
        },
        article68: {
          title: "Non-Market Approaches (NMAs)",
          description: [
            "Promotes climate cooperation without carbon trading",
            "Supports technology transfer, finance, and capacity building initiatives",
            "Encourages policy coordination and shared sustainable development goals",
            "Complements market mechanisms by boosting climate ambition and resilience",
            "Aims for integrated progress in mitigation, adaptation, and poverty reduction",
          ],
        },
      },
      calculator: {
        title: "Carbon Footprint Calculator",
        subtitle: "Calculate your environmental impact",
        previous: "Previous",
        next: "Next",
        calculate: "Calculate",
        result: "Your Carbon Footprint",
        tonsPerYear: "tons CO₂/year",
        fillForm: "Fill out the form to see your results",
        startOver: "Start Over",
        food: {
          dietType: "Diet Type",
          selectDiet: "Select your diet type",
          vegan: "Vegan",
          vegetarian: "Vegetarian",
          pescatarian: "Pescatarian",
          omnivore: "Omnivore",
          meatFrequency: "Meat Consumption",
          selectMeat: "How often do you eat meat?",
          never: "Never",
          rarely: "Rarely",
          weekly: "Weekly",
          daily: "Daily",
          localFood: "Local Food",
          selectLocal: "How often do you buy local food?",
          always: "Always",
          sometimes: "Sometimes",
        },
        transport: {
          carOwnership: "Car Ownership",
          selectCar: "What type of car do you own?",
          noCar: "No car",
          electric: "Electric car",
          hybrid: "Hybrid car",
          petrol: "Petrol car",
          carMileage: "Annual Mileage (km)",
          publicTransport: "Public Transport Usage",
          selectPublic: "How often do you use public transport?",
          daily: "Daily",
          weekly: "Weekly",
          monthly: "Monthly",
          rarely: "Rarely",
          flights: "Flights per Year",
        },
        home: {
          homeSize: "Home Size",
          selectSize: "Select your home size",
          small: "Small (1-2 rooms)",
          medium: "Medium (3-4 rooms)",
          large: "Large (5+ rooms)",
          heatingType: "Heating Type",
          selectHeating: "What type of heating do you use?",
          renewable: "Renewable energy",
          gas: "Natural gas",
          electric: "Electric heating",
          oil: "Oil heating",
          electricitySource: "Electricity Source",
          selectElectricity: "What is your electricity source?",
          mixed: "Mixed (renewable + fossil)",
          fossil: "Fossil fuels",
          energyEfficiency: "Energy Efficiency",
          selectEfficiency: "How energy efficient is your home?",
          excellent: "Excellent",
          good: "Good",
          average: "Average",
          poor: "Poor",
        },
        shopping: {
          clothingFrequency: "Clothing Purchases",
          selectClothing: "How often do you buy new clothes?",
          rarely: "Rarely",
          monthly: "Monthly",
          weekly: "Weekly",
          electronicsFrequency: "Electronics Purchases",
          selectElectronics: "How often do you buy electronics?",
          yearly: "Yearly",
          packagingConscious: "Packaging Awareness",
          selectPackaging: "How conscious are you about packaging?",
          always: "Always",
          sometimes: "Sometimes",
        },
      },
      didYouKnow: {
        title: "Did You Know?",
        subtitle: "Amazing facts about our planet and climate",
        moreFacts: "More Facts",
        previous: "Previous",
        next: "Next",
        play: "Play",
        pause: "Pause",
        facts: {
          carbonFootprint: {
            title: "Global Carbon Footprint",
            content:
              "The average global carbon footprint is about 4.8 tons per person per year, but varies dramatically by country - from 0.1 tons in some African nations to over 15 tons in oil-rich countries.",
          },
          renewableEnergy: {
            title: "Renewable Energy Growth",
            content:
              "Renewable energy sources now account for over 30% of global electricity generation, with solar and wind power becoming the cheapest forms of new electricity in most countries.",
          },
          deforestation: {
            title: "Forest Loss Impact",
            content:
              "Deforestation accounts for about 10% of global CO₂ emissions. Forests absorb 2.6 billion tons of CO₂ annually, but we're losing 10 million hectares of forest each year.",
          },
          oceanAcidification: {
            title: "Ocean Acidification",
            content:
              "Oceans have absorbed about 30% of human-produced CO₂, causing pH levels to drop by 0.1 units since pre-industrial times - a 30% increase in acidity.",
          },
          recycling: {
            title: "Recycling Impact",
            content:
              "Recycling one aluminum can saves enough energy to power a TV for 3 hours. If everyone recycled just 10% more, we could save 1.3 billion tons of CO₂ annually.",
          },
          transport: {
            title: "Transport Emissions",
            content:
              "Transportation accounts for 24% of global CO₂ emissions. A single flight from New York to London produces as much CO₂ as driving a car for 6 months.",
          },
          food: {
            title: "Food System Impact",
            content:
              "The global food system accounts for 26% of greenhouse gas emissions. Plant-based diets can reduce food-related emissions by up to 73%.",
          },
          climateChange: {
            title: "Climate Change Speed",
            content:
              "The last decade was the warmest on record, with global temperatures rising 0.2°C per decade. We need to limit warming to 1.5°C to avoid catastrophic impacts.",
          },
          plasticPollution: {
            title: "Plastic Crisis",
            content:
              "Every minute, one million plastic bottles are bought worldwide. By 2050, there could be more plastic than fish in the ocean by weight.",
          },
          energyEfficiency: {
            title: "Energy Efficiency",
            content:
              "LED light bulbs use 75% less energy than incandescent bulbs and last 25 times longer. Switching to LEDs could save billions in energy costs globally.",
          },
          waterConservation: {
            title: "Water Conservation",
            content:
              "A single leaky faucet can waste over 3,000 gallons of water per year. Fixing leaks is one of the easiest ways to conserve water and reduce utility bills.",
          },
          sustainableFashion: {
            title: "Sustainable Fashion",
            content:
              "The fashion industry produces 10% of global CO₂ emissions. Buying one less item per year could reduce your fashion footprint by 20%.",
          },
          renewableStorage: {
            title: "Energy Storage Revolution",
            content:
              "Battery storage costs have dropped 90% since 2010, making renewable energy more reliable and accessible than ever before.",
          },
          carbonCapture: {
            title: "Carbon Capture Technology",
            content:
              "Direct air capture technology can remove CO₂ from the atmosphere, but it currently costs $100-600 per ton. Costs are expected to drop significantly.",
          },
          biodiversity: {
            title: "Biodiversity Crisis",
            content:
              "We're losing species at 1,000 times the natural rate. Protecting biodiversity is crucial for climate resilience and ecosystem stability.",
          },
          greenBuildings: {
            title: "Green Buildings",
            content:
              "Green buildings use 25% less energy and 11% less water than conventional buildings, while providing better air quality and natural lighting.",
          },
          electricVehicles: {
            title: "Electric Vehicle Revolution",
            content:
              "EVs produce 50% fewer emissions over their lifetime compared to gas cars, even accounting for battery production and electricity generation.",
          },
          foodWaste: {
            title: "Food Waste Impact",
            content:
              "One-third of all food produced globally is wasted, contributing to 8% of global greenhouse gas emissions. Reducing waste could feed 2 billion people.",
          },
          renewableJobs: {
            title: "Green Jobs Boom",
            content:
              "Renewable energy employs 12 million people worldwide, with solar and wind jobs growing faster than any other energy sector.",
          },
          oceanPlastic: {
            title: "Ocean Plastic Crisis",
            content:
              "Every year, 8 million tons of plastic enter our oceans. By 2050, plastic could outweigh all fish in the sea if current trends continue.",
          },
          carbonNeutral: {
            title: "Carbon Neutral Goals",
            content:
              "Over 100 countries have committed to net-zero emissions by 2050. Achieving this requires reducing emissions by 7.6% annually.",
          },
          sustainableTransport: {
            title: "Sustainable Transport",
            content:
              "Walking or cycling for short trips can reduce transport emissions by 75%. Just 10 minutes of cycling saves 1kg of CO₂.",
          },
          renewableWater: {
            title: "Water-Energy Nexus",
            content:
              "Thermal power plants use 40% of freshwater withdrawals globally. Renewable energy uses 100 times less water than fossil fuels.",
          },
          climateFinance: {
            title: "Climate Finance",
            content:
              "Global climate finance reached $632 billion in 2020, but we need $4-6 trillion annually to meet climate goals by 2030.",
          },
          sustainableCities: {
            title: "Sustainable Cities",
            content:
              "Cities consume 75% of global energy and produce 80% of CO₂ emissions. Smart city solutions could reduce emissions by 30%.",
          },
          renewableStorage2: {
            title: "Grid-Scale Storage",
            content:
              "Grid-scale battery storage capacity grew 67% in 2021. Storage enables renewable energy to provide 24/7 clean power.",
          },
          carbonPricing: {
            title: "Carbon Pricing",
            content:
              "Carbon pricing covers 20% of global emissions. A $50/ton carbon price could reduce emissions by 20% in covered sectors.",
          },
          sustainableAgriculture: {
            title: "Sustainable Agriculture",
            content:
              "Regenerative agriculture can sequester 1-3 tons of CO₂ per hectare annually while improving soil health and crop yields.",
          },
          renewableHeat: {
            title: "Renewable Heating",
            content:
              "Heat pumps are 3-4 times more efficient than gas boilers. Switching to heat pumps could cut heating emissions by 60%.",
          },
          circularEconomy: {
            title: "Circular Economy",
            content:
              "A circular economy could reduce global CO₂ emissions by 39% by 2030 while creating millions of new jobs and reducing waste.",
          },
          renewableHydrogen: {
            title: "Green Hydrogen",
            content:
              "Green hydrogen costs have dropped 60% since 2010. It could provide 20% of global energy needs by 2050.",
          },
          climateAdaptation: {
            title: "Climate Adaptation",
            content:
              "Every $1 invested in climate adaptation saves $4-7 in future damages. Early action is crucial for climate resilience.",
          },
          renewableMicrogrids: {
            title: "Microgrid Revolution",
            content:
              "Microgrids powered by renewables provide reliable electricity to 1.2 billion people without grid access, improving lives and reducing emissions.",
          },
        },
        cta: {
          title: "Ready to Make a Difference?",
          description:
            "Calculate your carbon footprint and discover how you can reduce your environmental impact.",
          button: "Calculate My Footprint",
        },
      },
      infographics: {
        title: "Environmental Data Insights",
        subtitle: "Powered by Our World in Data",
        charts: {
          co2Trends: {
            title: "Global CO₂ Trends",
            summary:
              "Global CO₂ emissions have increased by 50% since 1990, with fossil fuels being the primary contributor.",
          },
          renewableEnergy: {
            title: "Renewable Energy Growth",
            summary:
              "Renewable energy capacity has grown by 300% in the last decade, offering hope for a sustainable future.",
          },
          forestCover: {
            title: "Forest Cover Decline",
            summary:
              "The world has lost 420 million hectares of forest since 1990, threatening biodiversity and climate stability.",
          },
        },
      },
      footer: {
        about:
          "Empowering global sustainability from the Himalayas to the world through innovative climate solutions.",
        quickLinks: "Quick Links",
        resources: "Resources",
        contact: "Contact",
        allRightsReserved: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      ourWork: {
        title: "Our Work",
        subtitle: "Making a difference through sustainable initiatives",
        seeMore: "See More",
        projects: {
          bagmati: {
            title: "Bagmati River Carbon Monitoring",
            year: "2023",
            location: "Kathmandu Valley, Nepal",
            partners: "Bagmati UNESCO Club",
            description:
              "Comprehensive carbon monitoring and reduction initiative along the Bagmati River basin, involving 15 municipalities.",
            impact: "25% reduction in local emissions",
          },
          mountain: {
            title: "Mountain Community Climate Resilience",
            year: "2024",
            location: "Himalayan Region",
            partners: "Local Municipalities",
            description:
              "Building climate resilience in mountain communities through sustainable practices and traditional knowledge integration.",
            impact: "5,000+ families supported",
          },
          urban: {
            title: "Urban NDC Implementation",
            year: "2024",
            location: "Lalitpur, Nepal",
            partners: "Government of Nepal",
            description:
              "Supporting municipalities in implementing Nationally Determined Contributions at the local level.",
            impact: "Policy framework adopted",
          },
        },
        impact: "Impact:",
      },
      contact: {
        title: "Contact Us",
        inquiryForm: "General Inquiry",
        quotationForm: "Request Quotation",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Submit",
        companyName: "Company Name",
        companyNamePlaceholder: "Enter your company name",
        emailPlaceholder: "Enter your email address",
        inquirySubjectPlaceholder: "Enter the subject of your inquiry",
        inquiryMessagePlaceholder: "Enter your inquiry details or questions",
        quotationSubjectPlaceholder:
          "Enter the subject of your quotation request",
        quotationMessagePlaceholder:
          "Enter details about your quotation requirements",
        requestQuotation: "Request Quotation",
        nepalOffice: "Nepal Office",
        australiaOffice: "Australia Office",
        getInTouch: "Get in touch with our team",
        workingHours: "9:00 AM - 5:00 PM (local)",
      },
      howWeWork: {
        hero: {
          title: "How We Work",
          subtitle:
            "Our systematic approach to sustainable development and climate action",
        },
        sections: {
          structure: "Structure",
          process: "Process",
          compliance: "Compliance",
          programs: "Programs",
        },
        organizationStructure: {
          title: "Organizational Structure",
          subtitle:
            "A hierarchical framework ensuring effective governance and operational excellence",
        },
        projectCycle: {
          title: "ESF Project Cycle",
          subtitle:
            "Key steps in building sustainable practices through systematic implementation",
        },
        compliance: {
          title: "Operational Modalities & Compliances",
          subtitle:
            "Comprehensive policies ensuring integrity, transparency, and sustainable operations",
        },
        thematicPrograms: {
          title: "Thematic Programs",
          subtitle:
            "Strategic focus areas driving sustainable development and climate action",
        },
      },
    },
  },
  np: {
    translation: {
      nav: {
        home: "होम",
        about: "हाम्रो बारेमा",
        whatWeDo: "हामी के गर्छौं",
        ourWork: "हाम्रो काम",
        howWeWork: "हामी कसरी काम गर्छौं",
        contact: "सम्पर्क गर्नुहोस्",
      },
      about: {
        title: "हाम्रो बारेमा",
        mission: "हाम्रो मिशन",
        vision: "हाम्रो दृष्टिकोण",
        description:
          "UNESCO, UNDP, र WWF ले प्रेरित कार्बन कमी, जलवायु जागरूकता, र दिगो पहलहरूको प्रवर्द्धन गर्ने अन्तर्राष्ट्रिय प्रतिष्ठान",
        missionText:
          "स्थानीय ज्ञान र वैश्विक जलवायु लक्ष्यहरू दुवैलाई सम्मान गर्ने नवीन नीति समर्थन, मापन ढाँचाहरू, र दिगो विकास अभ्यासहरू मार्फत समुदाय र राष्ट्रहरूलाई कार्बन तटस्थता प्राप्त गर्न सशक्त बनाउन।",
        visionText:
          "एक विश्व जहाँ दिगोपन केवल लक्ष्य होइन तर जीवित वास्तविकता हो, जहाँ हिमालयदेखि तटीय क्षेत्रहरूसम्मका हरेक समुदाय विज्ञानद्वारा निर्देशित र सामूहिक कार्यद्वारा शक्ति प्राप्त गर्दै प्रकृतिसँग सामंजस्यमा फस्टाउँछ।",
        globalReach: "वैश्विक पहुँच",
        globalReachDesc:
          "अन्तर्राष्ट्रिय साझेदारीहरूसहित नेपालदेखि अस्ट्रेलियासम्म संचालन",
        communityFocus: "समुदाय फोकस",
        communityFocusDesc: "स्थानीय समुदाय र नगरपालिकाहरूलाई सशक्त बनाउन",
        scienceBased: "विज्ञान-आधारित",
        scienceBasedDesc: "पेरिस सम्झौतासँग जोडिएको डेटा-चालित दृष्टिकोणहरू",
        ourJourney: "हाम्रो यात्रा",
        milestones: {
          founded: "नेपालमा ESF स्थापना",
          firstInitiative: "पहिलो कार्बन पहल सुरु",
          partnership: "UNESCO क्लबसँग साझेदारी",
          expansion: "अस्ट्रेलियामा विस्तार",
          nmaPlatform: "NMA प्लेटफर्म विकास",
        },
      },
      whatWeDo: {
        title: "हामी के गर्छौं",
        policy: "नगरपालिकाहरूका लागि नीति समर्थन",
        policyDesc: "ESF ले स्थानीय जलवायु नीतिहरू विकास गर्न मद्दत गर्छ।",
        carbon: "कार्बन पहलहरू र मापन",
        carbonDesc: "कार्बन लेखा र उत्सर्जन व्यवस्थापनमा केन्द्रित।",
        ndc: "NDC समर्थन",
        ndcDesc: "राष्ट्रिय रूपमा निर्धारित योगदानहरूसहित राष्ट्रहरूलाई सहयोग।",
        nma: "NMA प्लेटफर्म",
        nmaDesc:
          "पेरिस सम्झौताको अनुच्छेद ६.८ अनुसार गैर-बजार दृष्टिकोणहरूको प्रवर्द्धन।",
      },
      calculator: {
        title: "कार्बन उत्सर्जन कैलकुलेटर",
        transport: "यातायात (किमी/हप्ता)",
        energy: "ऊर्जा प्रयोग (kWh/महिना)",
        diet: "खानेको प्रकार",
        waste: "फोहोर आदतहरू",
        calculate: "गणना गर्नुहोस्",
        result: "तपाईंको अनुमानित वार्षिक CO₂ फुटप्रिन्ट",
        tips: "मेरो उत्सर्जन कम गर्ने सुझावहरू",
        subtitle: "तपाईंको वातावरणीय प्रभाव पत्ता लगाउनुहोस्",
        fillForm: "तपाईंको कार्बन फुटप्रिन्ट गणना गर्न फारम भर्नुहोस्",
        tonsPerYear: "टन/वर्ष",
        selectDiet: "खानेको प्रकार छान्नुहोस्",
        selectWaste: "फोहोर आदतहरू छान्नुहोस्",
        dietOptions: {
          vegan: "वेगन",
          vegetarian: "शाकाहारी",
          omnivore: "सर्वाहारी",
        },
        wasteOptions: {
          recycle: "नियमित रूपमा रिसाइकल गर्नुहोस्",
          some: "कहिलेकाहीँ रिसाइकल गर्नुहोस्",
          never: "कम रिसाइकल गर्नुहोस्",
        },
        tipsAlert:
          "सुझावहरू: सार्वजनिक यातायात प्रयोग गर्नुहोस्, ऊर्जा खपत कम गर्नुहोस्, वनस्पति आधारित खाना खानुहोस्, र नियमित रूपमा रिसाइकल गर्नुहोस्!",
      },
      infographics: {
        title: "वातावरणीय डेटा अन्तर्दृष्टिहरू",
        subtitle: "हाम्रो विश्व डेटामा आधारित",
        charts: {
          co2Trends: {
            title: "वैश्विक CO₂ प्रवृत्तिहरू",
            summary:
              "१९९० देखि वैश्विक CO₂ उत्सर्जन ५०% ले बढेको छ, जसको मुख्य कारण जीवाश्म इन्धन हो।",
          },
          renewableEnergy: {
            title: "नवीकरणीय ऊर्जा वृद्धि",
            summary:
              "पछिल्लो दशकमा नवीकरणीय ऊर्जा क्षमता ३००% ले बढेको छ, जसले दिगो भविष्यको लागि आशा दिन्छ।",
          },
          forestCover: {
            title: "वन कभर घट्ने",
            summary:
              "१९९० देखि विश्वले ४२ करोड हेक्टर वन गुमाएको छ, जसले जैविक विविधता र जलवायु स्थिरतालाई खतरा पुर्याएको छ।",
          },
        },
      },
      footer: {
        about:
          "नवीन जलवायु समाधानहरू मार्फत हिमालयदेखि विश्वसम्म वैश्विक दिगोपनलाई सशक्त बनाउँदै।",
        quickLinks: "छिटो लिङ्कहरू",
        resources: "स्रोतहरू",
        contact: "सम्पर्क",
        allRightsReserved: "सबै अधिकार सुरक्षित।",
        privacyPolicy: "गोपनीयता नीति",
        termsOfService: "सेवा सर्तहरू",
        cookiePolicy: "कुकी नीति",
      },
      parisAgreement: {
        title: "पेरिस सम्झौता अनुच्छेद ६",
        article62:
          "अन्तर्राष्ट्रिय रूपमा स्थानान्तरित शमन परिणामहरू समावेश गर्ने सहकारी दृष्टिकोणहरू",
        article64: "ग्रीनहाउस ग्यास उत्सर्जनको शमनमा योगदान गर्ने तंत्र",
        article68: "दिगो विकासको लागि गैर-बजार दृष्टिकोणहरू",
      },
      ourWork: {
        title: "हाम्रो काम",
        subtitle: "दिगो पहलहरू मार्फत फरक ल्याउँदै",
        seeMore: "थप हेर्नुहोस्",
        projects: {
          bagmati: {
            title: "बागमती नदी कार्बन मनिटरिङ",
            year: "२०२३",
            location: "काठमाडौं उपत्यका, नेपाल",
            partners: "बागमती UNESCO क्लब",
            description:
              "१५ नगरपालिकाहरू समावेश गर्दै बागमती नदी बेसिनमा व्यापक कार्बन मनिटरिङ र कमी पहल।",
            impact: "स्थानीय उत्सर्जनमा २५% कमी",
          },
          mountain: {
            title: "पहाडी समुदाय जलवायु लचिलापन",
            year: "२०२४",
            location: "हिमाली क्षेत्र",
            partners: "स्थानीय नगरपालिकाहरू",
            description:
              "दिगो अभ्यास र परम्परागत ज्ञान एकीकरण मार्फत पहाडी समुदायहरूमा जलवायु लचिलापन निर्माण।",
            impact: "५,०००+ परिवारहरूलाई समर्थन",
          },
          urban: {
            title: "शहरी NDC कार्यान्वयन",
            year: "२०२४",
            location: "ललितपुर, नेपाल",
            partners: "नेपाल सरकार",
            description:
              "स्थानीय स्तरमा राष्ट्रिय रूपमा निर्धारित योगदानहरू कार्यान्वयन गर्न नगरपालिकाहरूलाई समर्थन।",
            impact: "नीति ढाँचा अपनाइयो",
          },
        },
        impact: "प्रभाव:",
      },
      contact: {
        title: "सम्पर्क गर्नुहोस्",
        inquiryForm: "सामान्य जिज्ञासा",
        quotationForm: "कोटेशन अनुरोध",
        name: "नाम",
        email: "इमेल",
        subject: "विषय",
        message: "सन्देश",
        submit: "पेश गर्नुहोस्",
        companyName: "कम्पनीको नाम",
        companyNamePlaceholder: "आफ्नो कम्पनीको नाम प्रविष्ट गर्नुहोस्",
        emailPlaceholder: "आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस्",
        inquirySubjectPlaceholder: "आफ्नो जिज्ञासाको विषय प्रविष्ट गर्नुहोस्",
        inquiryMessagePlaceholder:
          "आफ्नो जिज्ञासा विवरण वा प्रश्नहरू प्रविष्ट गर्नुहोस्",
        quotationSubjectPlaceholder:
          "आफ्नो कोटेशन अनुरोधको विषय प्रविष्ट गर्नुहोस्",
        quotationMessagePlaceholder:
          "आफ्नो कोटेशन आवश्यकताको विवरण प्रविष्ट गर्नुहोस्",
        requestQuotation: "कोटेशन अनुरोध गर्नुहोस्",
        nepalOffice: "नेपाल कार्यालय",
        australiaOffice: "अस्ट्रेलिया कार्यालय",
        getInTouch: "हाम्रो टोलीसँग सम्पर्क गर्नुहोस्",
        workingHours: "९:०० बिहान - ५:०० बेलुका (स्थानीय)",
      },
      howWeWork: {
        hero: {
          title: "हामी कसरी काम गर्छौं",
          subtitle:
            "दिगो विकास र जलवायु कार्यको लागि हाम्रो व्यवस्थित दृष्टिकोण",
        },
        sections: {
          structure: "संरचना",
          process: "प्रक्रिया",
          compliance: "अनुपालन",
          programs: "कार्यक्रमहरू",
        },
        organizationStructure: {
          title: "संगठनात्मक संरचना",
          subtitle:
            "प्रभावकारी शासन र परिचालन उत्कृष्टता सुनिश्चित गर्ने पदानुक्रमित ढाँचा",
        },
        projectCycle: {
          title: "ESF परियोजना चक्र",
          subtitle:
            "व्यवस्थित कार्यान्वयन मार्फत दिगो अभ्यासहरू निर्माण गर्ने मुख्य चरणहरू",
        },
        compliance: {
          title: "परिचालन मोडालिटी र अनुपालन",
          subtitle:
            "अखण्डता, पारदर्शिता र दिगो परिचालन सुनिश्चित गर्ने व्यापक नीतिहरू",
        },
        thematicPrograms: {
          title: "विषयगत कार्यक्रमहरू",
          subtitle:
            "दिगो विकास र जलवायु कार्यलाई प्रेरित गर्ने रणनीतिक फोकस क्षेत्रहरू",
        },
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        whatWeDo: "Ce que nous faisons",
        ourWork: "Notre travail",
        howWeWork: "Comment nous travaillons",
        contact: "Contact",
      },
      about: {
        title: "À propos",
        mission: "Notre mission",
        vision: "Notre vision",
        description:
          "Une fondation internationale promouvant la réduction du carbone, la sensibilisation climatique et les initiatives de durabilité inspirées par l'UNESCO, le PNUD et le WWF",
        missionText:
          "Autonomiser les communautés et les nations dans l'atteinte de la neutralité carbone grâce à un soutien politique innovant, des cadres de mesure et des pratiques de développement durable qui honorent à la fois la sagesse locale et les objectifs climatiques mondiaux.",
        visionText:
          "Un monde où la durabilité n'est pas seulement un objectif mais une réalité vécue, où chaque communauté de l'Himalaya aux régions côtières prospère en harmonie avec la nature, guidée par la science et alimentée par l'action collective.",
        globalReach: "Portée mondiale",
        globalReachDesc:
          "Opérant du Népal à l'Australie avec des partenariats internationaux",
        communityFocus: "Focus communautaire",
        communityFocusDesc:
          "Autonomiser les communautés locales et les municipalités",
        scienceBased: "Basé sur la science",
        scienceBasedDesc:
          "Approches basées sur les données alignées avec l'Accord de Paris",
        ourJourney: "Notre parcours",
        milestones: {
          founded: "ESF fondé au Népal",
          firstInitiative: "Première initiative carbone lancée",
          partnership: "Partenariat avec le Club UNESCO",
          expansion: "Expansion en Australie",
          nmaPlatform: "Développement de la plateforme NMA",
        },
      },
      whatWeDo: {
        title: "Ce que nous faisons",
        policy: "Soutien politique pour les municipalités",
        policyDesc: "ESF aide à développer les politiques climatiques locales.",
        carbon: "Initiatives carbone et mesure",
        carbonDesc:
          "Axé sur la comptabilité carbone et la gestion des émissions.",
        ndc: "Soutien NDC",
        ndcDesc:
          "Aider les nations avec leurs Contributions Déterminées au Niveau National.",
        nma: "Plateforme NMA",
        nmaDesc:
          "Promouvoir les approches non marchandes selon l'Article 6.8 de l'Accord de Paris.",
      },
      calculator: {
        title: "Calculateur d'émissions de carbone",
        transport: "Transport (km/semaine)",
        energy: "Consommation d'énergie (kWh/mois)",
        diet: "Type d'alimentation",
        waste: "Habitudes de déchets",
        calculate: "Calculer",
        result: "Votre empreinte carbone annuelle estimée",
        tips: "Conseils pour réduire mes émissions",
        subtitle: "Découvrez votre impact environnemental",
        fillForm:
          "Remplissez le formulaire pour calculer votre empreinte carbone",
        tonsPerYear: "tonnes/an",
        selectDiet: "Sélectionner le type d'alimentation",
        selectWaste: "Sélectionner les habitudes de déchets",
        dietOptions: {
          vegan: "Végan",
          vegetarian: "Végétarien",
          omnivore: "Omnivore",
        },
        wasteOptions: {
          recycle: "Recycler régulièrement",
          some: "Recycler parfois",
          never: "Recycler rarement",
        },
        tipsAlert:
          "Conseils : Utilisez les transports publics, réduisez la consommation d'énergie, mangez des aliments à base de plantes et recyclez régulièrement !",
      },
      infographics: {
        title: "Insights sur les données environnementales",
        subtitle: "Alimenté par Our World in Data",
        charts: {
          co2Trends: {
            title: "Tendances mondiales du CO₂",
            summary:
              "Les émissions mondiales de CO₂ ont augmenté de 50% depuis 1990, les combustibles fossiles étant le principal contributeur.",
          },
          renewableEnergy: {
            title: "Croissance de l'énergie renouvelable",
            summary:
              "La capacité d'énergie renouvelable a augmenté de 300% au cours de la dernière décennie, offrant l'espoir d'un avenir durable.",
          },
          forestCover: {
            title: "Déclin de la couverture forestière",
            summary:
              "Le monde a perdu 420 millions d'hectares de forêt depuis 1990, menaçant la biodiversité et la stabilité climatique.",
          },
        },
      },
      footer: {
        about:
          "Autonomiser la durabilité mondiale de l'Himalaya au monde grâce à des solutions climatiques innovantes.",
        quickLinks: "Liens rapides",
        resources: "Ressources",
        contact: "Contact",
        allRightsReserved: "Tous droits réservés.",
        privacyPolicy: "Politique de confidentialité",
        termsOfService: "Conditions de service",
        cookiePolicy: "Politique des cookies",
      },
      parisAgreement: {
        title: "Accord de Paris Article 6",
        article62:
          "Approches coopératives impliquant des résultats d'atténuation transférés internationalement",
        article64:
          "Mécanisme pour contribuer à l'atténuation des émissions de gaz à effet de serre",
        article68: "Approches non marchandes pour le développement durable",
      },
      ourWork: {
        title: "Notre travail",
        subtitle: "Faire une différence grâce à des initiatives durables",
        seeMore: "Voir plus",
        projects: {
          bagmati: {
            title: "Surveillance carbone de la rivière Bagmati",
            year: "2023",
            location: "Vallée de Katmandou, Népal",
            partners: "Club UNESCO Bagmati",
            description:
              "Initiative complète de surveillance et de réduction du carbone le long du bassin de la rivière Bagmati, impliquant 15 municipalités.",
            impact: "25% de réduction des émissions locales",
          },
          mountain: {
            title: "Résilience climatique des communautés montagnardes",
            year: "2024",
            location: "Région himalayenne",
            partners: "Municipalités locales",
            description:
              "Renforcement de la résilience climatique dans les communautés montagnardes grâce à des pratiques durables et à l'intégration des connaissances traditionnelles.",
            impact: "Plus de 5 000 familles soutenues",
          },
          urban: {
            title: "Mise en œuvre urbaine des CDN",
            year: "2024",
            location: "Lalitpur, Népal",
            partners: "Gouvernement du Népal",
            description:
              "Soutenir les municipalités dans la mise en œuvre des Contributions Déterminées au Niveau National au niveau local.",
            impact: "Cadre politique adopté",
          },
        },
        impact: "Impact :",
      },
      contact: {
        title: "Contact",
        inquiryForm: "Demande Générale",
        quotationForm: "Demander un Devis",
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        submit: "Soumettre",
        companyName: "Nom de l'Entreprise",
        companyNamePlaceholder: "Entrez le nom de votre entreprise",
        emailPlaceholder: "Entrez votre adresse email",
        inquirySubjectPlaceholder: "Entrez le sujet de votre demande",
        inquiryMessagePlaceholder:
          "Entrez les détails de votre demande ou vos questions",
        quotationSubjectPlaceholder:
          "Entrez le sujet de votre demande de devis",
        quotationMessagePlaceholder:
          "Entrez les détails de vos exigences de devis",
        requestQuotation: "Demander un Devis",
        nepalOffice: "Bureau Népal",
        australiaOffice: "Bureau Australie",
        getInTouch: "Entrez en contact avec notre équipe",
        workingHours: "9h00 - 17h00 (heure locale)",
      },
      howWeWork: {
        hero: {
          title: "Comment nous travaillons",
          subtitle:
            "Notre approche systématique du développement durable et de l'action climatique",
        },
        sections: {
          structure: "Structure",
          process: "Processus",
          compliance: "Conformité",
          programs: "Programmes",
        },
        organizationStructure: {
          title: "Structure organisationnelle",
          subtitle:
            "Un cadre hiérarchique assurant une gouvernance efficace et l'excellence opérationnelle",
        },
        projectCycle: {
          title: "Cycle de projet ESF",
          subtitle:
            "Étapes clés dans la construction de pratiques durables grâce à une mise en œuvre systématique",
        },
        compliance: {
          title: "Modalités opérationnelles et conformité",
          subtitle:
            "Politiques complètes assurant l'intégrité, la transparence et des opérations durables",
        },
        thematicPrograms: {
          title: "Programmes thématiques",
          subtitle:
            "Domaines d'action stratégiques qui stimulent le développement durable et l'action climatique",
        },
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre nosotros",
        whatWeDo: "Qué hacemos",
        ourWork: "Nuestro trabajo",
        howWeWork: "Cómo trabajamos",
        contact: "Contacto",
      },
      about: {
        title: "Sobre nosotros",
        mission: "Nuestra misión",
        vision: "Nuestra visión",
        description:
          "Una fundación internacional que promueve la reducción de carbono, conciencia climática e iniciativas de sostenibilidad inspiradas por UNESCO, PNUD y WWF",
        missionText:
          "Empoderar a comunidades y naciones para lograr la neutralidad de carbono a través de apoyo político innovador, marcos de medición y prácticas de desarrollo sostenible que honran tanto la sabiduría local como los objetivos climáticos globales.",
        visionText:
          "Un mundo donde la sostenibilidad no es solo una meta sino una realidad vivida, donde cada comunidad desde el Himalaya hasta las regiones costeras prospera en armonía con la naturaleza, guiada por la ciencia y alimentada por la acción colectiva.",
        globalReach: "Alcance global",
        globalReachDesc:
          "Operando desde Nepal hasta Australia con asociaciones internacionales",
        communityFocus: "Enfoque comunitario",
        communityFocusDesc: "Empoderando comunidades locales y municipios",
        scienceBased: "Basado en ciencia",
        scienceBasedDesc:
          "Enfoques basados en datos alineados con el Acuerdo de París",
        ourJourney: "Nuestro viaje",
        milestones: {
          founded: "ESF fundado en Nepal",
          firstInitiative: "Primera iniciativa de carbono lanzada",
          partnership: "Asociación con Club UNESCO",
          expansion: "Expansión a Australia",
          nmaPlatform: "Desarrollo de plataforma NMA",
        },
      },
      whatWeDo: {
        title: "Qué hacemos",
        policy: "Apoyo político para municipios",
        policyDesc: "ESF ayuda a desarrollar políticas climáticas locales.",
        carbon: "Iniciativas de carbono y medición",
        carbonDesc:
          "Enfocado en contabilidad de carbono y gestión de emisiones.",
        ndc: "Soporte NDC",
        ndcDesc:
          "Asistiendo a naciones con sus Contribuciones Determinadas a Nivel Nacional.",
        nma: "Plataforma NMA",
        nmaDesc:
          "Promoviendo enfoques no comerciales según el Artículo 6.8 del Acuerdo de París.",
      },
      calculator: {
        title: "Calculadora de emisiones de carbono",
        transport: "Transporte (km/semana)",
        energy: "Uso de energía (kWh/mes)",
        diet: "Tipo de dieta",
        waste: "Hábitos de residuos",
        calculate: "Calcular",
        result: "Tu huella de carbono anual estimada",
        tips: "Consejos para reducir mis emisiones",
        subtitle: "Descubre tu impacto ambiental",
        fillForm: "Completa el formulario para calcular tu huella de carbono",
        tonsPerYear: "toneladas/año",
        selectDiet: "Seleccionar tipo de dieta",
        selectWaste: "Seleccionar hábitos de residuos",
        dietOptions: {
          vegan: "Vegano",
          vegetarian: "Vegetariano",
          omnivore: "Omnívoro",
        },
        wasteOptions: {
          recycle: "Reciclar regularmente",
          some: "Reciclar a veces",
          never: "Raramente reciclar",
        },
        tipsAlert:
          "Consejos: Usa transporte público, reduce el consumo de energía, come alimentos basados en plantas y recicla regularmente!",
      },
      infographics: {
        title: "Insights de datos ambientales",
        subtitle: "Alimentado por Our World in Data",
        charts: {
          co2Trends: {
            title: "Tendencias globales de CO₂",
            summary:
              "Las emisiones globales de CO₂ han aumentado un 50% desde 1990, siendo los combustibles fósiles el principal contribuyente.",
          },
          renewableEnergy: {
            title: "Crecimiento de energía renovable",
            summary:
              "La capacidad de energía renovable ha crecido un 300% en la última década, ofreciendo esperanza para un futuro sostenible.",
          },
          forestCover: {
            title: "Declive de cobertura forestal",
            summary:
              "El mundo ha perdido 420 millones de hectáreas de bosque desde 1990, amenazando la biodiversidad y la estabilidad climática.",
          },
        },
      },
      footer: {
        about:
          "Empoderando la sostenibilidad global desde el Himalaya hasta el mundo a través de soluciones climáticas innovadoras.",
        quickLinks: "Enlaces rápidos",
        resources: "Recursos",
        contact: "Contacto",
        allRightsReserved: "Todos los derechos reservados.",
        privacyPolicy: "Política de privacidad",
        termsOfService: "Términos de servicio",
        cookiePolicy: "Política de cookies",
      },
      parisAgreement: {
        title: "Acuerdo de París Artículo 6",
        article62:
          "Enfoques cooperativos que involucran resultados de mitigación transferidos internacionalmente",
        article64:
          "Mecanismo para contribuir a la mitigación de emisiones de gases de efecto invernadero",
        article68: "Enfoques no comerciales para el desarrollo sostenible",
      },
      ourWork: {
        title: "Nuestro trabajo",
        subtitle: "Haciendo la diferencia a través de iniciativas sostenibles",
        seeMore: "Ver más",
        projects: {
          bagmati: {
            title: "Monitoreo de carbono del río Bagmati",
            year: "2023",
            location: "Valle de Katmandú, Nepal",
            partners: "Club UNESCO Bagmati",
            description:
              "Iniciativa integral de monitoreo y reducción de carbono a lo largo de la cuenca del río Bagmati, involucrando 15 municipios.",
            impact: "25% de reducción en emisiones locales",
          },
          mountain: {
            title: "Resiliencia climática de comunidades montañesas",
            year: "2024",
            location: "Región del Himalaya",
            partners: "Municipios locales",
            description:
              "Construyendo resiliencia climática en comunidades montañesas a través de prácticas sostenibles e integración de conocimiento tradicional.",
            impact: "Más de 5,000 familias apoyadas",
          },
          urban: {
            title: "Implementación urbana de CDN",
            year: "2024",
            location: "Lalitpur, Nepal",
            partners: "Gobierno de Nepal",
            description:
              "Apoyando municipios en la implementación de Contribuciones Determinadas a Nivel Nacional a nivel local.",
            impact: "Marco de política adoptado",
          },
        },
        impact: "Impacto:",
      },
      contact: {
        title: "Contacto",
        inquiryForm: "Consulta General",
        quotationForm: "Solicitar Cotización",
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar",
        companyName: "Nombre de la Empresa",
        companyNamePlaceholder: "Ingrese el nombre de su empresa",
        emailPlaceholder: "Ingrese su dirección de email",
        inquirySubjectPlaceholder: "Ingrese el asunto de su consulta",
        inquiryMessagePlaceholder:
          "Ingrese los detalles de su consulta o preguntas",
        quotationSubjectPlaceholder:
          "Ingrese el asunto de su solicitud de cotización",
        quotationMessagePlaceholder:
          "Ingrese los detalles de sus requisitos de cotización",
        requestQuotation: "Solicitar Cotización",
        nepalOffice: "Oficina Nepal",
        australiaOffice: "Oficina Australia",
        getInTouch: "Ponte en contacto con nuestro equipo",
        workingHours: "9:00 AM - 5:00 PM (hora local)",
      },
      howWeWork: {
        hero: {
          title: "Cómo trabajamos",
          subtitle:
            "Nuestro enfoque sistemático para el desarrollo sostenible y la acción climática",
        },
        sections: {
          structure: "Estructura",
          process: "Proceso",
          compliance: "Cumplimiento",
          programs: "Programas",
        },
        organizationStructure: {
          title: "Estructura organizacional",
          subtitle:
            "Un marco jerárquico que asegura una gobernanza efectiva y excelencia operacional",
        },
        projectCycle: {
          title: "Ciclo de proyecto ESF",
          subtitle:
            "Pasos clave en la construcción de prácticas sostenibles a través de implementación sistemática",
        },
        compliance: {
          title: "Modalidades operacionales y cumplimiento",
          subtitle:
            "Políticas integrales que aseguran integridad, transparencia y operaciones sostenibles",
        },
        thematicPrograms: {
          title: "Programas temáticos",
          subtitle:
            "Áreas de enfoque estratégico que impulsan el desarrollo sostenible y la acción climática",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true, // Enable debug mode temporarily
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
