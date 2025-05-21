import Link from "next/link";

export default function Logo({ className = "", size = "text-4xl", color = "primary-text", ...props }) {
  return (
    <Link href="/" className={`font-bold tracking-wide ${size} ${className}`} style={{ color }} {...props}>
      CIOTTO
    </Link>
  );
}
