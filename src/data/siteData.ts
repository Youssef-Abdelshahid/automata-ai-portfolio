export type IconName =
  | 'activity'
  | 'archive'
  | 'audio'
  | 'brain'
  | 'camera'
  | 'chart'
  | 'chip'
  | 'cloudOff'
  | 'code'
  | 'cpu'
  | 'database'
  | 'file'
  | 'gauge'
  | 'github'
  | 'globe'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'package'
  | 'radar'
  | 'rocket'
  | 'scan'
  | 'server'
  | 'settings'
  | 'shield'
  | 'sparkles'
  | 'terminal'
  | 'upload'
  | 'video'
  | 'zap';

type TextCard = {
  icon: IconName;
  title: string;
  body: string;
};

type SimpleIconItem = {
  icon: IconName;
  title: string;
};

type LinkCard = SimpleIconItem & {
  href: string;
};

export const siteLinks = {
  website: 'https://YOUR_WEBSITE_LINK_HERE',
  github: 'https://github.com/YOUR_PROJECT_REPO_HERE',
  paper: 'https://YOUR_PAPER_LINK_HERE',
  video: 'https://YOUR_DEMO_VIDEO_LINK_HERE',
  presentation: 'https://YOUR_PRESENTATION_LINK_HERE',
};

export const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Links', href: '#links' },
  { label: 'Team', href: '#team' },
];

export const hero = {
  eyebrow: 'MEET AUTOMATA AI',
  headline: 'Create AI for small devices without the hard setup.',
  description:
    'Automata AI takes project data, a target device, and deployment goals, then helps prepare a ready-to-use AI package for Edge AI prototypes.',
  primaryCta: 'Visit Website',
  secondaryCta: 'View GitHub',
};

export const workflowSteps = [
  {
    label: 'Data',
    title: 'Start with project data',
    body: 'Images, audio, or sensor readings become the starting point.',
  },
  {
    label: 'Device',
    title: 'Pick the target device',
    body: 'Tell the system where the AI model needs to run.',
  },
  {
    label: 'Build',
    title: 'Let Automata AI build it',
    body: 'The pipeline prepares, trains, and improves the model.',
  },
  {
    label: 'Ship',
    title: 'Get a ready package',
    body: 'Download the model, code, settings, and simple report.',
  },
];

export const heroMetrics = [
  {
    title: 'For real projects',
    body: 'Useful for graduation demos, prototypes, and small device experiments.',
  },
  {
    title: 'Easy to explain',
    body: 'A clear story: data goes in, a device-ready AI package comes out.',
  },
  {
    title: 'Built for Edge AI',
    body: 'Focused on small devices such as Raspberry Pi, ESP32, cameras, and IoT boards.',
  },
];

export const problemCards = [
  {
    icon: 'layers',
    title: 'AI projects use many tools',
    body: 'Data cleaning, training, testing, and reporting can quickly become confusing.',
  },
  {
    icon: 'chip',
    title: 'Small devices have limits',
    body: 'A model may work on a laptop but be too large or too slow for a small board.',
  },
  {
    icon: 'settings',
    title: 'Deployment takes extra work',
    body: 'Teams still need code, settings, notes, and a clear report before they can show the result.',
  },
] satisfies TextCard[];

export const solutionFlow = [
  { icon: 'upload', title: 'Upload Data' },
  { icon: 'cpu', title: 'Choose Target Device' },
  { icon: 'brain', title: 'AutoML Pipeline' },
  { icon: 'zap', title: 'Optimized Model' },
  { icon: 'package', title: 'Deployment Bundle' },
] satisfies SimpleIconItem[];

