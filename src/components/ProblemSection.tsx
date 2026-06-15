import { problemCards } from '../data/siteData';
import { FeatureCard } from './FeatureCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function ProblemSection() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="THE PROBLEM"
        title="Building the model is only half the story."
        description="For many projects, the real challenge is turning an idea into something that can run on a small device and be explained clearly in a demo."
      />
      <Reveal className="grid gap-4 md:grid-cols-3">
        {problemCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </Reveal>
    </section>
  );
}
