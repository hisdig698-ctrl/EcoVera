"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"
import { useLanguage } from "./language-context"

type Category = "wellness" | "cosmetics" | "essential-oils"

const products = [
  // Wellness
  {
    id: "hand-sanitizer",
    name: { en: "Titepati Hand Sanitizer", ne: "टिटेपाटी ह्यान्ड स्यानिटाइजर" },
    description: { en: "Kills 99.9% of germs with natural extracts", ne: "प्राकृतिक अर्कले ९९.९% जीवाणु मार्छ" },
    price: 125,
    originalPrice: 150,
    image: "/images/products/hand-sanitizer.jpg",
    badgeKey: "products.bestseller",
    category: "wellness" as Category
  },
  {
    id: "mugwort-incense",
    name: { en: "Artemisia Incense", ne: "आर्टेमिसिया धूप" },
    description: { en: "Pure natural incense for purification and wellness (20 sticks)", ne: "शुद्धिकरण र कल्याणको लागि शुद्ध प्राकृतिक धूप (२० स्टिक)" },
    price: 150,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    badgeKey: "products.premium",
    category: "wellness" as Category
  },
  {
    id: "artemisia-moxa",
    name: { en: "Artemisia Moxa Sticks", ne: "आर्टेमिसिया मोक्सा स्टिक्स" },
    description: { en: "Traditional mugwort moxa for therapeutic heat therapy (10 sticks)", ne: "उपचारात्मक ताप थेरापीको लागि परम्परागत मगवर्ट मोक्सा (१० स्टिक)" },
    price: 850,
    originalPrice: null,
    image: "/images/products/moxa.png",
    badgeKey: "products.new",
    category: "wellness" as Category
  },
  {
    id: "artemisia-handwash",
    name: { en: "Artemisia Herbal Handwash", ne: "आर्टेमिसिया जडीबुटी हाथ धोने सामान" },
    description: { en: "Gentle botanical cleansing with natural Artemisia extract (300ml)", ne: "प्राकृतिक आर्टेमिसिया अर्कसँग कोमल वानस्पतिक सफाइ (३००मिलि)" },
    price: 215,
    originalPrice: null,
    image: "/images/products/handwash.png",
    badgeKey: "products.new",
    category: "wellness" as Category
  },
  // Essential Oils
  {
    id: "mugwort-oil",
    name: { en: "Mugwort Essential Oil", ne: "मगवर्ट एसेन्सियल तेल" },
    description: { en: "Pure Artemisia Vulgaris extract (50ml)", ne: "शुद्ध आर्टेमिसिया भल्गारिस अर्क (५०मिलि)" },
    price: 1400,
    originalPrice: null,
    image: "/images/products/oil.png",
    badgeKey: "products.premium",
    category: "essential-oils" as Category
  },
  // Cosmetics
  {
    id: "titepati-soap",
    name: { en: "Titepati Healing Soap", ne: "टिटेपाटी निको पार्ने साबुन" },
    description: { en: "Premium Artemisia soap bar (100g) - Skin treatment & healing", ne: "प्रिमियम आर्टेमिसिया साबुन - छाला उपचार र निको पार्ने" },
    price: 120,
    originalPrice: null,
    image: "/images/products/titepati-soap.jpg",
    badgeKey: "products.bestseller",
    category: "cosmetics" as Category
  },
  {
    id: "titepati-soap-bundle-3",
    name: { en: "Titepati Soap Bundle (3-Pack)", ne: "टिटेपाटी साबुन बन्डल (३ पीस)" },
    description: { en: "Three premium Artemisia soap bars for complete skin care", ne: "पूर्ण छाला हेरमेलको लागि तीन प्रिमियम आर्टेमिसिया साबुन" },
    price: 320,
    originalPrice: 360,
    image: "/images/products/titepati-soap.jpg",
    badgeKey: "products.sale",
    category: "cosmetics" as Category
  },
  {
    id: "titepati-soap-bundle-6",
    name: { en: "Titepati Soap Bundle (6-Pack)", ne: "टिटेपाटी साबुन बन्डल (६ पीस)" },
    description: { en: "Six premium Artemisia soap bars - Perfect for family", ne: "छ: प्रिमियम आर्टेमिसिया साबुन - परिवारको लागि आदर्श" },
    price: 600,
    originalPrice: 720,
    image: "/images/products/titepati-soap.jpg",
    badgeKey: "products.sale",
    category: "cosmetics" as Category
  }
]

