import { useState } from "react";
import { cartItems as initialCart, alternatives, CartItem, Product } from "@/data/products";
import { CartItemCard } from "@/components/CartItemCard";
import { AlternativesDrawer } from "@/components/AlternativesDrawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, AlertTriangle, Shield } from "lucide-react";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const activeItem = cart.find((i) => i.product.id === activeProductId);
  const activeAlts = activeProductId ? alternatives[activeProductId] || [] : [];

  const outOfStockCount = cart.filter((i) => !i.product.inStock && !i.selectedAlternative).length;

  const handleChooseAlternative = (productId: string) => {
    setActiveProductId(productId);
    setDrawerOpen(true);
  };

  const handleSelectAlternative = (alt: Product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === activeProductId
          ? { ...item, selectedAlternative: alt }
          : item
      )
    );
  };

  const handleRemove = (productId: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const subtotal = cart.reduce((sum, item) => {
    const p = item.selectedAlternative || item.product;
    return sum + p.price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-2xl py-6">
          <h1 className="text-3xl font-serif font-semibold tracking-tight">Checkout</h1>
          <p className="text-muted-foreground text-sm mt-1">Review your bag before placing your order</p>
        </div>
      </header>

      <main className="container max-w-2xl py-8 space-y-6">
        {/* Out of stock alert */}
        {outOfStockCount > 0 && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-warning/10 border border-warning/20 animate-fade-in">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">
                {outOfStockCount} item{outOfStockCount > 1 ? "s" : ""} unavailable
              </p>
              <p className="text-sm text-muted-foreground">
                Choose alternatives below to keep your order complete — just like your grocery app.
              </p>
            </div>
          </div>
        )}

        {/* Cart items */}
        <div className="space-y-3">
          {cart.map((item) => (
            <CartItemCard
              key={item.product.id}
              item={item}
              onChooseAlternative={handleChooseAlternative}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {cart.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="font-serif text-xl">Your bag is empty</p>
          </div>
        )}

        {cart.length > 0 && (
          <>
            <Separator />

            {/* Summary */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal ({cart.length} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-serif text-lg">Total</span>
                <span className="font-serif text-lg font-semibold">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
              disabled={outOfStockCount > 0}
            >
              {outOfStockCount > 0 ? "Resolve unavailable items first" : "Place Order"}
            </Button>

            {outOfStockCount > 0 && (
              <p className="text-center text-xs text-muted-foreground">
                Choose alternatives or remove unavailable items to continue
              </p>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5" />
              <span>Secure checkout · Free returns within 30 days</span>
            </div>
          </>
        )}
      </main>

      {/* Alternatives Drawer */}
      {activeItem && (
        <AlternativesDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          originalProduct={activeItem.product}
          alternatives={activeAlts}
          selectedAltId={activeItem.selectedAlternative?.id}
          onSelect={handleSelectAlternative}
        />
      )}
    </div>
  );
};

export default Index;
