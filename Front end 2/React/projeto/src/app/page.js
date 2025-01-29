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

export default function Efeitos() {
  const [ufs, setUfs] = useState([]);
  const [ufSelected, setUfSelected] = useState(''); 
  const [cities, setCities] = useState([]);
  const [citySelected, setCitySelected] = useState(''); 

  const getUfs = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados: ' + response.statusText);
      }
      const data = await response.json();
      setUfs(data);
      console.log(data);
    } catch (error) {
      console.log('Ocorreu algum erro: ' + error);
    }
  };

  const getCities = async () => { 
    if (ufSelected) {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios`);
        if (!response.ok) {
          throw new Error('Erro ao buscar cidades: ' + response.statusText);
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.log('Ocorreu algum erro: ' + error);
      }
    }
  };

  useEffect(() => {
    getUfs();
  }, []);

  useEffect(() => {
    getCities();
  }, [ufSelected]);

  return (
    <div>
      <h1>
        Efeitos Colaterais / Use Effect
      </h1>
      <select onChange={(ev) => { setUfSelected(ev.target.value); setCitySelected(""); }}>
        <option value="">Selecione o estado</option>
        {ufs.map((uf) => (
          <option value={uf.id} key={uf.id}>
            {`${uf.nome} - ${uf.sigla}`}
          </option>
        ))}
      </select>

      <select onChange={(ev) => { setCitySelected(ev.target.value); }}>
        <option value="">Selecione a cidade</option>
        {cities.map((city) => ( 
          <option value={city.id} key={city.id}> {}
            {`${city.nome}`}
          </option>
        ))}
      </select>
      {citySelected ? <p>{citySelected}</p> : <p>Aguardando</p>}
    </div>
  );
}
