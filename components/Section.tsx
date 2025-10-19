import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 flex items-center">
          <span className="text-sky-500 dark:text-sky-400 mr-4 font-mono">#</span>
          {title}
          <span className="flex-grow h-px bg-slate-300 dark:bg-slate-700 ml-6"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};
