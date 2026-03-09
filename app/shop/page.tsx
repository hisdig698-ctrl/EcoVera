"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { useCart } from "@/components/ecovera/cart-context"

const products = [
  // Wellness
  {
    id: "hand-sanitizer",
    name: "Titepati Hand Sanitizer",
    description: "Kills 99.9% of germs with natural extracts",
    price: 15,
    originalPrice: 18,
    image: "/images/products/hand-sanitizer.jpg",
    badge: "Bestseller",
    category: "wellness"
  },
  {
    id: "mugwort-incense",
    name: "Tibetan Mugwort Incense",
    description: "Traditional herbal incense for cleansing",
    price: 25,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    badge: "New",
    category: "wellness"
  },
  // Essential Oils
  {
    id: "mugwort-oil",
    name: "Mugwort Essential Oil",
    description: "Pure Artemisia Vulgaris extract (50ml)",
    price: 45,
    originalPrice: null,
    image: "/images/products/mugwort-oil.jpg",
    badge: "Premium",
    category: "essential-oils"
  },
  // Cosmetics
  {
    id: "titepati-soap",
    name: "Titepati Skin Treatment Soap",
    description: "Ayurvedic Okhati therapeutic bar",
    price: 12,
    originalPrice: null,
    image: "/images/products/titepati-soap.jpg",
    badge: "Bestseller",
    category: "cosmetics"
  },
  {
    id: "herbal-cosmetics-set",
    name: "Titepati Herbal Cosmetics Set",
    description: "Complete glow skin toner, face wash, and moisturizer bundle",
    price: 85,
    originalPrice: 110,
    image: "/images/products/herbal-cosmetics.jpg",
    badge: "Sale",
    category: "cosmetics"
  }
]

const categories = ["all", "wellness", "essential-oils", "cosmetics"]

export default function ShopPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Header />
        <div className="pt-28 pb-20 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </main>
    }>
      <ShopContent />
    </Suspense>
  )
}

function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "all"
  )
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current)
      }
    }
  }, [])

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Our Collection
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
              Shop All Products
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Discover our complete range of Artemisia based products
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-border/50">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-2 text-sm text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm capitalize ecovera-transition bg-popover ${selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground/70 hover:text-foreground ecovera-shadow"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl text-foreground">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-foreground/70 hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowFilters(false)
                      }}
                      className={`w-full px-6 py-4 rounded-2xl text-left capitalize ecovera-transition ${selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground ecovera-shadow"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ProductCard({
  product,
  index,
  isVisible
}: {
  product: typeof products[0]
  index: number
  isVisible: boolean
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem } = useCart()

  return (
    <Link
      href={`/product/${product.id}`}
      className={`group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-card rounded-2xl sm:rounded-3xl overflow-hidden ecovera-shadow ecovera-transition group-hover:scale-[1.02]">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          {/* Skeleton */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
          />

          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover ecovera-transition group-hover:scale-105 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs tracking-wide ${product.badge === "Sale"
                ? "bg-destructive/10 text-destructive"
                : product.badge === "New"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent text-accent-foreground"
                }`}
            >
              {product.badge}
            </span>
          )}
          {/* Quick add button */}
          <button
            type="button"
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center translate-y-0 opacity-100 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 ecovera-transition ecovera-shadow"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
              })
            }}
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-6">
          <h3 className="font-serif text-base sm:text-xl text-foreground mb-1">{product.name}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{product.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-medium text-foreground">Rs. {product.price}</span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through">
                Rs. {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
