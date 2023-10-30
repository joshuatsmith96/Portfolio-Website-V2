import "./App.css";
import ScrollAnimations from "./components/ScrollAnimations";
import Hero from "./components/Hero";
import CardHolder from "./components/Cards/CardHolder";
import CardHolderDesktop from "./components/Cards/CardHolderDesktop";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';

function Home() {
  return (
    <div className="App">
      <ScrollAnimations />
      <Hero />
      <CardHolder />
      <CardHolderDesktop />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
