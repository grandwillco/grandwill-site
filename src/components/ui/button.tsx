import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-none h-11 px-6 transition-colors",
        variant === "default" && "bg-white text-black hover:bg-blue-600 hover:text-white",
        variant === "outline" && "border border-white/40 text-white hover:bg-white hover:text-black",
        className
      )}
      {...props}
    />
  );
}

export default Button;
