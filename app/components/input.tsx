import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from "@/components/ui/input";
import { cx } from "class-variance-authority";
import { Label } from "@/components/ui/label";
import { forwardRef, useId } from "react";
import { AriaProps } from "~/typings/aria";

export type InputProps = AriaProps<BaseInputProps> & {
  error?: boolean;
  help?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, required, error, className, help, ...rest }, ref) => {
    const id = useId();
    const helpId = useId();

    return (
      <div className="mb-6 last-of-type:mb-0">
        {label && (
          <Label className="block mb-2" htmlFor={rest.id ?? id}>
            {label}
            {required ? <span className="text-red-500">*</span> : null}
          </Label>
        )}
        <BaseInput
          ref={ref}
          required={required}
          className={cx(error && "ring-red-500 ring-1", className)}
          id={id}
          aria-describedby={help ? helpId : undefined}
          {...rest}
        />
        {help && (
          <span id={helpId} className={cx("text-sm", error && "text-red-500")}>
            {help}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
