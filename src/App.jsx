import Navbar from './components/navbar';
import HeroSection from './components/hero_section';
import FeaturesSection from './components/features_section';
import HowItWorksSection from './components/how_it_works_section';
import CommunitySection from './components/community_section';
import DownloadSection from './components/download_section';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen font-manrope">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CommunitySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
