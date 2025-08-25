import React from 'react';
import { Code, Layers, Settings, Cpu, Star } from 'lucide-react';
import { skillLogos } from './skillLogos';

// Canonical technology meta map reused across Projects & Research pages.
// Light mode uses darker text; dark mode keeps lighter tones.
export const techMeta: Record<string, { color: string; icon?: JSX.Element }> = {
	// Languages / Core
	Python: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'React TS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: skillLogos['React TS']?.src ? <img src={skillLogos['React TS']!.src} alt="React TS" className="w-3.5 h-3.5 object-contain" /> : <Code size={12} /> },
	TypeScript: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'React JS/TS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: skillLogos['React JS/TS']?.src ? <img src={skillLogos['React JS/TS']!.src} alt="React JS/TS" className="w-3.5 h-3.5 object-contain" /> : <Code size={12} /> },
	'VS Code API': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	Pandas: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	GeoPandas: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	Matplotlib: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	IPyWidgets: { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'TailwindCSS': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'D3.js': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'Mapbox GL': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'React-Leaflet': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'OpenStreetMap': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'Framer Motion': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'Vite': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'Radix UI': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'React Router': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },
	'Context API': { color: 'bg-blue-600/20 text-blue-700 dark:text-blue-300', icon: <Code size={12} /> },

	// Frameworks
	TensorFlow: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
	PyTorch: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
	Django: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
	FastAPI: { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
	'Node.js': { color: 'bg-purple-600/20 text-purple-700 dark:text-purple-300', icon: <Layers size={12} /> },
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
	'Chrome Extension APIs': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	OCR: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	AI: { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Supabase Auth': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'ESBuild': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Babel': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'REST API': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'OpenAI API': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Google OAuth': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'CORS': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'ngrok': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Netlify': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Vercel': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'numpy': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'BeautifulSoup': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Requests': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Selenium': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Docker Compose': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'GitHub Actions': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Regex Patterns': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Context Filters': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Webpack': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'ESLint': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },
	'Git Hooks': { color: 'bg-green-600/20 text-green-700 dark:text-green-300', icon: <Settings size={12} /> },

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
	'MIT License': { color: 'bg-yellow-600/25 text-yellow-700 dark:text-yellow-300', icon: <Star size={12} /> },
};

export const renderTechBadge = (tech: string, key?: React.Key, variant: 'default' | 'group' = 'default'): JSX.Element => {
	const meta = techMeta[tech] || { color: 'bg-gray-500/20 text-gray-700 dark:text-gray-300' };
	// If no explicit icon but we have a skillLogo image, use it
	let iconEl = meta.icon;
	if (!iconEl) {
		const logo = skillLogos[tech];
		if (logo?.src) {
			iconEl = <img src={logo.src} alt={tech} className="w-3.5 h-3.5 object-contain" />;
		}
	}
	return (
		<span
			key={key}
			className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 backdrop-blur-sm border transition-all duration-200 ${variant==='group' ? 'bg-gray-700/30 dark:bg-gray-800/30 hover:bg-gray-600/50 border-gray-500/20 dark:border-white/10 hover:border-gray-400/40 dark:hover:border-white/30 hover:shadow-sm' : 'border-black/5 dark:border-white/5'} ${meta.color}`}
		>
			{iconEl}
			{tech}
		</span>
	);
};
