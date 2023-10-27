import "./App.css";
import ScrollAnimations from "./components/ScrollAnimations";
import Hero from "./components/Hero";
import CardHolder from "./components/Cards/CardHolder";
import ContactForm from "./components/ContactForm";

function Home() {
  return (
    <div className="App">
      <ScrollAnimations />
      <Hero />
      <CardHolder />
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
