"use client";
import React from "react";

type ButtonVariant = "primary" | "outline-dark" | "outline-sand" | "black";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#FF6B1A] text-[#0D0D0D] border-2 border-[#FF6B1A] font-bold hover:bg-[#E55A0A] hover:border-[#E55A0A]",
  "outline-dark":
    "bg-transparent text-[#FF6B1A] border-2 border-[#FF6B1A] font-bold hover:bg-[#FF6B1A] hover:text-[#0D0D0D]",
  "outline-sand":
    "bg-transparent text-[#0D0D0D] border-2 border-[#0D0D0D] font-bold hover:bg-[#0D0D0D] hover:text-[#FAFAF7]",
  black:
    "bg-[#0D0D0D] text-[#FF6B1A] border-2 border-[#0D0D0D] font-bold hover:bg-[#1A1A1A]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg uppercase tracking-widest cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 select-none";

  const classes = [
    base,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
