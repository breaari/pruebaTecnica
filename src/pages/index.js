import Header from "../components/Header";
import About from "./about";
import Interest from "./interest";
import ContactForm from "./contactForm";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <div>
        <About></About>
        <ContactForm/>
      </div>
    </div>
  );
}