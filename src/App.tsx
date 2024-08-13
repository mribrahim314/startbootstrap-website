
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import DownloadCTA from './components/DownloadCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';



function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Services />
      <Portfolio />
      <DownloadCTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;