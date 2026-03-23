import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import SocialProof from '../sections/SocialProof';
import DashboardStats from '../sections/DashboardStats';
import Features from '../sections/Features';
import MobileApp from '../sections/MobileApp';
import Highlights from '../sections/Highlights';
import Testimonials from '../sections/Testimonials';

export default function Home() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <Hero />
      <TrustBar />
      <SocialProof />
      <DashboardStats />
      <Features />
      <MobileApp />
      <Highlights />
      <Testimonials />
      <Footer />
    </div>
  );
}
