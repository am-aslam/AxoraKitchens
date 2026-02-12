


// Egger images

import Egger1 from '@/assets/Kitchens/egger1.png'
import Egger2 from '@/assets/Kitchens/egger2.png'
import Egger3 from '@/assets/Kitchens/egger3.png'

// Glossy
import Glossy from '@/assets/HighGlossy/glossy.png';
import Glossy1 from '@/assets/HighGlossy/glossy2.png';
import Glossy2 from '@/assets/HighGlossy/glossy4.png';

// Multiwood

import Multi1 from '@/assets/Multi Wood/multi.png';
import Multi2 from '@/assets/Multi Wood/multi1.png';
import Multi3 from '@/assets/Multi Wood/multi2.png';

// Pvc

import Pvc1 from '@/assets/PVC/PVC.png';
import Pvc2 from '@/assets/PVC/PVC1.png';
import Pvc3 from '@/assets/PVC/PVC2.png';
import Pvc4 from '@/assets/PVC/PVC3.png'

// Aluminiom

import Aluminium1 from '@/assets/Aluminium/Aluminium.png';
import Aluminium2 from '@/assets/Aluminium/Aluminium1.png';
import Aluminium3 from '@/assets/Aluminium/Aluminium2.png';

// Counter Tops

// quartz

import quartz from '@/assets/Counter Top/quartz/quartz.png';
import quartz1 from '@/assets/Counter Top/quartz/quartz1.png';
import quartz2 from '@/assets/Counter Top/quartz/quartz2.png';
import quartz3 from '@/assets/Counter Top/quartz/quartz3.png';

// Korean

import korean from '@/assets/Counter Top/Korean/CTK.png';
import korean1 from '@/assets/Counter Top/Korean/CTK1.png';
import korean2 from '@/assets/Counter Top/Korean/CTK2.png';
import korean3 from '@/assets/Counter Top/Korean/CTK3.png';


// Granite

import granite from '@/assets/Counter Top/Granite/granite.png';
import granite1 from '@/assets/Counter Top/Granite/granite1.png';
import granite2 from '@/assets/Counter Top/Granite/granite2.png';
import granite3 from '@/assets/Counter Top/Granite/granite3.png';
import granite4 from '@/assets/Counter Top/Granite/granite4.png';
import granite5 from '@/assets/Counter Top/Granite/granite5.png';

// porcelain

import porcelain from '@/assets/Counter Top/Porcelain/porcelain.png';
import porcelain1 from '@/assets/Counter Top/Porcelain/porcelain1.png';
import porcelain2 from '@/assets/Counter Top/Porcelain/porcelain2.png';
import porcelain3 from '@/assets/Counter Top/Porcelain/porcelain3.png';
// Wash

import wash1 from '@/assets/Wash Counters/wash1.png';
import wash2 from '@/assets/Wash Counters/wash2.png';
import Wash3 from '@/assets/Wash Counters/wash3.png';
import Wash4 from '@/assets/Wash Counters/wash4.png'

// Wardrobes
import wardrobeImage from "../assets/Wardrobes/wardrobe1.jpg";
import wardrobeImage1 from "../assets/Wardrobes/wardrop3.png";
import wardrobeImage2 from "../assets/Wardrobes/wardrop2.png";

// Living
import living1 from '@/assets/Living/living2.png';
import living2 from '@/assets/Living/living3.png'



