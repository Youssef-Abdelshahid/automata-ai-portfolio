import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { Navbar } from './components/Navbar';
import { NetworkBackground } from './components/NetworkBackground';
import { QuickValueSection } from './components/QuickValueSection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  return (
    <>
      <NetworkBackground />
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
