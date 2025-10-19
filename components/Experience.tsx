import React from 'react';
import { Section } from './Section';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';

const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="flex items-center mb-1 sm:mb-0">
      <div className="absolute left-0 h-full w-px bg-slate-300 dark:bg-slate-700/50"></div>
      <div className="absolute left-[-6px] w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-sky-500 dark:group-hover:bg-sky-400 transition-colors duration-300"></div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.role}</h3>
    </div>
    <p className="text-sky-600 dark:text-sky-400 font-semibold mb-2">{item.company} | {item.location}</p>
    <p className="text-sm text-slate-500 font-mono mb-4">{item.period}</p>
    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
      {item.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div>
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};
