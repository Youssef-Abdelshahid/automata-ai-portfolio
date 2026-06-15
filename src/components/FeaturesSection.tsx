import { featureCards } from '../data/siteData';
import { FeatureCard } from './FeatureCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell">
      <SectionHeader
        eyebrow="WHAT IT DOES"
        title="The important idea in four steps."
        description="Automata AI helps turn project data into a small-device AI package while keeping the pipeline easy to understand."
      />
      <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </Reveal>
    </section>
  );
}
