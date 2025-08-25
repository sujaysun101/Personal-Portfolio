import React from 'react';
import { Code, Layers, Settings, Cpu, Star } from 'lucide-react';

// Central technology meta map reused across Projects & Research pages.
// Light mode: darker text; Dark mode: existing pale shades.
export const techMeta: Record<string, { color: string; icon?: JSX.Element }> = {
  // Languages / Core
  Python: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  'React TS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  TypeScript: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  'React JS/TS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  'VS Code API': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  Pandas: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  GeoPandas: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  Matplotlib: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
  IPyWidgets: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },

  // Frameworks
  TensorFlow: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
  PyTorch: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
  Django: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
  FastAPI: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
  'Ant Design UI': { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
  'ShadCN UI': { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },

  // Technologies / Platforms
  Firebase: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  Supabase: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  Docker: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'Google Cloud': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'GitHub Copilot': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  Genkit: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'AI Integration': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'AI/ML': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'Data Visualization': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'Clerk Auth': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  'Chrome Extension': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  OCR: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
  AI: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },

  // Hardware
  Hardware: { color: 'bg-red-600/20 text-red-700 dark:text-red-300', icon: <Cpu size={12} /> },
  'Circuit Design': { color: 'bg-red-600/20 text-red-700 dark:text-red-300', icon: <Cpu size={12} /> },
  Arduino: { color: 'bg-red-600/20 text-red-700 dark:text-red-300', icon: <Cpu size={12} /> },
  'Wearable Tech': { color: 'bg-red-600/20 text-red-700 dark:text-red-300', icon: <Cpu size={12} /> },

  // Other / Concepts
  'Security Analysis': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  'Extension Development': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  'Data Science': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  GAN: { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  GANs: { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  'Computer Vision': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  'Deep Learning': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
  'Art Generation': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
};

export const renderTechBadge = (tech: string, key?: React.Key, variant: 'default' | 'group' = 'default'): JSX.Element => {
  const meta = techMeta[tech] || { color: 'bg-gray-500/20 text-gray-700 dark:text-gray-300' };
  return (
    <button
      key={key}
      type="button"
      tabIndex={0}
      className={`tech-badge px-2 py-1 text-xs rounded-full flex items-center gap-1 backdrop-blur-sm border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:z-10 active:scale-95 ${variant==='group' ? 'bg-gray-700/30 dark:bg-gray-800/30 hover:bg-gray-700/50 border-white/10 dark:border-white/5 hover:border-white/20' : 'border-black/5 dark:border-white/5'} ${meta.color}`}
      aria-label={tech}
    >
      {meta.icon}
      {tech}
    </button>
  );
};
