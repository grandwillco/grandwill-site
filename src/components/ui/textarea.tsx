import React from "react";
import clsx from "clsx";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, rows = 5, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={clsx(
        "w-full rounded-none bg-black text-white border border-white/25 p-3 outline-none",
        "placeholder-white/40",
        className
      )}
      {...props}
    />
  );
});

export default Textarea;
