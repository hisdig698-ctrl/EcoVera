"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Minus, Plus, ChevronDown, Leaf, Heart, Award, Recycle, Star, Check } from "lucide-react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { useCart } from "@/components/ecovera/cart-context"
import { useLanguage } from "@/components/ecovera/language-context"

// Helper: convert digits to Nepali
function toNepaliDigits(n: number): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  return n.toString().split('').map(d => nepaliDigits[parseInt(d)] || d).join('')
}

type ProductData = {
  id: string
  name: { en: string; ne: string }
  tagline: { en: string; ne: string }
  description: { en: string; ne: string }
  price: number
  originalPrice: number | null
  image: string
  sizes: string[]
  details: { en: string; ne: string }
  howToUse: { en: string; ne: string }
  ingredients: { en: string; ne: string }
  delivery: { en: string; ne: string }
}

const products: Record<string, ProductData> = {
  "hand-sanitizer": {
    id: "hand-sanitizer",
    name: { en: "Titepati Hand Sanitizer", ne: "टिटेपाटी ह्यान्ड स्यानिटाइजर" },
    tagline: { en: "Natural protection, gentle on skin", ne: "प्राकृतिक सुरक्षा, छालामा कोमल" },
    description: {
      en: "EcoVera's Titepati Hand Sanitizer features natural Artemisia extracts. It kills 99.9% of germs while leaving your skin feeling soft, combining powerful antimicrobial properties with deep hydration.",
      ne: "EcoVera को टिटेपाटी ह्यान्ड स्यानिटाइजरमा प्राकृतिक आर्टेमिसिया अर्क छ। यसले ९९.९% जीवाणु मार्छ र तपाईंको छालालाई कोमल राख्छ।"
    },
    price: 15,
    originalPrice: 18,
    image: "/images/products/hand-sanitizer.jpg",
    sizes: ["100ml", "500ml"],
    details: {
      en: "Formulated with locally-sourced Titepati (Artemisia), this sanitizing gel leverages the plant's robust antibacterial and antiviral properties. By utilizing underused rural resources, each bottle helps support local farmers and provides a sustainable, eco-friendly alternative to synthetic sanitizers.",
      ne: "स्थानीय रूपमा प्राप्त टिटेपाटी (आर्टेमिसिया) बाट बनाइएको, यो स्यानिटाइजिङ जेलले बिरुवाको बलियो जीवाणुरोधी र एन्टिभाइरल गुणहरू प्रयोग गर्छ। ग्रामीण स्रोतहरूको उपयोग गरेर, प्रत्येक बोतलले स्थानीय किसानहरूलाई सहयोग गर्छ।"
    },
    howToUse: {
      en: "Apply a small amount to the palm of one hand. Rub hands together, covering all surfaces of hands and fingers until dry. Do not rinse.",
      ne: "एक हातको हत्केलामा थोरै मात्रामा लगाउनुहोस्। दुवै हात एकसाथ रगड्नुहोस्, हात र औंलाका सबै सतहहरू सुक्नेसम्म ढाक्नुहोस्। नधुनुहोस्।"
    },
    ingredients: {
      en: "Alcohol Denat., Aqua, Artemisia Vulgaris (Titepati) Extract, Glycerin, Aloe Barbadensis Leaf Juice, Tocopherol.",
      ne: "एल्कोहल डिन्यात., एक्वा, आर्टेमिसिया भल्गारिस (टिटेपाटी) अर्क, ग्लिसरिन, एलोभेरा पत्ती रस, टोकोफेरोल।"
    },
    delivery: {
      en: "Free standard shipping on orders over $50. Sourced responsibly and packaged in recyclable materials.",
      ne: "रु. ५,००० भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी। जिम्मेवार रूपमा प्राप्त र पुनः प्रयोग योग्य सामग्रीमा प्याक गरिएको।"
    }
  },
  "mugwort-incense": {
    id: "mugwort-incense",
    name: { en: "Tibetan Mugwort Incense", ne: "तिब्बती मगवर्ट धूप" },
    tagline: { en: "Purify your space with ancient wisdom", ne: "प्राचीन ज्ञानले तपाईंको ठाउँ शुद्ध गर्नुहोस्" },
    description: {
      en: "Hand-rolled Tibetan incense made from sustainably harvested Mugwort. Used traditionally for clearing negative energy, meditation, and relaxation.",
      ne: "दिगो रूपमा कटनी गरिएको मगवर्टबाट हातले बनाइएको तिब्बती धूप। परम्परागत रूपमा नकारात्मक ऊर्जा हटाउन, ध्यान र आराम गर्न प्रयोग गरिन्छ।"
    },
    price: 25,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    sizes: ["Pack of 30", "Pack of 60"],
    details: {
      en: "Our Tibetan Mugwort Incense is crafted using traditional techniques that have been passed down for generations. The main component, Titepati (Black Sage), is renowned in Ayurvedic medicine for its purifying and therapeutic aroma. Buying this product directly supports community-based labor resources.",
      ne: "हाम्रो तिब्बती मगवर्ट धूप पिंढीपिंढी चलिआएको परम्परागत प्रविधिहरू प्रयोग गरेर बनाइएको हो। मुख्य घटक, टिटेपाटी, आयुर्वेदिक चिकित्सामा शुद्धिकरण र उपचारात्मक सुगन्धको लागि प्रसिद्ध छ।"
    },
    howToUse: {
      en: "Light the tip of the incense stick, gently blow out the flame to allow it to smolder. Place in a heat-proof incense holder. Never leave unattended. Perfect for meditation, yoga, or unwinding before bed.",
      ne: "धूपको टुप्पोमा आगो लगाउनुहोस्, बिस्तारै फुकेर ज्वाला निभाउनुहोस्। ताप-प्रूफ धूपदानीमा राख्नुहोस्। कहिल्यै एक्लो नछोड्नुहोस्। ध्यान, योग, वा सुत्नु अघि आराम गर्नको लागि उत्तम।"
    },
    ingredients: {
      en: "Artemisia Vulgaris (Mugwort) Leaves, Natural Herbal Binders, Sandalwood Base. No artificial fragrances or synthetic fillers.",
      ne: "आर्टेमिसिया भल्गारिस (मगवर्ट) पातहरू, प्राकृतिक जडीबुटी बाइन्डरहरू, चन्दन बेस। कुनै कृत्रिम सुगन्ध वा सिंथेटिक फिलरहरू छैनन्।"
    },
    delivery: {
      en: "Free standard shipping on orders over $50. Comes securely wrapped in eco-friendly protective packaging.",
      ne: "रु. ५,००० भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी। वातावरण-मैत्री सुरक्षात्मक प्याकेजिङमा सुरक्षित रूपमा बेरिएको।"
    }
  },
  "mugwort-oil": {
    id: "mugwort-oil",
    name: { en: "Mugwort Essential Oil", ne: "मगवर्ट एसेन्सियल तेल" },
    tagline: { en: "The essence of Artemisia", ne: "आर्टेमिसियाको सार" },
    description: {
      en: "Pure, high-grade Mugwort essential oil. A powerful therapeutic extract known for its calming, anti-inflammatory, and antimicrobial benefits.",
      ne: "शुद्ध, उच्च गुणस्तरको मगवर्ट एसेन्सियल तेल। शान्त गर्ने, सूजन विरोधी, र सूक्ष्मजीवरोधी फाइदाहरूका लागि चिनिने शक्तिशाली उपचारात्मक अर्क।"
    },
    price: 45,
    originalPrice: null,
    image: "/images/products/mugwort-oil.jpg",
    sizes: ["15ml", "50ml"],
    details: {
      en: "Steam-distilled from freshly harvested Artemisia plants grown on previously underutilized agricultural land. This pure essential oil is highly concentrated and ideal for aromatherapy, custom skincare blends, or traditional holistic remedies. This high-margin product is a prime example of our Phase 2 value creation.",
      ne: "पहिले कम प्रयोग भएको कृषि भूमिमा उब्जाइएको ताजा कटनी गरिएको आर्टेमिसिया बिरुवाबाट स्टीम-डिस्टिल गरिएको। यो शुद्ध एसेन्सियल तेल अत्यधिक केन्द्रित छ र एरोमाथेरापी, छाला हेरचाह मिश्रण, वा परम्परागत समग्र उपचारहरूको लागि आदर्श हो।"
    },
    howToUse: {
      en: "For aromatherapy, add 3-5 drops to a diffuser. For topical use, strictly dilute with a carrier oil (such as jojoba or coconut oil) before applying to the skin. Do not ingest.",
      ne: "एरोमाथेरापीको लागि, डिफ्युजरमा ३-५ थोपा थप्नुहोस्। छालामा लगाउन, क्यारियर तेल (जस्तै जोजोबा वा नरिवल तेल) सँग पातलो गरेर मात्र लगाउनुहोस्। नखानुहोस्।"
    },
    ingredients: {
      en: "100% Pure Artemisia Vulgaris (Mugwort) Essential Oil.",
      ne: "१००% शुद्ध आर्टेमिसिया भल्गारिस (मगवर्ट) एसेन्सियल तेल।"
    },
    delivery: {
      en: "Free standard shipping on orders over $50. Packaged in a UV-protective amber glass bottle to preserve potency.",
      ne: "रु. ५,००० भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी। शक्ति जोगाउन UV-सुरक्षात्मक एम्बर गिलास बोतलमा प्याक गरिएको।"
    }
  },
  "titepati-soap": {
    id: "titepati-soap",
    name: { en: "Titepati Skin Treatment Soap", ne: "टिटेपाटी छाला उपचार साबुन" },
    tagline: { en: "Ayurvedic cleansing and healing", ne: "आयुर्वेदिक सफाइ र उपचार" },
    description: {
      en: "A premium Ayurvedic Okhati therapeutic soap. Gently cleanses while treating common skin conditions using natural Titepati extracts.",
      ne: "एक प्रिमियम आयुर्वेदिक ओखति उपचार साबुन। प्राकृतिक टिटेपाटी अर्कहरू प्रयोग गरेर सामान्य छाला समस्याहरूको उपचार गर्दै कोमलतापूर्वक सफा गर्छ।"
    },
    price: 12,
    originalPrice: null,
    image: "/images/products/titepati-soap.jpg",
    sizes: ["125g"],
    details: {
      en: "This artisanal soap combines the healing power of Mugwort with traditional Ayurvedic botanicals. It helps soothe irritated skin, reduce inflammation, and combat acne. Every purchase supports our SDG goals of providing natural health products and decent work to rural communities.",
      ne: "यो कारीगर साबुनले मगवर्टको उपचार शक्ति र परम्परागत आयुर्वेदिक वनस्पतिहरूसँग जोड्छ। यसले छाट्टिएको छाला शान्त गर्न, सूजन कम गर्न, र मुसाहरूसँग लड्न मद्दत गर्छ।"
    },
    howToUse: {
      en: "Lather with warm water and massage gently into the skin. Rinse thoroughly. Gentle enough for daily use on face and body.",
      ne: "न्यानो पानीले फिज बनाएर छालामा बिस्तारै मालिश गर्नुहोस्। राम्ररी धुनुहोस्। अनुहार र शरीरमा दैनिक प्रयोगको लागि पर्याप्त कोमल।"
    },
    ingredients: {
      en: "Saponified Coconut Oil, Palm Oil (Sustainable), Artemisia Vulgaris Extract, Neem Extract, Essential Oil Blend, Aqua.",
      ne: "स्यापोनिफाइड नरिवल तेल, पाम तेल (दिगो), आर्टेमिसिया भल्गारिस अर्क, नीम अर्क, एसेन्सियल तेल मिश्रण, एक्वा।"
    },
    delivery: {
      en: "Free standard shipping on orders over $50. Shipped in 100% biodegradable paper packaging.",
      ne: "रु. ५,००० भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी। १००% बायोडिग्रेडेबल कागज प्याकेजिङमा पठाइएको।"
    }
  },
  "herbal-cosmetics-set": {
    id: "herbal-cosmetics-set",
    name: { en: "Titepati Herbal Cosmetics Set", ne: "टिटेपाटी जडीबुटी सौन्दर्य सेट" },
    tagline: { en: "Complete natural glow regimen", ne: "पूर्ण प्राकृतिक ग्लो रेजिमेन" },
    description: {
      en: "Experience the full spectrum of Artemisia's benefits with our complete skincare bundle featuring a glow skin toner, face wash, and moisturizer.",
      ne: "ग्लो स्किन टोनर, फेस वाश, र मोइस्चराइजर भएको हाम्रो पूर्ण स्किनकेयर बन्डलसँग आर्टेमिसियाका फाइदाहरूको पूर्ण स्पेक्ट्रम अनुभव गर्नुहोस्।"
    },
    price: 85,
    originalPrice: 110,
    image: "/images/products/herbal-cosmetics.jpg",
    sizes: ["Standard Bundle"],
    details: {
      en: "This comprehensive set leverages the antioxidant and antimicrobial properties of Titepati to promote a healthy, radiant complexion. Produced through our community-centered farming model, these cosmetics stand at the forefront of the growing global demand for plant-based health solutions.",
      ne: "यो व्यापक सेटले स्वस्थ, उज्यालो रंग प्रवर्द्धन गर्न टिटेपाटीको एन्टिअक्सिडेन्ट र सूक्ष्मजीवरोधी गुणहरू प्रयोग गर्छ। हाम्रो समुदाय-केन्द्रित कृषि मोडल मार्फत उत्पादित।"
    },
    howToUse: {
      en: "Step 1: Cleanse with the face wash morning and night. Step 2: Apply toner with a cotton pad to balance pH. Step 3: Massage moisturizer into face and neck to lock in hydration.",
      ne: "चरण १: बिहान र बेलुका फेस वासले सफा गर्नुहोस्। चरण २: pH सन्तुलन गर्न कपासले टोनर लगाउनुहोस्। चरण ३: नमी लक गर्न अनुहार र घाँटीमा मोइस्चराइजर मालिश गर्नुहोस्।"
    },
    ingredients: {
      en: "Various botanical extracts focusing heavily on Artemisia Vulgaris. See individual packaging for detailed ingredient lists. 100% Natural.",
      ne: "आर्टेमिसिया भल्गारिसमा केन्द्रित विभिन्न वानस्पतिक अर्कहरू। विस्तृत सामग्री सूचीको लागि व्यक्तिगत प्याकेजिङ हेर्नुहोस्। १००% प्राकृतिक।"
    },
    delivery: {
      en: "Free standard shipping on all bundle orders. Thoughtfully packaged in an eco-friendly gift box.",
      ne: "सबै बन्डल अर्डरमा निःशुल्क डेलिभरी। वातावरण-मैत्री उपहार बाकसमा सोचपूर्वक प्याक गरिएको।"
    }
  }
}

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products[productId]
  const { addItem, setIsOpen } = useCart()
  const { language, t } = useLanguage()

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "30ml")
  const [quantity, setQuantity] = useState(1)
  type AccordionSection = "details" | "howToUse" | "ingredients" | "delivery"
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>("details")
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const formatPrice = (price: number) => {
    if (language === 'ne') return `रु. ${toNepaliDigits(price)}`
    return `Rs. ${price}`
  }

  const handleAddToCart = () => {
    if (!product) return
    addItem({
      id: product.id,
      name: `${product.name[language]} — ${selectedSize}`,
      description: product.description[language],
      price: product.price,
      image: product.image,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleBuyNow = () => {
    if (!product) return
    addItem({
      id: product.id,
      name: `${product.name[language]} — ${selectedSize}`,
      description: product.description[language],
      price: product.price,
      image: product.image,
    })
    setIsOpen(true)
  }

  // 404 fallback for unknown product
  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("product.not_found")}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("product.not_found_desc")}
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-primary/90 ecovera-shadow"
            >
              {t("product.browse_all")}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const benefitKeys = [
    { icon: Leaf, labelKey: "product.natural" },
    { icon: Heart, labelKey: "product.cruelty_free" },
    { icon: Recycle, labelKey: "product.eco_friendly" },
    { icon: Award, labelKey: "product.expert_approved" }
  ]

  const accordionItems: { key: AccordionSection; titleKey: string; content: string }[] = [
    { key: "details", titleKey: "product.details", content: product.details[language] },
    { key: "howToUse", titleKey: "product.how_to_use", content: product.howToUse[language] },
    { key: "ingredients", titleKey: "product.ingredients", content: product.ingredients[language] },
    { key: "delivery", titleKey: "product.delivery", content: product.delivery[language] }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ecovera-transition mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("product.back")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-card ecovera-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name[language]}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-primary mb-2 block">
                  {t("product.essentials_label")}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
                  {product.name[language]}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground italic mb-4">
                  {product.tagline[language]}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({language === 'ne' ? toNepaliDigits(128) : '128'} {t("product.reviews")})
                  </span>
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                  {product.description[language]}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-medium text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">{t("product.size")}</label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm ecovera-transition ecovera-shadow ${selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-card/80"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6 sm:mb-8">
                <label className="text-sm font-medium text-foreground mb-3 block">{t("product.quantity")}</label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 ecovera-shadow">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">
                    {language === 'ne' ? toNepaliDigits(quantity) : quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition ecovera-shadow ${isAdded
                    ? "bg-primary/80 text-primary-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t("product.added")}
                    </>
                  ) : (
                    t("product.add_to_cart")
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-foreground/5"
                >
                  {t("product.buy_now")}
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {benefitKeys.map((benefit) => (
                  <div
                    key={benefit.labelKey}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 ecovera-shadow bg-transparent shadow-none rounded-md"
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center">{t(benefit.labelKey)}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-border/50">
                {accordionItems.map((item) => (
                  <div key={item.key} className="border-b border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-4 sm:py-5 text-left"
                    >
                      <span className="font-medium text-foreground text-sm sm:text-base">{t(item.titleKey)}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground ecovera-transition ${openAccordion === item.key ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden ecovera-transition ${openAccordion === item.key ? "max-h-96 pb-5" : "max-h-0"
                        }`}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
