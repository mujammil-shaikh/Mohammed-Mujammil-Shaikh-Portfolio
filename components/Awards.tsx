import React from 'react';
import { Section } from './Section';
import { AWARDS_DATA, CERTIFICATIONS_DATA } from '../constants';

export const Awards: React.FC = () => {
  return (
    <Section id="awards" title="Awards & Certifications">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Awards</h3>
          <div className="space-y-6">
            {AWARDS_DATA.map((award, index) => (
              <div key={index} className="bg-transparent dark:bg-slate-900/50 border-l-4 border-sky-500 pl-4 py-2">
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{award.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-1">{award.issuer}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Certifications</h3>
          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <div key={index} className="bg-slate-200/60 dark:bg-slate-800/60 rounded-md p-3">
                 <p className="font-semibold text-slate-800 dark:text-slate-300">{cert.title} - <span className="font-normal text-slate-600 dark:text-slate-400">{cert.issuer}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
