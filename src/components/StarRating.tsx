import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  showValue = true,
  size = "md",
  className,
}: StarRatingProps) {
  const sizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizes[size],
            i < Math.floor(rating)
              ? "fill-primary text-primary"
              : i < rating
              ? "fill-primary/50 text-primary/50"
              : "fill-muted-foreground/30 text-muted-foreground/30"
          )}
        />
      ))}
      {showValue && (
        <span
          className={cn(
            "ml-1 font-semibold text-foreground",
            textSizes[size]
          )}
        >
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
