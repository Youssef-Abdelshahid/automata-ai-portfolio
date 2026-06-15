import { FeatureCard } from './FeatureCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const quickValues = [
  {
    icon: 'sparkles',
    title: 'Less manual setup',
    body: 'Automata AI reduces the repeated steps needed to prepare and train a model.',
  },
  {
    icon: 'chip',
    title: 'Made for small devices',
    body: 'The workflow keeps real hardware limits in mind from the start.',
  },
  {
    icon: 'package',
    title: 'Ready to show',
    body: 'The output includes useful files and a report that are easier to demo.',
  },
] as const;

export function QuickValueSection() {
  return (
    <section className="section-shell py-8 md:py-12">
      <SectionHeader
        eyebrow="WHY IT HELPS"
        title="A shorter path from idea to demo."
        description="Automata AI helps Edge AI projects move faster from raw data to a clear, demo-ready result."
      />
      <Reveal className="grid gap-3 md:grid-cols-3">
        {quickValues.map((value) => (
          <FeatureCard key={value.title} {...value} compact />
        ))}
      </Reveal>
    </section>
  );
}
