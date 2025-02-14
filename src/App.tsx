// App.jsx
import './App.css';
import Header from './Layouts/Header';
import ContactUs from './pages/ContactUs/contactUs';
import Footer from './Layouts/Footer';
import HeroSection from './pages/HeroSection/HeroSection';
import BlackSection from './pages/BlackSection/BlackSection';


const AutomotivePage = () => {
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Black Section */}
     <BlackSection/>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutomotivePage;