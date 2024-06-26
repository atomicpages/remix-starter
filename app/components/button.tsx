import { forwardRef } from "react";

import { cx } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";

import { Button as BaseButton } from "@/components/ui/button";
import type { ButtonProps as BaseButtonProps } from "@/components/ui/button";

export type ButtonProps = BaseButtonProps & {
  loading?: boolean;
  auto?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, disabled, className, auto, ...rest }, ref) => {
    const isDisabled = loading ?? disabled;

    return (
      <BaseButton
        className={cx(
          isDisabled && "disabled:cursor-not-allowed",
          auto && "w-full",
          className,
        )}
        disabled={isDisabled}
        ref={ref}
        {...rest}>
        {children}
        {loading ? <LoaderCircle className="ml-2 animate-spin" /> : null}
      </BaseButton>
    );
  },
);

Button.displayName = "Button";
