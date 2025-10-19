import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-bold gradient-text">{value}</p>
    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">{label}</p>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <div className="py-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-lg shadow-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="20+" label="Projects Completed" />
          <StatItem value="1+" label="Years of Experience" />
          <StatItem value="5000+" label="LinkedIn Impressions" />
          <StatItem value="120+" label="Peer Appreciations" />
        </div>
      </div>
    </div>
  );
};
