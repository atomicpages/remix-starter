export type AriaProps<
  T extends
    | React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>,
> = Omit<T, "aria-label" | "aria-labelledby"> &
  (
    | {
        label: React.ReactNode;
        "aria-label"?: undefined;
        "aria-labelledby"?: undefined;
      }
    | {
        label?: undefined;
        "aria-label": string;
        "aria-labelledby"?: undefined;
      }
    | {
        label?: undefined;
        "aria-label"?: undefined;
        "aria-labelledby": string;
      }
  );
