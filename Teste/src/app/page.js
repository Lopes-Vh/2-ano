import styles from './page.module.css'
import Image from 'next/image'
import Header from '@/components/header';

export default function Home() {

  return (
    <div className={styles.div}>
      <Header />
      <h1 className={styles.titulo}>
        Bem-vindo ao 
      </h1>
      <p className={styles.p}></p>
      <p className={styles.p2}></p>
    </div>
  );
}