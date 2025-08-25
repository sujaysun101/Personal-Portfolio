import React from 'react';
import PageHero from '../components/PageHero';

// Placeholder PDF viewer component (simple iframe wrapper)
interface TestimonialItemProps {
  title: string;
  src?: string; // PDF URL (to be provided later)
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ title, src }) => {
  return (
    <div className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-semibold mb-4 text-white/90">{title}</h3>
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800/40 flex items-center justify-center text-gray-400 text-sm">
        {src ? (
          <iframe
            src={src}
            title={title}
            className="w-full h-full"
          />
        ) : (
          <div className="p-4 text-center leading-relaxed">
            Coming Soon...
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        title="Testimonials"
        subtitle="Endorsements and references highlighting my impact and collaboration"
      />
      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialItem 
            title="Sundar Tech Services Client Recommendation Letter" 
            src="https://drive.google.com/file/d/1jcV3pmu086Ntp3ALzs1Oa-NQ1t_S7X_C/preview"
          />
          <TestimonialItem 
            title="Copani LLC Recommendation Letter" 
            src="https://drive.google.com/file/d/1e-uDQZP-e7gfLev8jB_HTMjVs_3TJFHP/preview"
          />
          <TestimonialItem title="Testimonial 3" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
