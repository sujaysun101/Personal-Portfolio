import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

// Shared minimal hero section. Starfield shows through (rendered globally in dark mode).
const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[55vh] px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-transparent dark:from-black/70 dark:via-black/50" />
      <div className="relative z-10 max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">{subtitle}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
