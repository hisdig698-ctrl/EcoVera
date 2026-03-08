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
  // Serums
  {
    id: "radiance-serum",
    name: "Radiance Serum",
    description: "Vitamin C brightening formula",
    price: 68,
    originalPrice: null,
    image: "/images/products/serum-bottles-1.jpg",
    badge: "Bestseller",
    category: "serums"
  },
  {
    id: "hydrating-serum",
    name: "Hydrating Serum",
    description: "Hyaluronic acid moisture boost",
    price: 62,
    originalPrice: null,
    image: "/images/products/eye-serum-bottles.jpg",
    badge: null,
    category: "serums"
  },
  {
    id: "age-defense-serum",
    name: "Age Defense Serum",
    description: "Retinol & peptide complex",
    price: 78,
    originalPrice: null,
    image: "/images/products/amber-dropper-bottles.jpg",
    badge: "New",
    category: "serums"
  },
  {
    id: "glow-serum",
    name: "Glow Serum",
    description: "Niacinamide brightening boost",
    price: 58,
    originalPrice: 68,
    image: "/images/products/spray-bottles.jpg",
    badge: "Sale",
    category: "serums"
  },
  // Creams
  {
    id: "hydra-cream",
    name: "Hydra Cream",
    description: "Deep moisture with hyaluronic acid",
    price: 54,
    originalPrice: null,
    image: "/images/products/cream-jars-colored.jpg",
    badge: null,
    category: "moisturizers"
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Cleanser",
    description: "Soothing botanical wash",
    price: 38,
    originalPrice: 48,
    image: "/images/products/tube-bottles.jpg",
    badge: "Sale",
    category: "cleansers"
  },
  {
    id: "night-cream",
    name: "Night Cream",
    description: "Restorative overnight treatment",
    price: 64,
    originalPrice: null,
    image: "/images/products/jars-wooden-lid.jpg",
    badge: "Bestseller",
    category: "moisturizers"
  },
  {
    id: "day-cream-spf",
    name: "Day Cream SPF 30",
    description: "Protection & hydration",
    price: 58,
    originalPrice: null,
    image: "/images/products/pump-bottles-lavender.jpg",
    badge: null,
    category: "moisturizers"
  },
  // Oils
  {
    id: "renewal-oil",
    name: "Renewal Oil",
    description: "Nourishing facial oil blend",
    price: 72,
    originalPrice: null,
    image: "/images/products/amber-dropper-bottles.jpg",
    badge: "New",
    category: "oils"
  },
  {
    id: "rosehip-oil",
    name: "Rosehip Oil",
    description: "Pure organic rosehip extract",
    price: 48,
    originalPrice: null,
    image: "/images/products/serum-bottles-1.jpg",
    badge: null,
    category: "oils"
  },
  {
    id: "jojoba-oil",
    name: "Jojoba Oil",
    description: "Balancing & lightweight",
    price: 42,
    originalPrice: null,
    image: "/images/products/spray-bottles.jpg",
    badge: null,
    category: "oils"
  },
  {
    id: "argan-oil",
    name: "Argan Oil",
    description: "Moroccan beauty elixir",
    price: 56,
    originalPrice: null,
    image: "/images/products/pump-bottles-cream.jpg",
    badge: "Bestseller",
    category: "oils"
  },
  // Masks & Toners
  {
    id: "glow-mask",
    name: "Glow Mask",
    description: "Weekly brightening treatment",
    price: 45,
    originalPrice: null,
    image: "/images/products/mask.jpg",
    badge: null,
    category: "masks"
  },
  {
    id: "balance-toner",
    name: "Balance Toner",
    description: "pH restoring mist",
    price: 32,
    originalPrice: null,
    image: "/images/products/toner.jpg",
    badge: "New",
    category: "toners"
  }
]

const categories = ["all", "serums", "moisturizers", "cleansers", "oils", "masks", "toners"]

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
              Discover our complete range of natural skincare essentials
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
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 ecovera-transition ecovera-shadow"
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
