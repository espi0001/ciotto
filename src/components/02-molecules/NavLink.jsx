import { usePathname } from "next/navigation";

export default function NavLink({ href, label, navColor, transition = "color 0.4s cubic-bezier(0.4,0,0.2,1)", highlighted = false }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const textClass = highlighted || isActive ? "text-tertiary-text" : "";
  const underlineColor = highlighted ? "#D6C3B4" : navColor; // brug din `tertiary-text` farvekode her

  return (
    <li className="relative z-30 nav-links">
      <a href={href} className={`relative group ${textClass}`} style={{ color: highlighted ? undefined : navColor, transition }}>
        <span className="relative">
          {label}
          <span className={`absolute -bottom-2 left-0 w-full h-[1px] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${highlighted ? "bg-tertiary-text" : ""}`} style={highlighted ? {} : { backgroundColor: underlineColor }} />
        </span>
      </a>
    </li>
  );
}
