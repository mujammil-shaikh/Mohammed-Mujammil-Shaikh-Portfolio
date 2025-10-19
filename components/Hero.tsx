
import React from 'react';
import { PROFILE_DATA } from '../constants';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, DownloadIcon } from './icons';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {PROFILE_DATA.name}
        </h1>
        <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight gradient-text">
          {PROFILE_DATA.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {PROFILE_DATA.summary}
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a
            href={PROFILE_DATA.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a 
            href="#projects"
            onClick={onNavClick}
            className="inline-block bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105"
          >
            Explore My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1Gow6jYtaWPyxxtYDzFiqYFg1uettvA0l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-sky-600 dark:border-sky-500 text-sky-600 dark:text-sky-500 font-bold py-[10px] px-8 rounded-md transition-all duration-300 hover:scale-105 hover:bg-sky-500/10 dark:hover:bg-sky-400/10"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};