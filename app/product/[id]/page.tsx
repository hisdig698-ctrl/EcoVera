"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Minus, Plus, ChevronDown, Leaf, Heart, Award, Recycle, Star, Check } from "lucide-react"
import { Header } from "@/components/ecovera/header"
import { Footer } from "@/components/ecovera/footer"
import { useCart } from "@/components/ecovera/cart-context"

const products: Record<string, {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice: number | null
  image: string
  sizes: string[]
  details: string
  howToUse: string
  ingredients: string
  delivery: string
}> = {
  "hand-sanitizer": {
    id: "hand-sanitizer",
    name: "Titepati Hand Sanitizer",
    tagline: "Natural protection, gentle on skin",
    description: "EcoVera's Titepati Hand Sanitizer features natural Artemisia extracts. It kills 99.9% of germs while leaving your skin feeling soft, combining powerful antimicrobial properties with deep hydration.",
    price: 15,
    originalPrice: 18,
    image: "/images/products/hand-sanitizer.jpg",
    sizes: ["100ml", "500ml"],
    details: "Formulated with locally-sourced Titepati (Artemisia), this sanitizing gel leverages the plant’s robust antibacterial and antiviral properties. By utilizing underused rural resources, each bottle helps support local farmers and provides a sustainable, eco-friendly alternative to synthetic sanitizers.",
    howToUse: "Apply a small amount to the palm of one hand. Rub hands together, covering all surfaces of hands and fingers until dry. Do not rinse.",
    ingredients: "Alcohol Denat., Aqua, Artemisia Vulgaris (Titepati) Extract, Glycerin, Aloe Barbadensis Leaf Juice, Tocopherol.",
    delivery: "Free standard shipping on orders over $50. Sourced responsibly and packaged in recyclable materials."
  },
  "mugwort-incense": {
    id: "mugwort-incense",
    name: "Tibetan Mugwort Incense",
    tagline: "Purify your space with ancient wisdom",
    description: "Hand-rolled Tibetan incense made from sustainably harvested Mugwort. Used traditionally for clearing negative energy, meditation, and relaxation.",
    price: 25,
    originalPrice: null,
    image: "/images/products/mugwort-incense.jpg",
    sizes: ["Pack of 30", "Pack of 60"],
    details: "Our Tibetan Mugwort Incense is crafted using traditional techniques that have been passed down for generations. The main component, Titepati (Black Sage), is renowned in Ayurvedic medicine for its purifying and therapeutic aroma. Buying this product directly supports community-based labor resources.",
    howToUse: "Light the tip of the incense stick, gently blow out the flame to allow it to smolder. Place in a heat-proof incense holder. Never leave unattended. Perfect for meditation, yoga, or unwinding before bed.",
    ingredients: "Artemisia Vulgaris (Mugwort) Leaves, Natural Herbal Binders, Sandalwood Base. No artificial fragrances or synthetic fillers.",
    delivery: "Free standard shipping on orders over $50. Comes securely wrapped in eco-friendly protective packaging."
  },
  "mugwort-oil": {
    id: "mugwort-oil",
    name: "Mugwort Essential Oil",
    tagline: "The essence of Artemisia",
    description: "Pure, high-grade Mugwort essential oil. A powerful therapeutic extract known for its calming, anti-inflammatory, and antimicrobial benefits.",
    price: 45,
    originalPrice: null,
    image: "/images/products/mugwort-oil.jpg",
    sizes: ["15ml", "50ml"],
    details: "Steam-distilled from freshly harvested Artemisia plants grown on previously underutilized agricultural land. This pure essential oil is highly concentrated and ideal for aromatherapy, custom skincare blends, or traditional holistic remedies. This high-margin product is a prime example of our Phase 2 value creation.",
    howToUse: "For aromatherapy, add 3-5 drops to a diffuser. For topical use, strictly dilute with a carrier oil (such as jojoba or coconut oil) before applying to the skin. Do not ingest.",
    ingredients: "100% Pure Artemisia Vulgaris (Mugwort) Essential Oil.",
    delivery: "Free standard shipping on orders over $50. Packaged in a UV-protective amber glass bottle to preserve potency."
  },
  "titepati-soap": {
    id: "titepati-soap",
    name: "Titepati Skin Treatment Soap",
    tagline: "Ayurvedic cleansing and healing",
    description: "A premium Ayurvedic Okhati therapeutic soap. Gently cleanses while treating common skin conditions using natural Titepati extracts.",
    price: 12,
    originalPrice: null,
    image: "/images/products/titepati-soap.jpg",
    sizes: ["125g"],
    details: "This artisanal soap combines the healing power of Mugwort with traditional Ayurvedic botanicals. It helps soothe irritated skin, reduce inflammation, and combat acne. Every purchase supports our SDG goals of providing natural health products and decent work to rural communities.",
    howToUse: "Lather with warm water and massage gently into the skin. Rinse thoroughly. Gentle enough for daily use on face and body.",
    ingredients: "Saponified Coconut Oil, Palm Oil (Sustainable), Artemisia Vulgaris Extract, Neem Extract, Essential Oil Blend, Aqua.",
    delivery: "Free standard shipping on orders over $50. Shipped in 100% biodegradable paper packaging."
  },
  "herbal-cosmetics-set": {
    id: "herbal-cosmetics-set",
    name: "Titepati Herbal Cosmetics Set",
    tagline: "Complete natural glow regimen",
    description: "Experience the full spectrum of Artemisia's benefits with our complete skincare bundle featuring a glow skin toner, face wash, and moisturizer.",
    price: 85,
    originalPrice: 110,
    image: "/images/products/herbal-cosmetics.jpg",
    sizes: ["Standard Bundle"],
    details: "This comprehensive set leverages the antioxidant and antimicrobial properties of Titepati to promote a healthy, radiant complexion. Produced through our community-centered farming model, these cosmetics stand at the forefront of the growing global demand for plant-based health solutions.",
    howToUse: "Step 1: Cleanse with the face wash morning and night. Step 2: Apply toner with a cotton pad to balance pH. Step 3: Massage moisturizer into face and neck to lock in hydration.",
    ingredients: "Various botanical extracts focusing heavily on Artemisia Vulgaris. See individual packaging for detailed ingredient lists. 100% Natural.",
    delivery: "Free standard shipping on all bundle orders. Thoughtfully packaged in an eco-friendly gift box."
  }
}

