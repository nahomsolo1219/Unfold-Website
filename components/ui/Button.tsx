import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-orange-600 text-white hover:bg-orange-500 shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30",
  secondary:
    "bg-stone-900 text-white hover:bg-stone-800",
  ghost:
    "text-stone-700 hover:text-orange-600",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-3.5 text-base rounded-xl",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center font-semibold btn-hover transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
