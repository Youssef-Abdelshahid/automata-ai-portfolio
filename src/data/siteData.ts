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
  caption: string;
};

export const siteLinks = {
  website: 'https://automataai.app',
  github: 'https://github.com/Youssef-Abdelshahid/Automata-AI',
  paper: 'https://drive.google.com/drive/folders/1miidTEiUC9B7SFGjivKZm6IsbzQEsKdz?usp=sharing',
  video: 'https://drive.google.com/drive/folders/1RfCyFDKs-aV7ohHxh1vSonuKuZbSewzj?usp=sharing',
  presentation:
    'https://docs.google.com/presentation/d/1Q6Lxze4zpw9ptBJ5GXs7GQx9G07_uWJe/edit?usp=sharing&ouid=112428749247863205887&rtpof=true&sd=true',
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
  { icon: 'globe', title: 'Product Website', href: siteLinks.website, caption: 'Try the live platform' },
  { icon: 'github', title: 'GitHub Repository', href: siteLinks.github, caption: 'Browse the source code' },
  { icon: 'file', title: 'Documentation', href: siteLinks.paper, caption: 'Read the project docs' },
  { icon: 'video', title: 'Demo & Marketing Videos', href: siteLinks.video, caption: 'Watch it in action' },
  { icon: 'activity', title: 'Presentation', href: siteLinks.presentation, caption: 'View the slides' },
] satisfies LinkCard[];

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  photoPosition?: string;
  photoZoom?: string;
  linkedin: string;
  github: string;
  email: string;
  cv: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Youssef Mohamed',
    role: 'Team Leader',
    photo: '/team/youssef.jpg',
    photoPosition: '50% 52%',
    photoZoom: '258%',
    linkedin: 'https://linkedin.com/in/youssef-mohamed-a5a61326b',
    github: 'https://github.com/Youssef-Abdelshahid',
    email: 'mailto:youssefmoshahid@gmail.com',
    cv: 'https://drive.google.com/file/d/1U7gd2qnt-KQosVpYKl4xWJWH1r66_m-5/view?usp=sharing',
  },
  {
    name: 'Adham Mohamed',
    role: 'Team Member',
    photo: '/team/adham.jpg',
    photoPosition: '50% 44%',
    photoZoom: '182%',
    linkedin: 'https://www.linkedin.com/in/adham-m-722379282',
    github: 'https://github.com/Adham-Mohamed-lo',
    email: 'mailto:Adhammohamed1300@gmail.com',
    cv: 'https://drive.google.com/file/d/1j3tilg-zAzYDOkQs5qeE6iabsHLD5-w1/view?usp=sharing',
  },
  {
    name: 'Ahmed Elghazouly',
    role: 'Team Member',
    photo: '/team/ahmed-elghazouly.jpg',
    photoPosition: '51% 38%',
    photoZoom: '200%',
    linkedin: 'https://www.linkedin.com/in/ahmed-elghazouly-0b0926269',
    github: 'https://github.com/Ahmed-Elghazouly',
    email: 'mailto:ahmedelghazouly10@gmail.com',
    cv: 'https://drive.google.com/file/d/1dpcOx_TJJd61SapcNZexcP5aDEtA3AZu/view?usp=sharing',
  },
  {
    name: 'Ahmed Samer',
    role: 'Team Member',
    photo: '/team/ahmed-samer.jpg',
    photoPosition: '49% 30%',
    photoZoom: '145%',
    linkedin: 'https://www.linkedin.com/in/ahmed-samer-sayed',
    github: 'https://github.com/Samortchy',
    email: 'mailto:ahmedsamersayed22@gmail.com',
    cv: 'https://drive.google.com/file/d/1cdHSBYC-DZvXp7Sr3DpGoCuQftKn_sI2/view?usp=sharing',
  },
  {
    name: 'Ammar Alaa',
    role: 'Team Member',
    photo: '/team/ammar.jpg',
    photoPosition: '49% 39%',
    photoZoom: '340%',
    linkedin: 'https://www.linkedin.com/in/ammar-bektash-a44833268',
    github: 'https://github.com/ABektash',
    email: 'mailto:ammarbektash@gmail.com',
    cv: 'https://drive.google.com/file/d/1XADJxo5vIoDgKNgttx18QiRB68zbEDrI/view?usp=sharing',
  },
];

export const finalCta = {
  title: 'Explore Automata AI and see how automated Edge AI deployment can become simpler, faster, and more accessible.',
};
