//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  var user = "Lopes"
  return (
    <div>
        <h1>Olá mundo</h1>
        <p>Usúario: {user}</p>
    </div>
  );
}