export const featureCards = [
  {
    icon: 'upload',
    title: 'Upload project data',
    body: 'Images, audio, or sensor readings from an idea or prototype can be used.',
  },
  {
    icon: 'chip',
    title: 'Choose a device',
    body: 'Tell Automata AI where the model should run, like ESP32, Raspberry Pi, or a smart camera.',
  },
  {
    icon: 'sparkles',
    title: 'Automate the hard work',
    body: 'The system prepares the data, trains the model, and improves it for smaller hardware.',
  },
  {
    icon: 'package',
    title: 'Download the result',
    body: 'Get the model, code, settings, deployment notes, and a simple performance report.',
  },
] satisfies TextCard[];

export const pipelineStages = [
  { icon: 'database', title: 'Input dataset', body: 'Bring raw project data into one guided workflow.' },
  { icon: 'settings', title: 'Task and constraints', body: 'Define task type, target device, RAM, flash, and latency needs.' },
  { icon: 'scan', title: 'Preprocessing', body: 'Prepare the data with task-aware transforms and validation.' },
  { icon: 'brain', title: 'Model search', body: 'Train and compare candidates with edge feasibility in view.' },
  { icon: 'zap', title: 'Optimization', body: 'Apply pruning, quantization, and export-focused adjustments.' },
  { icon: 'shield', title: 'Feasibility checking', body: 'Flag device mismatches before deployment time.' },
  { icon: 'package', title: 'Bundle and report', body: 'Export the optimized package with docs and recommendations.' },
] satisfies TextCard[];

export const edgeDevices = [
  { icon: 'chip', title: 'Arduino', body: 'Tiny controllers with tight memory and power limits.' },
  { icon: 'cpu', title: 'ESP32', body: 'Connected microcontrollers for practical IoT intelligence.' },
  { icon: 'server', title: 'Raspberry Pi', body: 'Compact Linux boards for prototypes and edge services.' },
  { icon: 'camera', title: 'Smart cameras', body: 'Vision systems that need fast local decisions.' },
  { icon: 'cloudOff', title: 'IoT devices', body: 'Distributed devices that benefit from local inference.' },
] satisfies TextCard[];

export const outputItems = [
  { icon: 'file', title: 'Optimized model file' },
  { icon: 'code', title: 'Deployment and inference code' },
  { icon: 'settings', title: 'Configuration files' },
  { icon: 'archive', title: 'Documentation' },
  { icon: 'chart', title: 'Performance report' },
  { icon: 'rocket', title: 'Deployment notes' },
] satisfies SimpleIconItem[];

export const demoLinks = [
  { icon: 'globe', title: 'Product Website', href: siteLinks.website },
  { icon: 'github', title: 'GitHub Repository', href: siteLinks.github },
  { icon: 'file', title: 'Documentations', href: siteLinks.paper },
  { icon: 'video', title: 'Demo Video', href: siteLinks.video },
  { icon: 'activity', title: 'Presentation', href: siteLinks.presentation },
] satisfies LinkCard[];

export const teamMembers = [
  { name: 'Youssef Mohamed', role: 'Team Leader', linkedin: 'https://linkedin.com/in/USERNAME', github: 'https://github.com/USERNAME', email: 'mailto:EMAIL_HERE' },
  { name: 'Ammar Alaa', role: 'Team Member', linkedin: 'https://linkedin.com/in/USERNAME', github: 'https://github.com/USERNAME', email: 'mailto:EMAIL_HERE' },
  { name: 'Adham Mohamed', role: 'Team Member', linkedin: 'https://linkedin.com/in/USERNAME', github: 'https://github.com/USERNAME', email: 'mailto:EMAIL_HERE' },
  { name: 'Ahmed Elghazouly', role: 'Team Member', linkedin: 'https://linkedin.com/in/USERNAME', github: 'https://github.com/USERNAME', email: 'mailto:EMAIL_HERE' },
  { name: 'Ahmed Samer', role: 'Team Member', linkedin: 'https://linkedin.com/in/USERNAME', github: 'https://github.com/USERNAME', email: 'mailto:EMAIL_HERE' },
];

export const finalCta = {
  title: 'Explore Automata AI and see how automated Edge AI deployment can become simpler, faster, and more accessible.',
};
