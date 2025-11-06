import React from "react";
import clsx from "clsx";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-none px-2 py-0.5 text-xs font-medium",
        variant === "default" && "bg-white text-black",
        variant === "outline" && "border border-white/40 text-white",
        className
      )}
      {...props}
    />
  );
}

export default Badge;
