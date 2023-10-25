import "./App.css";
import ScrollAnimations from "./components/ScrollAnimations";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import CardHolder from "./components/Cards/CardHolder";
import Spacer from "./components/Spacer";
import ContactForm from "./components/ContactForm";

function Home() {
  return (
    <div className="App">
      <ScrollAnimations />
      <HeaderBar />
      <Hero />
      <CardHolder />
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
