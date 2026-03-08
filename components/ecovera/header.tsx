"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, User, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { CartDrawer } from "./cart-drawer"
import { useCart } from "./cart-context"
import { SearchOverlay } from "./search-overlay"
import { useLanguage } from "./language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
        <div className="flex items-center justify-between h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground ecovera-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
            >
              {t('nav.shop')}
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/ingredients"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
            >
              {t('nav.ingredients')}
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wider text-foreground">EcoVera</h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
              className="text-xs font-semibold tracking-widest uppercase text-foreground/70 hover:text-foreground ecovera-transition px-2"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'EN' : 'NE'}
            </button>
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground/70 hover:text-foreground ecovera-transition"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-foreground ecovera-transition"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/account"
              className="hidden sm:block p-2 text-foreground/70 hover:text-foreground ecovera-transition"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-foreground/70 hover:text-foreground ecovera-transition"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0 -right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <CartDrawer />
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden ecovera-transition ${isMenuOpen ? "max-h-80 pb-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            <Link
              href="/shop"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.shop')}
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/ingredients"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.ingredients')}
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <Link
              href="/account"
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground ecovera-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.account')}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
