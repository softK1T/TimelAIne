import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col sm:flex-row p-2 sm:p-6 rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row min-w-[220px] max-w-[220px] sm:flex-col gap-1 items-center sm:items-start px-0 mb-2 mt-0.5",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardEmoji = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none", className)}
    {...props}
  />
));
CardEmoji.displayName = "CardTitle";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("w-full", className)} {...props} />
));
CardTitle.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm p-2 pt-0 sm:self-center flex flex-col space-y-2",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardDate = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center pt-0 pb-0 text-sm text-right sm:text-left",
      className
    )}
    {...props}
  />
));
CardDate.displayName = "CardFooter";

export { Card, CardHeader, CardDate, CardEmoji, CardTitle, CardContent };
