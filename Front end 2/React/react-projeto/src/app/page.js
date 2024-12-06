
import Header from "@/components/header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Lopes'
  return (
    <div>
        <h1 className={styles.h1}>Luisito Genio Suarez</h1>
        <p>Parágrafo da primeira página</p>
        <p>Autor: {nome}</p>
        <Image className= {styles.imagem} src="/img/suarez-2.jpg" alt="Milei" width={500} height={400}/>
    </div>
  );
}