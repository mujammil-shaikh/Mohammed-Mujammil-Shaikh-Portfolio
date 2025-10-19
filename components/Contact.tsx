
import React from 'react';
import { Section } from './Section';
import { PROFILE_DATA } from '../constants';
import { DownloadIcon } from './icons';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a 
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="inline-block bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105 text-lg"
          >
            Say Hello
          </a>
          <a
            href="https://drive.google.com/file/d/1Gow6jYtaWPyxxtYDzFiqYFg1uettvA0l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-sky-600 dark:border-sky-500 text-sky-600 dark:text-sky-500 font-bold py-[10px] px-8 rounded-md transition-all duration-300 hover:scale-105 hover:bg-sky-500/10 dark:hover:bg-sky-400/10 text-lg"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </Section>
  );
};