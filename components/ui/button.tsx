// Assuming Button.tsx looks like this
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"; // Add more variants as needed
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded", // Base styles
          variant === "ghost" ? "bg-transparent text-gray-700" : "bg-black text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
