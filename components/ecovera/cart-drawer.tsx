"use client"

import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import { toast } from "sonner"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { useCart } from "./cart-context"
import { useLanguage } from "./language-context"

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart()
  const { t } = useLanguage()

  const shipping = 0
  const total = subtotal + shipping

  const handleCheckout = () => {
    toast.success("Checkout coming soon! We're setting up secure payments.", {
      duration: 4000,
    })
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="h-full w-full sm:max-w-[440px]">
        <DrawerHeader className="border-b border-border/50 p-6 py-2.5">
          <DrawerTitle className="font-serif text-2xl text-foreground">
            {t("cart.title")} ({items.length} {items.length === 1 ? t("cart.item") : t("cart.items")})
          </DrawerTitle>
        </DrawerHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <p className="font-medium text-foreground mb-2">{t("cart.empty")}</p>
              <DrawerClose asChild>
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  {t("cart.continue")}
                </button>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 sm:gap-4">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm sm:text-base text-foreground mb-1 font-semibold truncate">{item.name}</h3>
                    <p className="text-muted-foreground mb-3 text-xs sm:text-sm truncate">{item.description}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted ecovera-transition rounded-l-full"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted ecovera-transition rounded-r-full"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive ecovera-transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-medium text-foreground text-sm sm:text-base">Rs. {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter className="border-t border-border/50 p-4 sm:p-6 gap-4">
            {/* Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>{t("cart.subtotal")}</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>{t("cart.shipping")}</span>
                <span>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
              </div>
              <div className="flex justify-between text-base font-medium text-foreground pt-2 border-t border-border/50">
                <span>{t("cart.total")}</span>
                <span>Rs. {total}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 ecovera-transition"
            >
              {t("cart.checkout")}
            </button>

            <DrawerClose asChild>
              <button
                type="button"
                className="w-full border border-border text-foreground py-4 rounded-full font-medium hover:bg-muted ecovera-transition"
              >
                {t("cart.continue")}
              </button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
