import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const styles = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-white text-blue-600 border border-blue-600",
};

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-2 rounded-md ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
