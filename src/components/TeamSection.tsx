import { useState } from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/siteData';
import { asset } from '../lib/asset';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

function Avatar({
  photo,
  name,
  position,
  zoom,
}: {
  photo: string;
  name: string;
  position?: string;
  zoom?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  if (failed) {
    return (
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-br from-violet-500/40 to-cyan-400/20 text-base font-black text-white shadow-cyan">
        {initials}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Portrait of ${name}`}
      className="mx-auto h-16 w-16 rounded-full border border-cyan-200/20 bg-cover bg-no-repeat shadow-cyan"
      style={{
        backgroundImage: `url(${asset(photo)})`,
        backgroundPosition: position ?? '50% 30%',
        backgroundSize: zoom ?? '135%',
      }}
    >
      <img src={asset(photo)} alt="" className="h-0 w-0 opacity-0" loading="lazy" decoding="async" onError={() => setFailed(true)} />
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="section-shell">
      <SectionHeader
        eyebrow="TEAM"
        title="Meet the team."
        description="The graduation project team behind Automata AI."
      />
      <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {teamMembers.map((member) => (
          <article key={member.name} className="glass rounded-lg p-4 text-center">
            <Avatar
              photo={member.photo}
              name={member.name}
              position={member.photoPosition}
              zoom={member.photoZoom}
            />
            <h3 className="mt-4 text-sm font-black text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{member.role}</p>
            <div className="mt-4 flex justify-center gap-2">
              <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="icon-button">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} on GitHub`} className="icon-button">
                <Github className="h-4 w-4" />
              </a>
              <a href={member.email} aria-label={`Email ${member.name}`} className="icon-button">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <a
              href={member.cv}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-200 transition hover:border-cyan-200/40 hover:bg-cyan-300/10 hover:text-cyanGlow"
            >
              <FileText className="h-3.5 w-3.5" />
              View CV
            </a>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
