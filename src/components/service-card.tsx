import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: React.ReactNode;
  duration: string;
  price: string;
  description: string;
  actionLabel: React.ReactNode;
  actionHref: string;
}

export function ServiceCard({
  icon,
  iconBgColor,
  title,
  duration,
  price,
  description,
  actionLabel,
  actionHref,
}: ServiceCardProps) {
  return (
    <div className="min-w-[300px] flex-shrink-0 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md lg:min-w-0 lg:flex-shrink">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColor}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-text-muted">
        {duration} &middot; <span className="font-semibold text-foreground">{price}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
      <Link
        href={actionHref}
        className="mt-4 inline-flex items-center text-sm font-medium text-primary-light hover:underline"
      >
        {actionLabel} <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
