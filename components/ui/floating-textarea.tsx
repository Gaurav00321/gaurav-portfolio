"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
}

const FloatingLabelTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingLabelTextareaProps
>(({ className, label, error, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  return (
    <div className="relative">
      <textarea
        className={cn(
          "flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background",
          "placeholder:text-transparent focus-visible:outline-none resize-none",
          "focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-destructive" : "",
          "peer",
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        {...props}
      />
      <label
        className={cn(
          "absolute left-3 top-4 px-1 text-muted-foreground transition-all duration-200",
          "pointer-events-none bg-transparent peer-focus:bg-background",
          "peer-focus:text-xs peer-focus:-top-2 peer-focus:text-primary",
          (isFocused || hasValue) && "-top-2 text-xs bg-background",
          !isFocused && hasValue && "text-muted-foreground",
          error ? "text-destructive" : ""
        )}
      >
        {label}
      </label>
    </div>
  );
});

FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export { FloatingLabelTextarea };
