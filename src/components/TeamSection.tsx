import { Github, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/siteData';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function TeamSection() {
  return (
    <section id="team" className="section-shell">
      <SectionHeader
        eyebrow="TEAM"
        title="Meet the team."
        description="The graduation project team behind Automata AI."
      />
      <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {teamMembers.map((member) => {
          const initials = member.name
            .split(' ')
            .map((part) => part[0])
            .join('')
            .slice(0, 2);

          return (
            <article key={member.name} className="glass rounded-lg p-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/20 bg-gradient-to-br from-violet-500/40 to-cyan-400/20 text-base font-black text-white shadow-cyan">
                {initials}
              </div>
              <h3 className="mt-4 text-sm font-black text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{member.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} className="icon-button">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={member.github} aria-label={`${member.name} GitHub`} className="icon-button">
                  <Github className="h-4 w-4" />
                </a>
                <a href={member.email} aria-label={`Email ${member.name}`} className="icon-button">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}