export const modelsData = {
    // Kitchens
    // Kitchens
    'egger': {
        type: "kitchens",
        image: Egger1,
        images: [Egger1, Egger2, Egger3],
        price: 'Premium Range',
        en: {
            title: "EGGER German Kitchens",
            category: "Kitchen System",
            quote: "German precision meets timeless elegance.",
            desc: "Premium German engineering meets modern aesthetics. EGGER kitchens are renowned for their durability, antibacterial surfaces, and authentic wood-like finishes that bring warmth and elegance to your home.",
            features: ["Antibacterial Surface Property (ISO 22196)", "Authentic Look & Feel", "High Scratch Resistance", "Sustainable Materials", "Matching Edge Banding"],
            origin: "Germany",
            finish: "Matte & Wood Texture"
        },
        ar: {
            title: "مطابخ إيجر الألمانية",
            category: "نظام المطبخ",
            quote: "الدقة الألمانية تلتقي بالأناقة الخالدة.",
            desc: "هندسة ألمانية فاخرة تلتقي بالجماليات الحديثة. تشتهر مطابخ إيجر بمتانتها، وأسطحها المضادة للبكتيريا، وتشطيباتها الخشبية الأصيلة التي تضفي الدفء والأناقة على منزلك.",
            features: ["خاصية سطح مضاد للبكتيريا (ISO 22196)", "مظهر وملمس أصلي", "مقاومة عالية للخدش", "مواد مستدامة", "حواف متطابقة"],
            origin: "ألمانيا",
            finish: "مطفأ وملمس خشبي"
        }
    },
    'glossy': {
        type: "kitchens",
        image: Glossy,
        images: [Glossy, Glossy1, Glossy2],
        price: 'Mid-Premium Range',
        en: {
            title: "High Glossy Kitchens",
            category: "Kitchen System",
            quote: "Reflecting sophistication in every detail.",
            desc: "Transform your kitchen into a visual masterpiece with our High Glossy range. Featuring mirror-like reflective surfaces that enhance space and light, these kitchens are the epitome of modern luxury.",
            features: ["Mirror-like Reflection", "UV Resistant", "Water & Moisture Proof", "Easy to Clean", "Vibrant Color Options"],
            origin: "Turkey",
            finish: "High Gloss Acrylic / PU"
        },
        ar: {
            title: "مطابخ هاي جلوس (عالية اللمعان)",
            category: "نظام المطبخ",
            quote: "تعكس الرقي في كل التفاصيل.",
            desc: "حول مطبخك إلى تحفة بصرية مع مجموعة هاي جلوس. تتميز بأسطح عاكسة كالمرآة تعزز المساحة والضوء، هذه المطابخ هي مثال للفخامة العصرية.",
            features: ["انعكاس يشبه المرآة", "مقاوم للأشعة فوق البنفسجية", "مقاوم للماء والرطوبة", "سهل التنظيف", "خيارات ألوان حيوية"],
            origin: "تركيا",
            finish: "أكريليك عالي اللمعان / PU"
        }
    },
    'multiwood': {
        type: "kitchens",
        image: Multi1,
        images: [Multi1, Multi2, Multi3],
        price: 'Standard Range',
        en: {
            title: "Multiwood Kitchens",
            category: "Kitchen System",
            quote: "Built to last a lifetime of beautiful moments.",
            desc: "The ultimate solution for durability and longevity. Multiwood kitchens are 100% waterproof and termite-proof, making them ideal for heavy-duty cooking environments and humid climates.",
            features: ["100% Waterproof", "Termite & Borer Proof", "Life-long Durability", "Flame Retardant", "Eco-friendly"],
            origin: "China/India",
            finish: "Painted / Laminate"
        },
        ar: {
            title: "مطابخ مالتي وود",
            category: "نظام المطبخ",
            quote: "صنع ليدوم مدى الحياة من اللحظات الجميلة.",
            desc: "الحل الأمثل للمتانة وطول العمر. مطابخ مالتي وود مقاومة للماء بنسبة 100% ومقاومة للنمل الأبيض، مما يجعلها مثالية لبيئات الطبخ الشاق والمناخات الرطبة.",
            features: ["مقاوم للماء 100%", "مقاوم للنمل الأبيض والحفار", "متانة مدى الحياة", "مقاوم للهب", "صديق للبيئة"],
            origin: "الصين/الهند",
            finish: "مدهون / لامينيت"
        }
    },
    'pvc': {
        type: "kitchens",
        image: Pvc1,
        images: [Pvc1, Pvc2, Pvc3, Pvc4],
        price: 'Economy Range',
        en: {
            title: "PVC Classic Kitchens",
            category: "Kitchen System",
            quote: "Classic charm meets contemporary value.",
            desc: "Elegant, budget-friendly, and versatile. PVC kitchens offer a wide range of designs from classic routed doors to modern flat panels, providing excellent value without compromising on style.",
            features: ["Cost Effective", "Membrane Presed Finish", "Seamless Edges", "Variety of Designs", "Moisture Resistant"],
            origin: "Spain",
            finish: "PVC Membrane"
        },
        ar: {
            title: "مطابخ PVC الكلاسيكية",
            category: "نظام المطبخ",
            quote: "سحر كلاسيكي يلتقي بالقيمة المعاصرة.",
            desc: "أنيقة، اقتصادية، ومتعددة الاستخدامات. تقدم مطابخ PVC مجموعة واسعة من التصاميم من الأبواب الكلاسيكية المحفورة إلى الألواح المسطحة الحديثة.",
            features: ["اقتصادي", "تشطيب مكبوس", "حواف غير ملحومة", "تنوع في التصاميم", "مقاوم للرطوبة"],
            origin: "إسبانيا",
            finish: "غشاء PVC"
        }
    },
    'aluminium': {
        type: "kitchens",
        image: Aluminium1,
        images: [Aluminium1, Aluminium2, Aluminium3],
        price: 'Premium Range',
        en: {
            title: "Aluminium Modular Kitchens",
            category: "Kitchen System",
            quote: "The future of hygiene and structural integrity.",
            desc: "Sleek, industrial, and indestructible. Our Aluminium kitchens are designed for those who demand absolute perfection in hygiene and structural integrity. Fire-proof and rust-proof.",
            features: ["Fire Resistant", "Rust & Corrosion Proof", "Zero Maintenance", "Modern Industrial Look", "Recyclable"],
            origin: "Global",
            finish: "Powder Coated / Anodized"
        },
        ar: {
            title: "مطابخ ألمنيوم مودرن",
            category: "نظام المطبخ",
            quote: "مستقبل النظافة والسلامة الهيكلية.",
            desc: "أنيقة، صناعية، وغير قابلة للتدمير. صممت مطابخ الألمنيوم لدينا لأولئك الذين يطلبون الكمال المطلق في النظافة والسلامة الهيكلية. مقاومة للحريق والصدأ.",
            features: ["مقاوم للحريق", "مقاوم للصدأ والتآكل", "بدون صيانة", "مظهر صناعي حديث", "قابل لإعادة التدوير"],
            origin: "عالمي",
            finish: "مطلية بالبودرة / مؤكسدة"
        }
    },
    // Countertops
    'korean': {
        type: "countertops",
        image: korean,
        images: [korean, korean1, korean2, korean3],
        price: 'Premium Range',
        en: {
            title: "Korean Solid Surface",
            category: "Countertop",
            quote: "Where seamless design meets absolute hygiene.",
            desc: "The pinnacle of hygiene and seamless design. Korean solid surfaces allows for invisible joints and integrated sinks, creating a continuous flow in your kitchen workspace.",
            features: ["Seamless Joints", "Non-porous & Hygienic", "Repairable", "Thermoformable (Curved Designs)", "Stain Resistant"],
            origin: "Korea",
            finish: "Satin / Matte"
        },
        ar: {
            title: "أسطح كورية صلبة",
            category: "سطح عمل",
            quote: "حيث يلتقي التصميم السلس بالنظافة المطلقة.",
            desc: "قمة النظافة والتصميم السلس. تسمح الأسطح الصلبة الكورية بفواصل غير مرئية وأحواض مدمجة، مما يخلق تدفقاً مستمراً في مساحة عمل مطبخك.",
            features: ["فواصل غير مرئية", "غير مسامي وصحي", "قابل للإصلاح", "قابل للتشكيل الحراري (تصاميم منحنية)", "مقاوم للبقع"],
            origin: "كوريا",
            finish: "ساتان / مطفأ"
        }
    },
    'quartz': {
        type: "countertops",
        image: quartz,
        images: [quartz, quartz1, quartz2,quartz3],
        price: 'Premium Range',
        en: {
            title: "Engineered Quartz",
            category: "Countertop",
            quote: "Unyielding strength, unparalleled beauty.",
            desc: "Engineered for unmatched hardness and beauty. Quartz surfaces offer consistency in pattern and superior resistance to scratches and stains compared to natural stone.",
            features: ["Extremely Hard (7 Mohs)", "Non-porous", "Consistent Patterns", "Maintenance Free", "Wide Color Range"],
            origin: "Global",
            finish: "Polished"
        },
        ar: {
            title: "كوارتز صناعي",
            category: "سطح عمل",
            quote: "قوة لا تلين وجمال لا يضاهى.",
            desc: "مصمم لصلابة وجمال لا مثيل لهما. توفر أسطح الكوارتز اتساقاً في النمط ومقاومة فائقة للخدوش والبقع مقارنة بالحجر الطبيعي.",
            features: ["صلب للغاية (7 موس)", "غير مسامي", "أنماط متسقة", "بدون صيانة", "مجموعة ألوان واسعة"],
            origin: "عالمي",
            finish: "ملمع"
        }
    },
    'porcelain': {
        type: "countertops",
        image: porcelain,
        images: [porcelain, porcelain1, porcelain2, porcelain3],
        price: 'Luxury Range',
        en: {
            title: "Porcelain Surfaces",
            category: "Countertop",
            quote: "The next generation of surface technology.",
            desc: "Revolutionary ultra-compact surfaces. Porcelain countertops are heat, scratch, and UV resistant, making them perfect for both indoor kitchens and outdoor BBQ areas.",
            features: ["Heat Resistant", "UV Stable", "Scratch Proof", "Large Format Slabs", "Natural Stone Looks"],
            origin: "Italy/Spain",
            finish: "Matte / Polished / Textured"
        },
        ar: {
            title: "أسطح بورسلان",
            category: "سطح عمل",
            quote: "الجيل القادم من تقنية الأسطح.",
            desc: "أسطح ثورية فائقة الكثافة. أسطح البورسلان مقاومة للحرارة والخدش والأشعة فوق البنفسجية، مما يجعلها مثالية للمطابخ الداخلية ومناطق الشواء الخارجية.",
            features: ["مقاوم للحرارة", "ثابت للأشعة فوق البنفسجية", "مقاوم للخدش", "ألوح كبيرة الحجم", "مظهر الحجر الطبيعي"],
            origin: "إيطاليا/إسبانيا",
            finish: "مطفأ / ملمع / محكم"
        }
    },
    'granite': {
        type: "countertops",
        image: granite,
        images: [granite, granite1, granite2, granite3,granite4, granite5],
        price: 'Standard to Luxury',
        en: {
            title: "Natural Granite",
            category: "Countertop",
            quote: "Timeless beauty carved from the earth.",
            desc: "Nature's masterpiece in your kitchen. Each granite slab is unique, offering high heat resistance and a timeless appeal that adds significant value to your home.",
            features: ["Unique Natural Patterns", "High Heat Resistance", "Durable", "Adds Property Value", "Classic Appeal"],
            origin: "India/Brazil",
            finish: "Polished / Honed / Leather"
        },
        ar: {
            title: "جرانيت طبيعي",
            category: "سطح عمل",
            quote: "جمال خالد منحوت من الأرض.",
            desc: "تحفة الطبيعة في مطبخك. كل لوح جرانيت فريد من نوعه، ويوفر مقاومة عالية للحرارة وجاذبية خالدة تضيف قيمة كبيرة لمنزلك.",
            features: ["أنماط طبيعية فريدة", "مقاومة عالية للحرارة", "متين", "يضيف قيمة للممتلكات", "جاذبية كلاسيكية"],
            origin: "الهند/البرازيل",
            finish: "ملمع / مصقول / جلدي"
        }
    },
    // Wash Counters
    'wash-counters': {
        type: "wash-counters",
        image: wash1,
        images: [wash1, Wash4, wash2, Wash3],
        price: 'Premium Range',
        en: {
            title: "Korean Solid Surface Wash Counters",
            category: "Wash Counter",
            quote: "Pure hygiene, sculptural simplicity.",
            desc: "Seamless integrated sinks with custom sizing and hygienic finish. Perfect for modern bathrooms and utility areas requiring absolute cleanliness and sleek design.",
            features: ["Seamless Integration", "Custom Sizing", "Hygienic Non-porous", "Stain Resistant", "Easy Maintenance"],
            origin: "Korea",
            finish: "Satin / Matte"
        },
        ar: {
            title: "مغاسل أسطح كورية صلبة",
            category: "مغسلة",
            quote: "نظافة نقية وبساطة نحتية.",
            desc: "أحواض مدمجة بسلاسة مع أحجام مخصصة وتشطيب صحي. مثالية للحمامات الحديثة ومناطق الخدمة التي تتطلب نظافة مطلقة وتصميماً أنيقاً.",
            features: ["دمج سلس", "تحجيم مخصص", "صحي غير مسامي", "مقاوم للبقع", "سهولة الصيانة"],
            origin: "كوريا",
            finish: "ساتان / مطفأ"
        }
    },
    // Wardrobes
    'wardrobe-luxury': {
        type: "wardrobes",
        image: wardrobeImage1,
        images: [wardrobeImage1, wardrobeImage, wardrobeImage2],
        price: 'Premium Collection',
        en: {
            title: "Signature Walk-In Wardrobe",
            category: "Wardrobe System",
            quote: "Elegance in organization, luxury in every detail.",
            desc: "Experience the epitome of luxury organization. Our Signature Walk-In Wardrobe combines sophisticated design with smart functionality, featuring integrated lighting, glass display islands, and premium soft-close mechanisms.",
            features: ["Integrated LED Lighting", "Glass Display Island", "Soft-close Drawers", "Custom Compartmentalization", "Premium Wood Finish"],
            origin: "Italy/Germany",
            finish: "Matte Lacquer & Wood Veneer"
        },
        ar: {
            title: "خزانة ملابس فاخرة (Walk-In)",
            category: "نظام الخزائن",
            quote: "أناقة في التنظيم وفخامة في كل التفاصيل.",
            desc: "استمتع بقمة الرفاهية في التنظيم. تجمع خزانة الملابس الفاخرة لدينا بين التصميم المتطور والوظائف الذكية، وتتميز بإضاءة مدمجة، وجزر عرض زجاجية، وآليات إغلاق ناعم ممتازة.",
            features: ["إضاءة LED مدمجة", "جزيرة عرض زجاجية", "أدراج بإغلاق ناعم", "تقسيم مخصص", "تشطيب خشبي فاخر"],
            origin: "إيطاليا/ألمانيا",
            finish: "طلاء مطفأ وقشرة خشبية"
        }
    },
    // Living
    'living-modern': {
        type: "living",
        image: living1,
        images: [living1, living2],
        price: 'Bespoke Design',
        en: {
            title: "Contemporary Living Area Suite",
            category: "Living Room",
            quote: "Redefining the art of living.",
            desc: "Transform your living space with our bespoke entertainment and shelving units. Designed to seamlessly integrate with your home's architecture, offering both aesthetic appeal and practical storage solutions.",
            features: ["Integrated Media Unit", "Floating Shelves", "Hidden Cable Management", "Mood Lighting", "Premium Laminate Finish"],
            origin: "Germany",
            finish: "High-Gloss & Textured Wood"
        },
        ar: {
            title: "جناح غرفة معيشة عصري",
            category: "غرفة المعيشة",
            quote: "إعادة تعريف فن المعيشة.",
            desc: "حول مساحة معيشتك مع وحدات الترفيه والأرفف المخصصة لدينا. مصممة لتندمج بسلاسة مع هندسة منزلك، وتوفر جاذبية جمالية وحلول تخزين عملية.",
            features: ["وحدة وسائط مدمجة", "أرفف عائمة", "إدارة كابلات مخفية", "إضاءة محيطية", "تشطيب لامع وخشبي"],
            origin: "ألمانيا",
            finish: "عالي اللمعان وخشب محكم"
        }
    }
};
