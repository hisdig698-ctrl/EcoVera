"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

type Category = "wellness" | "cosmetics" | "essential-oils"

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
    category: "wellness" as Category
  },
  {
    id: "mugwort-incense",
    name: "Tibetan Mugwort Incense",
    description: "Traditional herbal incense for cleansing",
    price: 25,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    badge: "New",
    category: "wellness" as Category
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
    category: "essential-oils" as Category
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
    category: "cosmetics" as Category
  },
  {
    id: "herbal-cosmetics-set",
    name: "Titepati Herbal Cosmetics Set",
    description: "Complete glow skin toner, face wash, and moisturizer bundle",
    price: 85,
    originalPrice: 110,
    image: "/images/products/herbal-cosmetics.jpg",
    badge: "Sale",
    category: "cosmetics" as Category
  }
]

const categories = [
  { value: "wellness" as Category, label: "Wellness & Health" },
  { value: "essential-oils" as Category, label: "Essential Oils" },
  { value: "cosmetics" as Category, label: "Cosmetics" }
]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("wellness")
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

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

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Our Collection
          </span>
          <h2 className={`font-serif leading-tight text-foreground mb-4 text-balance text-4xl sm:text-5xl md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Gentle essentials
          </h2>
          <p className={`text-lg text-muted-foreground max-w-md mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            Thoughtfully crafted products for your daily skincare ritual
          </p>
        </div>

        {/* Segmented Control */}
        <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="inline-flex bg-background rounded-full p-1 gap-1 relative min-w-max">
            {/* Animated background slide */}
            <div
              className={`absolute top-1 bottom-1 bg-foreground rounded-full transition-all duration-300 ease-out shadow-sm
                ${selectedCategory === 'wellness' ? 'left-1 w-[160px]' : ''}
                ${selectedCategory === 'essential-oils' ? 'left-[161px] w-[130px]' : ''}
                ${selectedCategory === 'cosmetics' ? 'left-[291px] w-[105px]' : ''}
              `}
            />
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.value
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category.label}
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
                    alt={product.name}
                    fill
                    className="object-cover ecovera-transition group-hover:scale-105"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide bg-primary text-primary-foreground ${product.badge === "Sale"
                        ? "bg-destructive text-destructive-foreground"
                        : product.badge === "New"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                        }`}
                    >
                      {product.badge}
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
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: product.image
                      })
                    }}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Rs. {product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {product.originalPrice}
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
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
