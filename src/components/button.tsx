import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant, href, children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-light",
    outline: "border border-border text-foreground hover:border-primary hover:text-primary",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
