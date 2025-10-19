import React from 'react';
import { Section } from './Section';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-4">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
