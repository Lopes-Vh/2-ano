import Header from "../components/header/index.js";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Lopes'
  return (
    <div>
        <h1 className={styles.h1}>Lancaster x F-14</h1>
        <p>Fakour-90 sola o aim120 em velocidade</p>
        <p>Autor: {nome}</p>
        <Image className= {styles.imagem} src="/img/lancastersolaf14.png" alt="Lancaster" width={500} height={400}/>
    </div>
  );
}