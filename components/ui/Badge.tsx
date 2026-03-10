interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "dark";
}

export default function Badge({ children, variant = "orange" }: BadgeProps) {
  const styles = {
    orange: "bg-orange-100 text-orange-700",
    dark: "bg-orange-600 text-white",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
