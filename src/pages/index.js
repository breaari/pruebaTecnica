import Header from "../components/Header";
import About from "./about";
import Interest from "./interest";
import ContactForm from "./contactForm";
import styles from './index.module.css';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/user');
  const usuario = await res.json();

  return {
    props: {
      usuario
    }
  };
}

export default function HomePage({usuario}) {
  return (
    <div className={styles.container}>
      <div className={styles.headercontainer}>
        <Header usuario={usuario}/>
        <Interest usuario={usuario}/>
      </div>
      <div className={styles.infocontainer}>
        <About usuario={usuario}/>
        
        <ContactForm usuario={usuario}/>
      </div>
    </div>
  );
}