import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLink({ href, children, className = "", underline = true, highlighted = false, bold = false, asListItem = false, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const base = `relative group font-normal text-base ${highlighted || isActive ? "text-tertiary-text" : ""} ${bold ? "font-bold" : ""} ${className}`;
  const underlineClass = underline ? "absolute -bottom-1 left-0 w-full h-0.5 bg-primary-text origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-focus:scale-x-100" : "";

  const content = (
    <>
      {children}
      {underline && <span className={underlineClass} />}
    </>
  );

  const link = href?.startsWith("http") ? (
    <a href={href} className={base} {...props}>
      {content}
    </a>
  ) : (
    <Link href={href} className={base} {...props}>
      {content}
    </Link>
  );

  return asListItem ? <li>{link}</li> : link;
}
