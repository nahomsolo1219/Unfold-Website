interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "dark" | "dark-outline";
}

export default function Badge({ children, variant = "orange" }: BadgeProps) {
  const styles = {
    orange: "bg-orange-100 text-orange-700",
    dark: "bg-orange-600 text-white",
    "dark-outline": "bg-dark-card text-orange-500 border border-dark-card-border",
  };

  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
