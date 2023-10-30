import "./App.css";
import ScrollAnimations from "./components/ScrollAnimations";
import Hero from "./components/Hero";
import CardHolder from "./components/Cards/CardHolder";
import CardHolderDesktop from "./components/Cards/CardHolderDesktop";
import ContactForm from "./components/ContactForm";

function Home() {
  return (
    <div className="App">
      <ScrollAnimations />
      <Hero />
      <CardHolder />
      <CardHolderDesktop />
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
