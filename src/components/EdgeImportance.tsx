import { edgeDevices } from '../data/siteData';
import { FeatureCard } from './FeatureCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function EdgeImportance() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <SectionHeader
          align="left"
          eyebrow="WHY EDGE AI"
          title="Run intelligence closer to where data is collected."
          description="Edge AI reduces latency and cloud dependency by moving inference onto devices such as Arduino boards, ESP32 modules, Raspberry Pi systems, smart cameras, and IoT hardware."
        />
        <Reveal className="grid gap-4 sm:grid-cols-2">
          {edgeDevices.map((device) => (
            <FeatureCard key={device.title} {...device} compact />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
