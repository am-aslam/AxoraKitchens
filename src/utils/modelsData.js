
import kitchen1 from '@/assets/kitchen_1.png';
import kitchen2 from '@/assets/kitchen_2.png';
import marble from '@/assets/marble.png';
import bath from '@/assets/bath.png';

export const modelsData = {
    // Kitchens
    // Kitchens
    'egger': {
        type: "kitchens",
        image: kitchen1,
        images: [kitchen1, kitchen2, kitchen1],
        price: 'Premium Range',
        en: {
            title: "EGGER German Kitchens",
            category: "Kitchen System",
            desc: "Premium German engineering meets modern aesthetics. EGGER kitchens are renowned for their durability, antibacterial surfaces, and authentic wood-like finishes that bring warmth and elegance to your home.",
            features: ["Antibacterial Surface Property (ISO 22196)", "Authentic Look & Feel", "High Scratch Resistance", "Sustainable Materials", "Matching Edge Banding"],
            origin: "Germany",
            finish: "Matte & Wood Texture"
        },
        ar: {
            title: "مطابخ إيجر الألمانية",
            category: "نظام المطبخ",
            desc: "هندسة ألمانية فاخرة تلتقي بالجماليات الحديثة. تشتهر مطابخ إيجر بمتانتها، وأسطحها المضادة للبكتيريا، وتشطيباتها الخشبية الأصيلة التي تضفي الدفء والأناقة على منزلك.",
            features: ["خاصية سطح مضاد للبكتيريا (ISO 22196)", "مظهر وملمس أصلي", "مقاومة عالية للخدش", "مواد مستدامة", "حواف متطابقة"],
            origin: "ألمانيا",
            finish: "مطفأ وملمس خشبي"
        }
    },
    'glossy': {
        type: "kitchens",
        image: kitchen2,
        images: [kitchen2, kitchen1, kitchen2],
        price: 'Mid-Premium Range',
        en: {
            title: "High Glossy Kitchens",
            category: "Kitchen System",
            desc: "Transform your kitchen into a visual masterpiece with our High Glossy range. Featuring mirror-like reflective surfaces that enhance space and light, these kitchens are the epitome of modern luxury.",
            features: ["Mirror-like Reflection", "UV Resistant", "Water & Moisture Proof", "Easy to Clean", "Vibrant Color Options"],
            origin: "Turkey",
            finish: "High Gloss Acrylic / PU"
        },
        ar: {
            title: "مطابخ هاي جلوس (عالية اللمعان)",
            category: "نظام المطبخ",
            desc: "حول مطبخك إلى تحفة بصرية مع مجموعة هاي جلوس. تتميز بأسطح عاكسة كالمرآة تعزز المساحة والضوء، هذه المطابخ هي مثال للفخامة العصرية.",
            features: ["انعكاس يشبه المرآة", "مقاوم للأشعة فوق البنفسجية", "مقاوم للماء والرطوبة", "سهل التنظيف", "خيارات ألوان حيوية"],
            origin: "تركيا",
            finish: "أكريليك عالي اللمعان / PU"
        }
    },
    'multiwood': {
        type: "kitchens",
        image: kitchen1,
        images: [kitchen1, kitchen2, kitchen1],
        price: 'Standard Range',
        en: {
            title: "Multiwood Kitchens",
            category: "Kitchen System",
            desc: "The ultimate solution for durability and longevity. Multiwood kitchens are 100% waterproof and termite-proof, making them ideal for heavy-duty cooking environments and humid climates.",
            features: ["100% Waterproof", "Termite & Borer Proof", "Life-long Durability", "Flame Retardant", "Eco-friendly"],
            origin: "China/India",
            finish: "Painted / Laminate"
        },
        ar: {
            title: "مطابخ مالتي وود",
            category: "نظام المطبخ",
            desc: "الحل الأمثل للمتانة وطول العمر. مطابخ مالتي وود مقاومة للماء بنسبة 100% ومقاومة للنمل الأبيض، مما يجعلها مثالية لبيئات الطبخ الشاق والمناخات الرطبة.",
            features: ["مقاوم للماء 100%", "مقاوم للنمل الأبيض والحفار", "متانة مدى الحياة", "مقاوم للهب", "صديق للبيئة"],
            origin: "الصين/الهند",
            finish: "مدهون / لامينيت"
        }
    },
    'pvc': {
        type: "kitchens",
        image: kitchen2,
        images: [kitchen2, kitchen1, kitchen2],
        price: 'Economy Range',
        en: {
            title: "PVC Classic Kitchens",
            category: "Kitchen System",
            desc: "Elegant, budget-friendly, and versatile. PVC kitchens offer a wide range of designs from classic routed doors to modern flat panels, providing excellent value without compromising on style.",
            features: ["Cost Effective", "Membrane Presed Finish", "Seamless Edges", "Variety of Designs", "Moisture Resistant"],
            origin: "Spain",
            finish: "PVC Membrane"
        },
        ar: {
            title: "مطابخ PVC الكلاسيكية",
            category: "نظام المطبخ",
            desc: "أنيقة، اقتصادية، ومتعددة الاستخدامات. تقدم مطابخ PVC مجموعة واسعة من التصاميم من الأبواب الكلاسيكية المحفورة إلى الألواح المسطحة الحديثة.",
            features: ["اقتصادي", "تشطيب مكبوس", "حواف غير ملحومة", "تنوع في التصاميم", "مقاوم للرطوبة"],
            origin: "إسبانيا",
            finish: "غشاء PVC"
        }
    },
    'aluminium': {
        type: "kitchens",
        image: kitchen1,
        images: [kitchen1, kitchen2, kitchen1],
        price: 'Premium Range',
        en: {
            title: "Aluminium Modular Kitchens",
            category: "Kitchen System",
            desc: "Sleek, industrial, and indestructible. Our Aluminium kitchens are designed for those who demand absolute perfection in hygiene and structural integrity. Fire-proof and rust-proof.",
            features: ["Fire Resistant", "Rust & Corrosion Proof", "Zero Maintenance", "Modern Industrial Look", "Recyclable"],
            origin: "Global",
            finish: "Powder Coated / Anodized"
        },
        ar: {
            title: "مطابخ ألمنيوم مودرن",
            category: "نظام المطبخ",
            desc: "أنيقة، صناعية، وغير قابلة للتدمير. صممت مطابخ الألمنيوم لدينا لأولئك الذين يطلبون الكمال المطلق في النظافة والسلامة الهيكلية. مقاومة للحريق والصدأ.",
            features: ["مقاوم للحريق", "مقاوم للصدأ والتآكل", "بدون صيانة", "مظهر صناعي حديث", "قابل لإعادة التدوير"],
            origin: "عالمي",
            finish: "مطلية بالبودرة / مؤكسدة"
        }
    },
    // Countertops
    'korean': {
        type: "countertops",
        image: marble,
        images: [marble, marble, marble],
        price: 'Premium Range',
        en: {
            title: "Korean Solid Surface",
            category: "Countertop",
            desc: "The pinnacle of hygiene and seamless design. Korean solid surfaces allows for invisible joints and integrated sinks, creating a continuous flow in your kitchen workspace.",
            features: ["Seamless Joints", "Non-porous & Hygienic", "Repairable", "Thermoformable (Curved Designs)", "Stain Resistant"],
            origin: "Korea",
            finish: "Satin / Matte"
        },
        ar: {
            title: "أسطح كورية صلبة",
            category: "سطح عمل",
            desc: "قمة النظافة والتصميم السلس. تسمح الأسطح الصلبة الكورية بفواصل غير مرئية وأحواض مدمجة، مما يخلق تدفقاً مستمراً في مساحة عمل مطبخك.",
            features: ["فواصل غير مرئية", "غير مسامي وصحي", "قابل للإصلاح", "قابل للتشكيل الحراري (تصاميم منحنية)", "مقاوم للبقع"],
            origin: "كوريا",
            finish: "ساتان / مطفأ"
        }
    },
    'quartz': {
        type: "countertops",
        image: marble,
        images: [marble, marble, marble],
        price: 'Premium Range',
        en: {
            title: "Engineered Quartz",
            category: "Countertop",
            desc: "Engineered for unmatched hardness and beauty. Quartz surfaces offer consistency in pattern and superior resistance to scratches and stains compared to natural stone.",
            features: ["Extremely Hard (7 Mohs)", "Non-porous", "Consistent Patterns", "Maintenance Free", "Wide Color Range"],
            origin: "Global",
            finish: "Polished"
        },
        ar: {
            title: "كوارتز صناعي",
            category: "سطح عمل",
            desc: "مصمم لصلابة وجمال لا مثيل لهما. توفر أسطح الكوارتز اتساقاً في النمط ومقاومة فائقة للخدوش والبقع مقارنة بالحجر الطبيعي.",
            features: ["صلب للغاية (7 موس)", "غير مسامي", "أنماط متسقة", "بدون صيانة", "مجموعة ألوان واسعة"],
            origin: "عالمي",
            finish: "ملمع"
        }
    },
    'porcelain': {
        type: "countertops",
        image: marble,
        images: [marble, marble, marble],
        price: 'Luxury Range',
        en: {
            title: "Porcelain Surfaces",
            category: "Countertop",
            desc: "Revolutionary ultra-compact surfaces. Porcelain countertops are heat, scratch, and UV resistant, making them perfect for both indoor kitchens and outdoor BBQ areas.",
            features: ["Heat Resistant", "UV Stable", "Scratch Proof", "Large Format Slabs", "Natural Stone Looks"],
            origin: "Italy/Spain",
            finish: "Matte / Polished / Textured"
        },
        ar: {
            title: "أسطح بورسلان",
            category: "سطح عمل",
            desc: "أسطح ثورية فائقة الكثافة. أسطح البورسلان مقاومة للحرارة والخدش والأشعة فوق البنفسجية، مما يجعلها مثالية للمطابخ الداخلية ومناطق الشواء الخارجية.",
            features: ["مقاوم للحرارة", "ثابت للأشعة فوق البنفسجية", "مقاوم للخدش", "ألوح كبيرة الحجم", "مظهر الحجر الطبيعي"],
            origin: "إيطاليا/إسبانيا",
            finish: "مطفأ / ملمع / محكم"
        }
    },
    'granite': {
        type: "countertops",
        image: marble,
        images: [marble, marble, marble],
        price: 'Standard to Luxury',
        en: {
            title: "Natural Granite",
            category: "Countertop",
            desc: "Nature's masterpiece in your kitchen. Each granite slab is unique, offering high heat resistance and a timeless appeal that adds significant value to your home.",
            features: ["Unique Natural Patterns", "High Heat Resistance", "Durable", "Adds Property Value", "Classic Appeal"],
            origin: "India/Brazil",
            finish: "Polished / Honed / Leather"
        },
        ar: {
            title: "جرانيت طبيعي",
            category: "سطح عمل",
            desc: "تحفة الطبيعة في مطبخك. كل لوح جرانيت فريد من نوعه، ويوفر مقاومة عالية للحرارة وجاذبية خالدة تضيف قيمة كبيرة لمنزلك.",
            features: ["أنماط طبيعية فريدة", "مقاومة عالية للحرارة", "متين", "يضيف قيمة للممتلكات", "جاذبية كلاسيكية"],
            origin: "الهند/البرازيل",
            finish: "ملمع / مصقول / جلدي"
        }
    },
    // Wash Counters
    'wash-counters': {
        type: "wash-counters",
        image: bath,
        images: [bath, bath, bath],
        price: 'Premium Range',
        en: {
            title: "Korean Solid Surface Wash Counters",
            category: "Wash Counter",
            desc: "Seamless integrated sinks with custom sizing and hygienic finish. Perfect for modern bathrooms and utility areas requiring absolute cleanliness and sleek design.",
            features: ["Seamless Integration", "Custom Sizing", "Hygienic Non-porous", "Stain Resistant", "Easy Maintenance"],
            origin: "Korea",
            finish: "Satin / Matte"
        },
        ar: {
            title: "مغاسل أسطح كورية صلبة",
            category: "مغسلة",
            desc: "أحواض مدمجة بسلاسة مع أحجام مخصصة وتشطيب صحي. مثالية للحمامات الحديثة ومناطق الخدمة التي تتطلب نظافة مطلقة وتصميماً أنيقاً.",
            features: ["دمج سلس", "تحجيم مخصص", "صحي غير مسامي", "مقاوم للبقع", "سهولة الصيانة"],
            origin: "كوريا",
            finish: "ساتان / مطفأ"
        }
    }
};
