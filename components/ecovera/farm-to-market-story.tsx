"use client"

import Image from "next/image"
import { Leaf, Award, CheckCircle2 } from "lucide-react"

interface StoryStep {
  title: string
  subtitle: string
  description: string
  image: string
  alt: string
}

const storySteps: StoryStep[] = [
  {
    title: "Step 1: Pristine Cultivation",
    subtitle: "The Foundation",
    description: "Local farmers cultivate Artemisia on bare, under-utilized land using sustainable practices. No chemical interventions—just nature and care.",
    image: "/images/story/farm-cultivation.jpg",
    alt: "Artemisia fields - Fresh cultivation in Nepal"
  },
  {
    title: "Step 2: Traditional Harvesting",
    subtitle: "Peak Potency",
    description: "Premium Artemisia is carefully harvested at peak potency, then traditionally dried to preserve all bioactive compounds and essential oils.",
    image: "/images/story/harvesting-drying.jpg",
    alt: "Harvesting and drying process of Artemisia plant"
  },
  {
    title: "Step 3: Handcrafted Production",
    subtitle: "Artisan Quality",
    description: "Using cold-pressed methods, we transform premium Artemisia into luxurious soaps. Each batch is carefully formulated for maximum efficacy.",
    image: "/images/story/soap-production.jpg",
    alt: "Handcrafted soap production process"
  },
  {
    title: "Step 4: Retail Ready",
    subtitle: "Global Distribution",
    description: "Premium packaged soaps reach your hands—backed by scientific research, Made in Nepal, and ready to transform your skincare routine.",
    image: "/images/story/finished-products.jpg",
    alt: "Finished EcoVera products ready for retail"
  }
]

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Babita Giri",
    role: "Co-Founder & COO",
    bio: "Operations, partnerships & community impact",
    image: "/images/story/team-member-1.jpg"
  },
  {
    name: "Sandesh Mgr",
    role: "Co-Founder & CMO",
    bio: "Marketing, branding & business growth",
    image: "/images/story/team-member-2.jpg"
  },
  {
    name: "Siddanta Sodari",
    role: "Co-Founder & CEO",
    bio: "Strategy, leadership & product vision",
    image: "/images/story/team-member-3.jpg"
  },
  {
    name: "Nishan Thapa",
    role: "Co-Founder & CTO",
    bio: "Research, innovation & product development",
    image: "/images/story/team-member-4.jpg"
  }
]

export function JourneySection() {
  return (
    <section className="py-16 sm:py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            From Farm to Soap: Our Visual Journey
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Real people, real farms, real impact. Every stage of our process is grounded in transparency and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {storySteps.map((step, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden border border-border/30 hover:border-primary/50 transition">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/10 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-xs text-primary/70 uppercase tracking-wider">{step.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-border/30 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            The EcoVera Team
          </h2>
          <p className="text-lg text-foreground/80">
            A passionate team of innovators, farmers, and change-makers united by a mission to regenerate communities and transform wellness globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 border border-border/30 bg-gradient-to-br from-primary/20 to-primary/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{member.role}</h4>
              <p className="text-xs text-foreground/60">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Made In Nepal Partnership */}
        <div className="mt-16 p-8 bg-background border-2 border-primary/30 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/story/made-in-nepal-store.jpg"
                alt="Made In Nepal Store Partnership"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Partnership: Made In Nepal Store
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                We proudly partner with Made In Nepal Store to bring authentic, locally-sourced Artemisia products to the global market. This partnership ensures 100% authenticity, direct support to local communities, and genuine Nepali heritage reaching the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FarmToMarketFlow() {
  return (
    <div className="space-y-8">
      <JourneySection />
      <TeamSection />
    </div>
  )
}
