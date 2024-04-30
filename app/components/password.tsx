import { forwardRef, useCallback, useState } from "react";
import { Input, InputProps } from "./input";
import { Eye, EyeOff } from "lucide-react";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [viz, setViz] = useState(false);

    return (
      <Input
        ref={ref}
        afterIcon={
          <button
            type="button"
            className="mr-2"
            onClick={useCallback(() => {
              setViz((prev) => !prev);
            }, [])}>
            {viz ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
        {...props}
        type={viz ? "text" : "password"}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
