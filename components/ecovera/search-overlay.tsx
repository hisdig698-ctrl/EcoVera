"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"

const allProducts = [
    { id: "hand-sanitizer", name: "Titepati Hand Sanitizer", category: "Wellness & Health", price: 15, image: "/images/products/hand-sanitizer.jpg" },
    { id: "mugwort-incense", name: "Tibetan Mugwort Incense", category: "Wellness & Health", price: 20, image: "/images/products/mugwort-incense.jpg" },
    { id: "mugwort-oil", name: "Mugwort Essential Oil (50ml)", category: "Essential Oils", price: 35, image: "/images/products/mugwort-oil.jpg" },
    { id: "titepati-soap", name: "Titepati Skin Treatment Soap", category: "Cosmetics", price: 12, image: "/images/products/titepati-soap.jpg" },
    { id: "herbal-cosmetics", name: "Titepati Herbal Cosmetics Set", category: "Cosmetics", price: 85, image: "/images/products/herbal-cosmetics.jpg" },
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
