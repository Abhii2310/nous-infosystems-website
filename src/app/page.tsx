import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSpace from './components/ProblemSpace';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import Industries from './components/Industries';
import Competencies from './components/Competencies';
import SocialProof from './components/SocialProof';
import Careers from './components/Careers';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSpace />
      <Services />
      <SocialProof />
      <TrustSection />
      <Industries />
      <Competencies />
      <Careers />
      <FinalCTA />
      <Footer />
      <AIAssistant />
    </main>
  );
}

