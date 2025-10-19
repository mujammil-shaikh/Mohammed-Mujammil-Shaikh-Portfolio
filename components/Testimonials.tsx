import React from 'react';
import { Section } from './Section';
import { TESTIMONIALS_DATA } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 rounded-lg p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-1">
    <blockquote className="relative flex-grow">
      <svg className="absolute top-0 left-0 w-8 h-8 text-slate-300 dark:text-slate-700 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 8h-4.666v16h13.333v-10.667c0-4.418-3.582-8-8-8zM27.333 8h-4.666v16h13.333v-10.667c0-4.418-3.582-8-8-8z"></path>
      </svg>
      <p className="text-slate-600 dark:text-slate-400 italic z-10 relative">"{testimonial.quote}"</p>
    </blockquote>
    <footer className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
      <p className="font-bold text-slate-800 dark:text-slate-200">{testimonial.name}</p>
      <p className="text-sm text-sky-600 dark:text-sky-400">{testimonial.title}</p>
    </footer>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};
