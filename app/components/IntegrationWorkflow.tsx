"use client";

const steps = [
  {
    title: "Version Control",
    description: "Domain models committed directly to your repositories."
  },
  {
    title: "Issue Tracking",
    description: "Structured Jira epics mapped to modernization phases."
  },
  {
    title: "API Contracts",
    description: "OpenAPI specs ready for your API gateway."
  },
  {
    title: "Testing",
    description: "Gherkin scenarios integrated with your test runners."
  }
];

export default function IntegrationWorkflow() {
  return (
    <section className="py-32 md:py-40 bg-[#FAFAFA] border-b border-[#E0E0E0] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight mb-8">
              Integrate with your toolchain.
            </h2>
            <p className="text-2xl text-[#555555] leading-relaxed">
              We extract business logic and map it directly into your version control, issue trackers, and testing environments.
            </p>
          </div>

          {/* Workflow Graphic Column */}
          <div className="lg:col-span-8 relative">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                {steps.map((step, i) => (
                  <div key={i} className="relative flex bg-white border-2 border-[#E0E0E0]">
                    
                    {/* Left Ticket Stub */}
                    <div className="w-16 md:w-20 border-r-2 border-dashed border-[#E0E0E0] flex flex-col items-center justify-center shrink-0">
                    </div>
                    
                    {/* Right Ticket Body */}
                    <div className="p-8 flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-[#111111]">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-[#555555]">
                        {step.description}
                      </p>
                    </div>

                    {/* Top Cutout */}
                    <div 
                      className="absolute -top-3 left-[63px] md:left-[79px] -translate-x-1/2 w-6 h-6 bg-[#FAFAFA] border-2 border-[#E0E0E0] rounded-full z-10"
                      style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                    />
                    
                    {/* Bottom Cutout */}
                    <div 
                      className="absolute -bottom-3 left-[63px] md:left-[79px] -translate-x-1/2 w-6 h-6 bg-[#FAFAFA] border-2 border-[#E0E0E0] rounded-full z-10"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                    />
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
