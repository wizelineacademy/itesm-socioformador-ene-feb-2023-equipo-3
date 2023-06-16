import * as React from "react";
import { cn } from "@/utils/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, title, ...props }, ref) => {
    return (
      <div>
        <p className="mb-1 block text-sm font-medium text-gray-900">{title}</p>
        <input
          className={cn(
            "-bg-gray-50 block w-full rounded border border-gray-300 p-3.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
            className
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
