import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Competencies from './components/Competencies';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <Competencies />
      <FinalCTA />
      <Footer />
    </main>
  );
}
