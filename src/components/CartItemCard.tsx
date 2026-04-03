import { CartItem } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Check, Trash2 } from "lucide-react";

interface Props {
  item: CartItem;
  onChooseAlternative: (productId: string) => void;
  onRemove: (productId: string) => void;
}

export const CartItemCard = ({ item, onChooseAlternative, onRemove }: Props) => {
  const displayProduct = item.selectedAlternative || item.product;
  const isSwapped = !!item.selectedAlternative;
  const isOutOfStock = !item.product.inStock && !item.selectedAlternative;

  return (
    <div className={`flex gap-4 p-4 rounded-xl border transition-all animate-fade-in ${
      isOutOfStock ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"
    }`}>
      <div className="relative">
        <img
          src={displayProduct.image}
          alt={displayProduct.name}
          className="w-24 h-28 rounded-lg object-cover"
        />
        {isSwapped && (
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-success flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-success-foreground" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{displayProduct.brand}</p>
        <h3 className="font-medium truncate">{displayProduct.name}</h3>
        <p className="text-sm text-muted-foreground">{displayProduct.size} · {displayProduct.color}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">${displayProduct.price}</span>
          {isSwapped && displayProduct.price !== item.product.price && (
            <span className="text-xs line-through text-muted-foreground">${item.product.price}</span>
          )}
        </div>

        {isSwapped && (
          <Badge className="mt-2 bg-success/10 text-success border-success/20 text-xs">
            <RefreshCw className="w-3 h-3 mr-1" /> Swapped
          </Badge>
        )}

        {isOutOfStock && (
          <div className="flex items-center gap-2 mt-3">
            <Button
              size="sm"
              onClick={() => onChooseAlternative(item.product.id)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs"
            >
              <RefreshCw className="w-3 h-3 mr-1" /> Choose Alternative
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRemove(item.product.id)}
              className="text-muted-foreground text-xs"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        )}

        {item.product.inStock && (
          <Badge className="mt-2 bg-success/10 text-success border-success/20 text-xs">
            In Stock
          </Badge>
        )}
      </div>
    </div>
  );
};
