//components\Card.tsx
type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-lg border p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
