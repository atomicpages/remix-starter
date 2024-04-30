import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, beforeIcon, afterIcon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}>
        {beforeIcon}
        <input
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
          ref={ref}
          {...props}
        />
        {afterIcon}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
