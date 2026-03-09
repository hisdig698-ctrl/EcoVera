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
    price: 15,
    originalPrice: 18,
    image: "/images/products/hand-sanitizer.jpg",
    badgeKey: "products.bestseller",
    category: "wellness" as Category
  },
  {
    id: "mugwort-incense",
    name: { en: "Tibetan Mugwort Incense", ne: "तिब्बती मगवर्ट धूप" },
    description: { en: "Traditional herbal incense for cleansing", ne: "सफाइको लागि परम्परागत जडीबुटी धूप" },
    price: 25,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    badgeKey: "products.new",
    category: "wellness" as Category
  },
  // Essential Oils
  {
    id: "mugwort-oil",
    name: { en: "Mugwort Essential Oil", ne: "मगवर्ट एसेन्सियल तेल" },
    description: { en: "Pure Artemisia Vulgaris extract (50ml)", ne: "शुद्ध आर्टेमिसिया भल्गारिस अर्क (५०मिलि)" },
    price: 45,
    originalPrice: null,
    image: "/images/products/mugwort-oil.jpg",
    badgeKey: "products.premium",
    category: "essential-oils" as Category
  },
  // Cosmetics
  {
    id: "titepati-soap",
    name: { en: "Titepati Skin Treatment Soap", ne: "टिटेपाटी छाला उपचार साबुन" },
    description: { en: "Ayurvedic Okhati therapeutic bar", ne: "आयुर्वेदिक ओखति उपचार साबुन" },
    price: 12,
    originalPrice: null,
    image: "/images/products/titepati-soap.jpg",
    badgeKey: "products.bestseller",
    category: "cosmetics" as Category
  },
  {
    id: "herbal-cosmetics-set",
    name: { en: "Titepati Herbal Cosmetics Set", ne: "टिटेपाटी जडीबुटी सौन्दर्य सेट" },
    description: { en: "Complete glow skin toner, face wash, and moisturizer bundle", ne: "पूर्ण ग्लो स्किन टोनर, फेस वाश, र मोइस्चराइजर बन्डल" },
    price: 85,
    originalPrice: 110,
    image: "/images/products/herbal-cosmetics.jpg",
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
