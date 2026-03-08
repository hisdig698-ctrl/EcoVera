"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"

const allProducts = [
    { id: "radiance-serum", name: "Radiance Serum", category: "Serum", price: 68, image: "/images/products/serum-bottles-1.jpg" },
    { id: "hydrating-serum", name: "Hydrating Serum", category: "Serum", price: 62, image: "/images/products/eye-serum-bottles.jpg" },
    { id: "age-defense-serum", name: "Age Defense Serum", category: "Serum", price: 78, image: "/images/products/amber-dropper-bottles.jpg" },
    { id: "glow-serum", name: "Glow Serum", category: "Serum", price: 58, image: "/images/products/spray-bottles.jpg" },
    { id: "hydra-cream", name: "Hydra Cream", category: "Cream", price: 54, image: "/images/products/cream-jars-colored.jpg" },
    { id: "gentle-cleanser", name: "Gentle Cleanser", category: "Cleanser", price: 38, image: "/images/products/tube-bottles.jpg" },
    { id: "night-cream", name: "Night Cream", category: "Cream", price: 64, image: "/images/products/jars-wooden-lid.jpg" },
    { id: "day-cream-spf", name: "Day Cream SPF 30", category: "Cream", price: 58, image: "/images/products/pump-bottles-lavender.jpg" },
    { id: "renewal-oil", name: "Renewal Oil", category: "Oil", price: 72, image: "/images/products/amber-dropper-bottles.jpg" },
    { id: "rosehip-oil", name: "Rosehip Oil", category: "Oil", price: 48, image: "/images/products/serum-bottles-1.png" },
    { id: "jojoba-oil", name: "Jojoba Oil", category: "Oil", price: 42, image: "/images/products/spray-bottles.jpg" },
    { id: "argan-oil", name: "Argan Oil", category: "Oil", price: 56, image: "/images/products/pump-bottles-cream.jpg" },
]

interface SearchOverlayProps {
    isOpen: boolean
    onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const results = query.length > 0
        ? allProducts.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        : []

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
            setQuery("")
        }
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (isOpen) window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Search Panel */}
            <div className="relative z-10 w-full max-w-2xl mx-auto mt-4 sm:mt-20 px-4">
                <div className="bg-background rounded-[2rem] ecovera-shadow overflow-hidden animate-scale-fade-in">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-6 py-5 border-b border-border/50">
                        <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products..."
                            className="flex-1 bg-transparent text-foreground text-lg placeholder:text-muted-foreground/60 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-1 text-muted-foreground hover:text-foreground ecovera-transition"
                            aria-label="Close search"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {query.length > 0 && results.length === 0 && (
                            <div className="px-6 py-10 text-center text-muted-foreground">
                                <p className="text-base">No products found for &ldquo;{query}&rdquo;</p>
                                <p className="text-sm mt-2">Try searching for serums, creams, or oils</p>
                            </div>
                        )}

                        {results.length > 0 && (
                            <div className="p-3">
                                {results.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/product/${product.id}`}
                                        onClick={onClose}
                                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-muted ecovera-transition group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary ecovera-transition">{product.name}</p>
                                            <p className="text-xs text-muted-foreground">{product.category}</p>
                                        </div>
                                        <span className="text-sm font-medium text-foreground">Rs. {product.price}</span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {query.length === 0 && (
                            <div className="px-6 py-8 text-center text-muted-foreground">
                                <p className="text-sm">Start typing to search products</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
