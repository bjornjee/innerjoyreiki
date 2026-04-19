interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-icon-bg">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}
