import { AuroraBackground } from './components/AuroraBackground';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { Navbar } from './components/Navbar';
import { QuickValueSection } from './components/QuickValueSection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <QuickValueSection />
        <LinksSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
