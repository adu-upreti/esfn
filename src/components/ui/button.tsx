import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-esf-primary text-white hover:bg-esf-primary-hover dark:bg-esf-primary dark:text-white dark:hover:bg-esf-primary-hover dark:border-[#fdfdfd]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/90",
        outline:
          "border border-esf-primary text-esf-primary bg-transparent hover:bg-esf-primary hover:text-white dark:border-[#fdfdfd] dark:text-esf-primary dark:bg-transparent dark:hover:bg-esf-primary dark:hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground text-foreground dark:text-foreground dark:hover:bg-accent dark:hover:text-accent-foreground",
        link: "text-esf-primary underline-offset-4 hover:underline dark:text-esf-primary dark:hover:underline",
        success:
          "bg-esf-primary text-white hover:bg-esf-primary-hover dark:bg-esf-primary dark:text-white dark:hover:bg-esf-primary-hover dark:border-[#fdfdfd]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
