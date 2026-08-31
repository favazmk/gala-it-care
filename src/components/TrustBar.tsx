interface TrustBarProps {
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
}

export default function TrustBar({ features }: TrustBarProps) {
  return (
    <div className="bg-primary text-white py-6 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-shrink-0 text-accent bg-white/10 p-2 rounded-full">
                {feature.icon}
              </div>
              <span className="font-medium text-sm md:text-base tracking-wide">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