const categoryKeys: { value: Category; labelKey: string }[] = [
  { value: "wellness", labelKey: "products.cat_wellness" },
  { value: "essential-oils", labelKey: "products.cat_oils" },
  { value: "cosmetics", labelKey: "products.cat_cosmetics" }
]

// Helper: convert digits to Nepali
function toNepaliDigits(n: number): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  return n.toString().split('').map(d => nepaliDigits[parseInt(d)] || d).join('')
}

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("wellness")
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()
  const { language, t } = useLanguage()

  // Dynamic tab indicator refs
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 })

  const updateIndicator = useCallback(() => {
    const idx = categoryKeys.findIndex(c => c.value === selectedCategory)
    const btn = tabRefs.current[idx]
    if (btn) {
      const parent = btn.parentElement
      if (parent) {
        setIndicatorStyle({
          left: btn.offsetLeft,
          width: btn.offsetWidth
        })
      }
    }
  }, [selectedCategory])

  useEffect(() => {
    updateIndicator()
  }, [updateIndicator, language])

  // Also update on resize
  useEffect(() => {
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  const filteredProducts = products.filter(product => product.category === selectedCategory)

  const handleCategoryChange = (category: Category) => {
    if (category !== selectedCategory) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedCategory(category)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 300)
    }
  }

  // Preload all product images on mount
  useEffect(() => {
    products.forEach((product) => {
      const img = new window.Image()
      img.src = product.image
    })
  }, [])

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      gridObserver.observe(gridRef.current)
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current)
    }

    return () => {
      if (gridRef.current) {
        gridObserver.unobserve(gridRef.current)
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current)
      }
    }
  }, [])

  const formatPrice = (price: number) => {
    if (language === 'ne') return `रु. ${toNepaliDigits(price)}`
    return `Rs. ${price}`
  }

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            {t("products.collection_label")}
          </span>
          <h2 className={`font-serif leading-tight text-foreground mb-4 text-balance text-4xl sm:text-5xl md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            {t("products.title")}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-md mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            {t("products.subtitle")}
          </p>
        </div>

        {/* Segmented Control */}
        <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="inline-flex bg-background rounded-full p-1 gap-1 relative min-w-max">
            {/* Animated background slide — dynamically positioned */}
            <div
              className="absolute top-1 bottom-1 bg-foreground rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            {categoryKeys.map((category, idx) => (
              <button
                key={category.value}
                ref={(el) => { tabRefs.current[idx] = el }}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === category.value
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <Link
              key={`${selectedCategory}-${product.id}`}
              href={`/product/${product.id}`}
              className={`group transition-all duration-500 ease-out ${isVisible && !isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{ transitionDelay: isTransitioning ? '0ms' : `${index * 80}ms` }}
            >
              <div className="bg-background rounded-3xl overflow-hidden ecovera-shadow ecovera-transition group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name[language]}
                    fill
                    className="object-cover ecovera-transition group-hover:scale-105"
                  />
                  {/* Badge */}
                  {product.badgeKey && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide bg-primary text-primary-foreground ${product.badgeKey === "products.sale"
                        ? "bg-destructive text-destructive-foreground"
                        : product.badgeKey === "products.new"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                        }`}
                    >
                      {t(product.badgeKey)}
                    </span>
                  )}
                  {/* Quick add button */}
                  <button
                    type="button"
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center translate-y-0 opacity-100 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 ecovera-transition ecovera-shadow"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem({
                        id: product.id,
                        name: product.name[language],
                        description: product.description[language],
                        price: product.price,
                        image: product.image
                      })
                    }}
                    aria-label={t("product.add_to_cart")}
                  >
                    <ShoppingBag className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-1">{product.name[language]}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description[language]}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-foreground/5"
          >
            {t("products.view_all")}
          </Link>
        </div>
      </div>
    </section>
  )
}
