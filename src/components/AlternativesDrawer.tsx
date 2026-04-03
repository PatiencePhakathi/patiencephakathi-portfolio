import { Product } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  originalProduct: Product;
  alternatives: Product[];
  selectedAltId?: string;
  onSelect: (product: Product) => void;
}

export const AlternativesDrawer = ({ open, onClose, originalProduct, alternatives, selectedAltId, onSelect }: Props) => {
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto bg-background">
        <SheetHeader className="text-left pb-6">
          <SheetTitle className="font-serif text-2xl">Choose an Alternative</SheetTitle>
          <p className="text-muted-foreground text-sm">
            <span className="font-medium text-foreground">{originalProduct.name}</span> is out of stock. Pick a substitute below.
          </p>
        </SheetHeader>

        {/* Original item */}
        <div className="mb-6 p-4 rounded-lg border border-destructive/20 bg-destructive/5">
          <div className="flex gap-4">
            <img src={originalProduct.image} alt={originalProduct.name} className="w-20 h-20 rounded-md object-cover" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{originalProduct.brand}</p>
              <p className="font-medium line-through opacity-60">{originalProduct.name}</p>
              <p className="text-sm text-muted-foreground">{originalProduct.size} · {originalProduct.color}</p>
              <Badge variant="destructive" className="mt-1 text-xs">Out of Stock</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-4">
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Alternatives */}
        <div className="space-y-3">
          {alternatives.map((alt) => {
            const isSelected = selectedAltId === alt.id;
            const priceDiff = alt.price - originalProduct.price;
            return (
              <button
                key={alt.id}
                onClick={() => onSelect(alt)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                  isSelected
                    ? "border-accent bg-accent/5 shadow-sm"
                    : "border-border hover:border-accent/40"
                }`}
              >
                <div className="flex gap-4 items-center">
                  <img src={alt.image} alt={alt.name} className="w-20 h-24 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{alt.brand}</p>
                    <p className="font-medium truncate">{alt.name}</p>
                    <p className="text-sm text-muted-foreground">{alt.size} · {alt.color}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-semibold">${alt.price}</span>
                      {priceDiff !== 0 && (
                        <span className={`text-xs ${priceDiff > 0 ? "text-destructive" : "text-success"}`}>
                          {priceDiff > 0 ? `+$${priceDiff}` : `-$${Math.abs(priceDiff)}`}
                        </span>
                      )}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-3">
          <Button onClick={onClose} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Confirm Selection
          </Button>
          <Button variant="ghost" onClick={onClose} className="w-full text-muted-foreground">
            Skip — Remove Item Instead
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
