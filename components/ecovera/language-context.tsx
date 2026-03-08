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
        "footer.desc": "Natural skincare for those who believe beauty should feel as good as it looks.",
        "footer.shop": "Shop",
        "footer.support": "Support",
        "footer.all_products": "All Products",
        "footer.serums": "Serums",
        "footer.moisturizers": "Moisturizers",
        "footer.cleansers": "Cleansers",
        "footer.gift_sets": "Gift Sets",
        "footer.our_story": "Our Story",
        "footer.sustainability": "Sustainability",
        "footer.press": "Press",
        "footer.contact_us": "Contact Us",
        "footer.faq": "FAQ",
        "footer.returns": "Returns",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.rights": "All rights reserved.",
    },
    ne: {
        // Nav
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
        "footer.desc": "प्राकृतिक छाला स्याहार जसले तपाईंलाई राम्रो देखाउने मात्र होइन, राम्रो महसुस पनि गराउँछ।",
        "footer.shop": "पसल",
        "footer.support": "सहयोग",
        "footer.all_products": "सबै उत्पादनहरू",
        "footer.serums": "सेरमहरू",
        "footer.moisturizers": "मोइस्चराइजरहरू",
        "footer.cleansers": "क्लिन्जरहरू",
        "footer.gift_sets": "उपहार सेटहरू",
        "footer.our_story": "हाम्रो कथा",
        "footer.sustainability": "दिगोपन",
        "footer.press": "प्रेस",
        "footer.contact_us": "सम्पर्क गर्नुहोस्",
        "footer.faq": "प्रायः सोधिने प्रश्नहरू",
        "footer.returns": "फिर्ता",
        "footer.privacy": "गोपनीयता नीति",
        "footer.terms": "सेवाका सर्तहरू",
        "footer.rights": "सबै अधिकार सुरक्षित।",
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
