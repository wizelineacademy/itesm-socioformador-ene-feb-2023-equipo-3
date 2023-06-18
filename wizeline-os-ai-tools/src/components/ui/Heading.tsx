import { FC } from "react";

import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-black text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default:
          "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
        sm: "text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = ({ children, className, size, ...props }) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export { Heading, headingVariants };
