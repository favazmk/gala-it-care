interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  target?: string;
  items: string[];
}

export default function ServiceCard({ icon, title, target, items }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-border-light overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 md:p-8 flex-grow">
        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        {target && (
          <p className="text-sm font-medium text-accent mb-6 pb-4 border-b border-border-light">
            {target}
          </p>
        )}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
