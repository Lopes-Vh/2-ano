/*
import Header from "@/Componentes/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'aaa'
  return (
    <div>
        <h1 className={styles.h1}>aaaaaaaaaaaaaaaaa</h1>
        <p>Parágrafo da primeira página</p>
        <p>Autor: {nome}</p>
        <Image className= {styles.imagem} src="/images/fakeit.png" alt="mig25" width={500} height={400}/>
    </div>
  );
}*/

'use client';
import { useEffect, useState } from "react";
export default function efeitos() {
  const [ufs, setUfs] = useState([]);
  const [ufSelected, setUfSelected] = useState('');;
  const [cities, setCities] = useState([]);
  const [citySelected, setCitySelected] = useState('');;
  const getUfs = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      if (!response.ok) {
        throw new Error('erro ao buscar dados: ' + response.statusText);
      }
      const data = await response.json();
      setCities(data);
      console.log(data);
    } catch (error) {
      console.log('ocorreu algum erro: ' + error)
    }
  }
  useEffect(() => {
    getUfs();
  }, [])
  useEffect(() => {
    getCities();
  }, [ufSelected])
  return (
    <div>
      <h1>
        Efeitos Colaterais/ Use Effect
      </h1>
      {
        <select on onChange={(ev) => { setUfselected(ev.target.value), SetcitySelected("") }}>
          <option value="">selecione o estado</option>
          {ufs.map((uf) => (
            <option
              value={uf.id}
              key={uf.id}>
              {`${uf.nome} - ${uf.sigla}`}
            </option>
          ))}
        </select>
      }

      {
        <select on onChange={(ev) => { SetcitySelected(ev.target.value) }}>
          <option value="">selecione a cidade</option>
          {ufs.map((uf) => (
            <option
              value={city.nome}
              key={city.id}>
              {`${city.nome}`}
            </option>
          ))}
        </select>
      }
      {citySelected ? <p>{citySelected}</p> : <p>Aguardando</p>}
    </div>
  )
}