interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessSteps({ title = "Our Simple Process", steps }: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-accent/20 flex items-center justify-center mb-6 shadow-sm z-10">
                <span className="text-3xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
