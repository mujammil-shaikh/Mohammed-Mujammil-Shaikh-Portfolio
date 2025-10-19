import React from 'react';
import { Section } from './Section';
import { PROFILE_DATA, LEETCODE_DATA } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400">
            <p>
                I'm a passionate Data Scientist and Machine Learning Engineer with a strong focus on building intelligent, scalable AI solutions. My expertise lies in Natural Language Processing (NLP) and the development of Large Language Models (LLMs) and Agentic AI systems. I thrive on transforming complex data into actionable insights and creating robust applications that solve real-world problems.
            </p>
            <p>
                With a foundation in Python and hands-on experience with frameworks like LangChain, LangGraph, and CrewAI, I specialize in architecting agentic workflows and advanced NLP applications. I am proficient in deploying these solutions on cloud platforms like AWS and GCP, ensuring they are not only intelligent but also efficient and reliable.
            </p>
        </div>
        <div className="md:col-span-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="font-bold text-lg text-sky-600 dark:text-sky-400 mb-4 text-center">LeetCode Stats</h3>
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p className="flex justify-between font-mono"><span>Solved:</span> <span>{LEETCODE_DATA.solved}</span></p>
                <p className="flex justify-between font-mono"><span>Acceptance:</span> <span>{LEETCODE_DATA.acceptance}</span></p>
                <div className="pt-2">
                    <p className="flex justify-between font-mono text-green-600 dark:text-green-400"><span>Easy:</span> <span>{LEETCODE_DATA.easy}</span></p>
                    <p className="flex justify-between font-mono text-yellow-600 dark:text-yellow-400"><span>Medium:</span> <span>{LEETCODE_DATA.medium}</span></p>
                    <p className="flex justify-between font-mono text-red-600 dark:text-red-400"><span>Hard:</span> <span>{LEETCODE_DATA.hard}</span></p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
