import React, { useState, useMemo } from 'react';
import { Section } from './Section';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import { GitHubIcon, LinkIcon } from './icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 rounded-lg shadow-lg p-6 flex flex-col h-full group transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-2">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">{project.title}</h3>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400" aria-label="GitHub Repository">
              <GitHubIcon className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400" aria-label="Live Demo">
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      {project.anonymized && <p className="text-xs font-mono text-amber-600 dark:text-amber-400/80 mb-3">[Anonymized Client Project]</p>}
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
        {project.description}
      </p>
    </div>
    <div className="mt-auto pt-4">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-slate-200 text-sky-800 dark:bg-slate-800 dark:text-sky-300 text-xs font-mono px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = useMemo(() => {
    const allTags = PROJECTS_DATA.flatMap(p => p.tags);
    return ['All', ...Array.from(new Set(allTags)).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(p => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <Section id="projects" title="Projects">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950 ${
              selectedTag === tag
                ? 'bg-sky-600 dark:bg-sky-500 text-white shadow-md'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </Section>
  );
};