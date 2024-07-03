import Header from "../components/Header";
import About from "../components/about";
import Interest from "../components/interest";
import ContactForm from "../components/contactForm";
import styles from './index.module.css';
import React from "react";

export async function getServerSideProps() {
  const res = await fetch('https://pruebatecnica-production-1892.up.railway.app/api/user');
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
        <About className={styles.aboutcontainer} usuario={usuario}/> 
        <ContactForm className={styles.contactcontainer} usuario={usuario}/>
      </div>
    </div>
  );
}