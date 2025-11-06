import React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full h-11 rounded-none bg-black text-white border border-white/25 px-3 outline-none",
        "placeholder-white/40",
        className
      )}
      {...props}
    />
  );
});

export default Input;