const benefits = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Heart, label: "Cruelty-Free" },
  { icon: Recycle, label: "Eco-Friendly" },
  { icon: Award, label: "Expert Approved" }
]

type AccordionSection = "details" | "howToUse" | "ingredients" | "delivery"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products[productId]
  const { addItem, setIsOpen } = useCart()

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "30ml")
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>("details")
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    if (!product) return
    addItem({
      id: product.id,
      name: `${product.name} — ${selectedSize}`,
      description: product.description,
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
      name: `${product.name} — ${selectedSize}`,
      description: product.description,
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
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Product Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-primary/90 ecovera-shadow"
            >
              Browse All Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const accordionItems: { key: AccordionSection; title: string; content: string }[] = [
    { key: "details", title: "Details", content: product.details },
    { key: "howToUse", title: "How to Use", content: product.howToUse },
    { key: "ingredients", title: "Ingredients", content: product.ingredients },
    { key: "delivery", title: "Delivery & Returns", content: product.delivery }
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
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-card ecovera-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
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
                  EcoVera Essentials
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground italic mb-4">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(128 reviews)</span>
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-medium text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg sm:text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Size</label>
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
                <label className="text-sm font-medium text-foreground mb-3 block">Quantity</label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 ecovera-shadow">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
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
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide ecovera-transition hover:bg-foreground/5"
                >
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 ecovera-shadow bg-transparent shadow-none rounded-md"
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center">{benefit.label}</span>
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
                      <span className="font-medium text-foreground text-sm sm:text-base">{item.title}</span>
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
