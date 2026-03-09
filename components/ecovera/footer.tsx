"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "./language-context"

const getFooterLinks = (t: (key: string) => string) => ({
  shop: [
    { name: t("footer.all_products"), href: "/shop" },
    { name: t("footer.wellness"), href: "/shop?category=wellness" },
    { name: t("footer.essential_oils"), href: "/shop?category=essential-oils" },
    { name: t("footer.cosmetics"), href: "/shop?category=cosmetics" }
  ],
  about: [
    { name: t("footer.our_story"), href: "/about" },
    { name: t("footer.ingredients"), href: "/ingredients" },
    { name: t("footer.sustainability"), href: "/about#sustainability" }
  ],
  support: [
    { name: t("footer.contact_us"), href: "/contact" },
    { name: t("footer.faq"), href: "/faq" },
    { name: t("footer.shipping"), href: "/shipping" },
    { name: t("footer.returns"), href: "/returns" }
  ]
})

export function Footer() {
  const { t } = useLanguage()
  const footerLinks = getFooterLinks(t)

  return (
    <footer className="bg-card pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/20 whitespace-nowrap leading-none">
          EcoVera
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-3xl text-foreground mb-4">EcoVera</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition ecovera-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition ecovera-shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground ecovera-transition ecovera-shadow"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t("footer.shop")}</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground ecovera-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t("nav.about")}</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground ecovera-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">{t("footer.support")}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground ecovera-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ecovera. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground ecovera-transition">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground ecovera-transition">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
