import Copy from "@/components/gsap-anim/TextAnimation";

export default function Button({ children, variant = "primary", link, size = "large", type = "button" }) {
  const base = "text-xl font-semibold cursor-pointer inline-flex items-center gap-[1rem] transition-colors group uppercase";

  const variants = {
    primary: {
      base: "text-tertiary-text",
      hover: "",
    },
    secondary: {
      base: "text-secondary-button",
      hover: "",
    },
  };

  const sizes = {
    large: "text-base",
    small: "text-sm",
  };

  const classes = [base, variants[variant]?.base, variants[variant]?.hover, sizes[size]].join(" ");

  //const styles = "uppercase cursor-pointer flex items-center gap-2";
  return (
    <button className={classes} type={type} href={link}>
      <Copy delay={1.5}>
        <span>{children}</span>
      </Copy>
      <Copy delay={1.5}>
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          <ArrowIcon variant={variant} />
        </span>
      </Copy>
    </button>
  );

  // return (
  //   <button className={`${styles} ${variants[variant]}`}>
  //     {children}
  //     <svg xmlns="http://www.w3.org/2000/svg" width="88" height="16" fill="none">
  //       <path fill="#9A330B" d="M87.207 8.707a1 1 0 0 0 0-1.414L80.843.929a1 1 0 1 0-1.414 1.414L85.086 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.5 8v1h86V7H.5v1Z" />
  //     </svg>
  //   </button>
  // );
}
function ArrowIcon({ variant }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="16" fill="none">
      <path fill="currentColor" d="M87.207 8.707a1 1 0 0 0 0-1.414L80.843.929a1 1 0 1 0-1.414 1.414L85.086 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.5 8v1h86V7H.5v1Z" />
    </svg>
  );
}
