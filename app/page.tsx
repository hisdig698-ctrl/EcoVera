import { Header } from "@/components/ecovera/header"
import { Hero } from "@/components/ecovera/hero"
import { TrustBadges } from "@/components/ecovera/trust-badges"
import { FeatureSection } from "@/components/ecovera/feature-section"
import { ProductGrid } from "@/components/ecovera/product-grid"
import { Testimonials } from "@/components/ecovera/testimonials"
import { CTABanner } from "@/components/ecovera/cta-banner"
import { Newsletter } from "@/components/ecovera/newsletter"
import { Footer } from "@/components/ecovera/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <ProductGrid />
      <FeatureSection />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  )
}
