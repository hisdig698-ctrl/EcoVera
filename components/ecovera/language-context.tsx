"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ne'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

export const dictionary: Record<Language, Record<string, string>> = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.shop": "Shop",
        "nav.about": "About",
        "nav.ingredients": "Ingredients",
        "nav.contact": "Contact",
        "nav.account": "Account",

        // Header Actions
        "header.search": "Search",
        "header.cart": "Cart",

        // Cart
        "cart.title": "Cart",
        "cart.items": "items",
        "cart.item": "item",
        "cart.empty": "Your cart is empty",
        "cart.continue": "Continue Shopping",
        "cart.subtotal": "Subtotal",
        "cart.shipping": "Shipping",
        "cart.total": "Total",
        "cart.checkout": "Checkout",

        // Footer
        "footer.desc": "A sustainable agribusiness transforming underutilized rural resources into premium, health-oriented Artemisia products.",
        "footer.shop": "Shop",
        "footer.support": "Support",
        "footer.all_products": "All Products",
        "footer.wellness": "Wellness & Health",
        "footer.essential_oils": "Essential Oils",
        "footer.cosmetics": "Cosmetics",
        "footer.gift_sets": "Gift Sets",
        "footer.our_story": "Our Story",
        "footer.ingredients": "Ingredients",
        "footer.sustainability": "Sustainability",
        "footer.press": "Press",
        "footer.contact_us": "Contact Us",
        "footer.faq": "FAQ",
        "footer.shipping": "Shipping",
        "footer.returns": "Returns",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.rights": "All rights reserved.",

        // Product Grid
        "products.collection_label": "Our Collection",
        "products.title": "Gentle essentials",
        "products.subtitle": "Thoughtfully crafted products for your daily skincare ritual",
        "products.view_all": "View All Products",
        "products.cat_wellness": "Wellness & Health",
        "products.cat_oils": "Essential Oils",
        "products.cat_cosmetics": "Cosmetics",
        "products.bestseller": "Bestseller",
        "products.new": "New",
        "products.premium": "Premium",
        "products.sale": "Sale",

        // Product Detail
        "product.essentials_label": "EcoVera Essentials",
        "product.back": "Back to Shop",
        "product.size": "Size",
        "product.quantity": "Quantity",
        "product.add_to_cart": "Add to Cart",
        "product.added": "Added to Cart",
        "product.buy_now": "Buy Now",
        "product.reviews": "reviews",
        "product.details": "Details",
        "product.how_to_use": "How to Use",
        "product.ingredients": "Ingredients",
        "product.delivery": "Delivery & Returns",
        "product.not_found": "Product Not Found",
        "product.not_found_desc": "The product you're looking for doesn't exist or has been removed.",
        "product.browse_all": "Browse All Products",
        "product.natural": "100% Natural",
        "product.cruelty_free": "Cruelty-Free",
        "product.eco_friendly": "Eco-Friendly",
        "product.expert_approved": "Expert Approved",

        // CTA Banner
        "cta.natural": "100% Natural",
        "cta.you": "100% You",
        "cta.no_chemicals": "No Harsh Chemicals",
        "cta.plant_based": "Plant-Based Goodness",
        "cta.ethical": "Ethically Sourced",
    },
    ne: {
        // Nav
        "nav.home": "गृहपृष्ठ",
        "nav.shop": "पसल",
        "nav.about": "हाम्रो बारेमा",
        "nav.ingredients": "सामग्रीहरू",
        "nav.contact": "सम्पर्क",
        "nav.account": "खाता",

        // Header Actions
        "header.search": "खोज्नुहोस्",
        "header.cart": "कार्ट",

        // Cart
        "cart.title": "कार्ट",
        "cart.items": "सामानहरू",
        "cart.item": "सामान",
        "cart.empty": "तपाईंको कार्ट खाली छ",
        "cart.continue": "किनमेल जारी राख्नुहोस्",
        "cart.subtotal": "उप-कुल",
        "cart.shipping": "डेलिभरी",
        "cart.total": "कुल",
        "cart.checkout": "चेकआउट",

        // Footer
        "footer.desc": "प्राकृतिक स्रोतबाट तयार पारिएको स्वास्थ्यवर्धक उत्पादनहरू।",
        "footer.shop": "पसल",
        "footer.support": "सहयोग",
        "footer.all_products": "सबै उत्पादनहरू",
        "footer.wellness": "स्वास्थ्य",
        "footer.essential_oils": "अत्यावश्यक तेल",
        "footer.cosmetics": "सौन्दर्य प्रसाधन",
        "footer.gift_sets": "उपहार सेटहरू",
        "footer.our_story": "हाम्रो कथा",
        "footer.ingredients": "सामग्रीहरू",
        "footer.sustainability": "दिगोपन",
        "footer.press": "प्रेस",
        "footer.contact_us": "सम्पर्क गर्नुहोस्",
        "footer.faq": "प्रायः सोधिने प्रश्नहरू",
        "footer.shipping": "डेलिभरी",
        "footer.returns": "फिर्ता",
        "footer.privacy": "गोपनीयता नीति",
        "footer.terms": "सेवाका सर्तहरू",
        "footer.rights": "सबै अधिकार सुरक्षित।",

        // Product Grid
        "products.collection_label": "हाम्रो संग्रह",
        "products.title": "प्राकृतिक आवश्यकताहरू",
        "products.subtitle": "तपाईंको दैनिक छाला हेरचाहको लागि सोचपूर्वक तयार पारिएका उत्पादनहरू",
        "products.view_all": "सबै उत्पादनहरू हेर्नुहोस्",
        "products.cat_wellness": "स्वास्थ्य र कल्याण",
        "products.cat_oils": "अत्यावश्यक तेल",
        "products.cat_cosmetics": "सौन्दर्य प्रसाधन",
        "products.bestseller": "लोकप्रिय",
        "products.new": "नयाँ",
        "products.premium": "प्रिमियम",
        "products.sale": "छुट",

        // Product Detail
        "product.essentials_label": "EcoVera आवश्यकताहरू",
        "product.back": "पसलमा फर्कनुहोस्",
        "product.size": "साइज",
        "product.quantity": "मात्रा",
        "product.add_to_cart": "कार्टमा थप्नुहोस्",
        "product.added": "कार्टमा थपियो",
        "product.buy_now": "अहिले किन्नुहोस्",
        "product.reviews": "समीक्षाहरू",
        "product.details": "विवरणहरू",
        "product.how_to_use": "कसरी प्रयोग गर्ने",
        "product.ingredients": "सामग्रीहरू",
        "product.delivery": "डेलिभरी र फिर्ता",
        "product.not_found": "उत्पादन भेटिएन",
        "product.not_found_desc": "तपाईंले खोजेको उत्पादन अवस्थित छैन वा हटाइएको छ।",
        "product.browse_all": "सबै उत्पादनहरू हेर्नुहोस्",
        "product.natural": "१००% प्राकृतिक",
        "product.cruelty_free": "क्रुरता-मुक्त",
        "product.eco_friendly": "वातावरण-मैत्री",
        "product.expert_approved": "विशेषज्ञ प्रमाणित",

        // CTA Banner
        "cta.natural": "१००% प्राकृतिक",
        "cta.you": "१००% तपाईं",
        "cta.no_chemicals": "कडा रसायन छैन",
        "cta.plant_based": "वनस्पति-आधारित",
        "cta.ethical": "नैतिक स्रोत",
    }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Hydration match + check local storage
        setMounted(true)
        const stored = localStorage.getItem('ecovera_lang') as Language
        if (stored === 'en' || stored === 'ne') {
            setLanguageState(stored)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('ecovera_lang', lang)
    }

    const t = (key: string): string => {
        return dictionary[language]?.[key] || dictionary['en'][key] || key
    }

    // Prevent mismatch by holding off until mounted if necessary, 
    // but we MUST provide the context to children during SSR
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
