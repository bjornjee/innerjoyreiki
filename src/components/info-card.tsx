interface InfoCardProps {
  label: string;
  children: React.ReactNode;
}

export function InfoCard({ label, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
        {label}
      </h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}
