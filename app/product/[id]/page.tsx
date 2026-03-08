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
  "radiance-serum": {
    id: "radiance-serum",
    name: "Radiance Serum",
    tagline: "Illuminate your natural glow",
    description: "A lightweight, fast-absorbing serum infused with Vitamin C and botanical extracts. Designed to brighten, even skin tone, and reveal your skin's natural radiance.",
    price: 68,
    originalPrice: null,
    image: "/images/products/serum-bottles-1.jpg",
    sizes: ["30ml", "50ml"],
    details: "Our Radiance Serum combines 15% stabilized Vitamin C with rosehip seed oil and sea buckthorn extract. The formula is designed to penetrate deep into the skin, targeting dark spots and uneven tone while protecting against environmental stressors. Suitable for all skin types, this serum is your daily dose of luminosity.",
    howToUse: "Apply 3-4 drops to cleansed face and neck morning and evening. Gently pat into skin until absorbed. Follow with your favorite EcoVera moisturizer. For best results, use consistently for 4-6 weeks.",
    ingredients: "Aqua, Ascorbic Acid (Vitamin C), Rosa Canina Seed Oil, Hippophae Rhamnoides Oil, Glycerin, Niacinamide, Tocopherol (Vitamin E), Ferulic Acid, Aloe Barbadensis Leaf Juice, Citrus Aurantium Dulcis Peel Oil, Lavandula Angustifolia Oil.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "hydrating-serum": {
    id: "hydrating-serum",
    name: "Hydrating Serum",
    tagline: "Quench your skin's thirst",
    description: "A deeply hydrating serum with hyaluronic acid that draws moisture into the skin for a plump, dewy complexion all day long.",
    price: 62,
    originalPrice: null,
    image: "/images/products/eye-serum-bottles.jpg",
    sizes: ["30ml", "50ml"],
    details: "Our Hydrating Serum features multi-weight hyaluronic acid molecules that penetrate different layers of the skin for comprehensive hydration. Enhanced with aloe vera and vitamin B5 for soothing, lasting comfort.",
    howToUse: "Apply 2-3 drops to damp skin after cleansing. Gently press into face and neck. Follow with moisturizer to seal in hydration. Use morning and evening.",
    ingredients: "Aqua, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Juice, Glycerin, Betaine, Allantoin, Chamomilla Recutita Extract, Tocopherol.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "age-defense-serum": {
    id: "age-defense-serum",
    name: "Age Defense Serum",
    tagline: "Turn back time, naturally",
    description: "A powerful anti-aging serum combining retinol with peptide complex to reduce fine lines and restore youthful radiance.",
    price: 78,
    originalPrice: null,
    image: "/images/products/amber-dropper-bottles.jpg",
    sizes: ["30ml", "50ml"],
    details: "Our Age Defense Serum features encapsulated retinol for gentle, time-released delivery combined with a tri-peptide complex. Bakuchiol provides additional anti-aging benefits without irritation, making it suitable for sensitive skin.",
    howToUse: "Apply 2-3 drops to clean face and neck in the evening. Start with every other night and gradually increase to nightly use. Always use SPF during the day when using this product.",
    ingredients: "Aqua, Retinol, Bakuchiol, Tripeptide-1, Hexapeptide-8, Squalane, Jojoba Seed Oil, Vitamin E, Niacinamide, Ferulic Acid.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "glow-serum": {
    id: "glow-serum",
    name: "Glow Serum",
    tagline: "Everyday luminosity",
    description: "A niacinamide-boosted brightening serum that minimizes pores, evens skin tone, and delivers a healthy, lit-from-within glow.",
    price: 58,
    originalPrice: 68,
    image: "/images/products/spray-bottles.jpg",
    sizes: ["30ml", "50ml"],
    details: "Powered by 10% niacinamide with zinc PCA and licorice root extract, this serum tackles dullness, uneven texture, and excess oil production. Lightweight and fast-absorbing for all skin types.",
    howToUse: "Apply 3-4 drops to cleansed skin morning and evening. Layer under moisturizer and sunscreen. Suitable for daily use.",
    ingredients: "Aqua, Niacinamide, Zinc PCA, Glycyrrhiza Glabra Root Extract, Hyaluronic Acid, Glycerin, Panthenol, Allantoin, Tocopherol.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "hydra-cream": {
    id: "hydra-cream",
    name: "Hydra Cream",
    tagline: "Deep moisture, lasting comfort",
    description: "A rich yet lightweight moisturizer that delivers intense hydration without heaviness. Formulated with hyaluronic acid and botanical butters for all-day nourishment.",
    price: 54,
    originalPrice: null,
    image: "/images/products/cream-jars-colored.jpg",
    sizes: ["50ml", "100ml"],
    details: "Hydra Cream features multi-weight hyaluronic acid to hydrate at every level of the skin. Shea butter and jojoba oil lock in moisture while squalane provides a silky, non-greasy finish. Perfect for normal to dry skin seeking lasting comfort.",
    howToUse: "After cleansing and serum, apply a small amount to face and neck. Massage gently in upward motions. Use morning and evening as the final step of your skincare routine.",
    ingredients: "Aqua, Butyrospermum Parkii Butter, Simmondsia Chinensis Seed Oil, Sodium Hyaluronate, Squalane, Glycerin, Cetearyl Alcohol, Calendula Officinalis Extract, Chamomilla Recutita Extract, Tocopherol.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "gentle-cleanser": {
    id: "gentle-cleanser",
    name: "Gentle Cleanser",
    tagline: "Cleanse without compromise",
    description: "A soothing botanical wash that removes impurities while respecting your skin's natural balance. Perfect for sensitive skin and daily use.",
    price: 38,
    originalPrice: 48,
    image: "/images/products/tube-bottles.jpg",
    sizes: ["150ml", "250ml"],
    details: "Our Gentle Cleanser uses coconut-derived surfactants that cleanse effectively without stripping. Enriched with chamomile, oat extract, and aloe vera, it calms and soothes as it cleanses. pH-balanced and dermatologist tested for sensitive skin.",
    howToUse: "Wet face with lukewarm water. Apply a small amount to fingertips and massage onto face in circular motions. Rinse thoroughly. Use morning and evening.",
    ingredients: "Aqua, Coco-Glucoside, Glycerin, Avena Sativa Kernel Extract, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract, Panthenol, Allantoin, Citric Acid, Benzyl Alcohol, Potassium Sorbate.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "night-cream": {
    id: "night-cream",
    name: "Night Cream",
    tagline: "Wake up to renewed skin",
    description: "A restorative overnight treatment that works while you sleep to repair, nourish, and rejuvenate your skin.",
    price: 64,
    originalPrice: null,
    image: "/images/products/jars-wooden-lid.jpg",
    sizes: ["50ml", "100ml"],
    details: "Our Night Cream combines powerful botanical actives including bakuchiol, shea butter, and evening primrose oil. The rich yet breathable formula supports skin's natural overnight repair process.",
    howToUse: "Apply generously to clean face and neck as the last step of your evening routine. Gently massage in upward strokes. Use nightly for best results.",
    ingredients: "Aqua, Butyrospermum Parkii Butter, Oenothera Biennis Oil, Bakuchiol, Squalane, Ceramide NP, Peptide Complex, Tocopherol, Lavandula Angustifolia Oil.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "day-cream-spf": {
    id: "day-cream-spf",
    name: "Day Cream SPF 30",
    tagline: "Protect and hydrate daily",
    description: "An all-in-one daily moisturizer with broad-spectrum SPF 30 protection and hydrating botanicals for effortless sun care.",
    price: 58,
    originalPrice: null,
    image: "/images/products/pump-bottles-lavender.jpg",
    sizes: ["50ml", "100ml"],
    details: "Our Day Cream SPF 30 uses mineral-based zinc oxide for reef-safe sun protection. Niacinamide and green tea extract provide antioxidant defense while hyaluronic acid keeps skin hydrated throughout the day.",
    howToUse: "Apply liberally to face and neck as the last step of your morning routine. Reapply every 2 hours during prolonged sun exposure.",
    ingredients: "Aqua, Zinc Oxide, Niacinamide, Camellia Sinensis Leaf Extract, Sodium Hyaluronate, Glycerin, Squalane, Tocopherol, Aloe Barbadensis Leaf Juice.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "renewal-oil": {
    id: "renewal-oil",
    name: "Renewal Oil",
    tagline: "Nourish deeply, glow eternally",
    description: "A luxurious blend of precious botanical oils that deeply nourish and restore skin overnight. Wake up to softer, more supple skin.",
    price: 72,
    originalPrice: null,
    image: "/images/products/amber-dropper-bottles.jpg",
    sizes: ["30ml", "50ml"],
    details: "Renewal Oil combines argan, rosehip, and marula oils with vitamin E for intensive overnight nourishment. This dry oil absorbs quickly, leaving skin soft without residue. Ideal for mature or dehydrated skin seeking restoration.",
    howToUse: "Apply 4-6 drops to palms and warm between hands. Press gently onto face and neck as the final step of your evening routine. Can also be mixed with moisturizer for added hydration.",
    ingredients: "Argania Spinosa Kernel Oil, Rosa Canina Seed Oil, Sclerocarya Birrea Seed Oil, Tocopherol, Rosa Damascena Flower Oil, Lavandula Angustifolia Oil, Helianthus Annuus Seed Oil, Limonene, Linalool.",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "rosehip-oil": {
    id: "rosehip-oil",
    name: "Rosehip Oil",
    tagline: "Pure organic radiance",
    description: "Cold-pressed pure organic rosehip seed oil rich in vitamins A and C to brighten, firm, and restore your skin's natural vitality.",
    price: 48,
    originalPrice: null,
    image: "/images/products/serum-bottles-1.jpg",
    sizes: ["30ml", "50ml"],
    details: "Our Rosehip Oil is 100% pure, cold-pressed from organically grown rosehip seeds. Rich in essential fatty acids and natural retinoids, it helps reduce scars, improve skin elasticity, and even out skin tone.",
    howToUse: "Apply 3-5 drops to clean, slightly damp skin. Gently press and pat into face and neck. Can be used alone or mixed with your moisturizer. Suitable for morning and evening use.",
    ingredients: "Rosa Canina Seed Oil (100% Cold-Pressed Organic).",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "jojoba-oil": {
    id: "jojoba-oil",
    name: "Jojoba Oil",
    tagline: "Balance beautifully",
    description: "A lightweight, balancing facial oil that mimics skin's natural sebum to regulate oil production and provide deep, non-greasy hydration.",
    price: 42,
    originalPrice: null,
    image: "/images/products/spray-bottles.jpg",
    sizes: ["30ml", "50ml"],
    details: "Our golden jojoba oil is organically sourced and cold-pressed to preserve its natural vitamins and minerals. Its unique molecular structure mirrors human sebum, making it ideal for all skin types including oily and acne-prone skin.",
    howToUse: "Apply 2-4 drops to clean skin. Massage gently into face, neck, and any dry areas. Use as a standalone moisturizer or layer under cream. Perfect for morning and evening use.",
    ingredients: "Simmondsia Chinensis Seed Oil (100% Cold-Pressed Organic).",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
  },
  "argan-oil": {
    id: "argan-oil",
    name: "Argan Oil",
    tagline: "Moroccan beauty elixir",
    description: "Pure Moroccan argan oil for luxurious nourishment. Rich in vitamin E and fatty acids to soften, smooth, and restore your skin.",
    price: 56,
    originalPrice: null,
    image: "/images/products/pump-bottles-cream.jpg",
    sizes: ["30ml", "50ml"],
    details: "Sourced from certified fair-trade cooperatives in Morocco, our argan oil is hand-extracted and cold-pressed. This golden elixir is packed with antioxidants, omega fatty acids, and vitamin E for superior skin nourishment.",
    howToUse: "Warm 3-5 drops between palms. Press gently onto face, neck, and décolletage. Can also be used on hair, nails, and body. Best applied to slightly damp skin for maximum absorption.",
    ingredients: "Argania Spinosa Kernel Oil (100% Fair-Trade Organic).",
    delivery: "Free standard shipping on orders over $50. Express shipping available at checkout. All orders ship within 1-2 business days. Returns accepted within 30 days of purchase if product is unused and sealed."
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
