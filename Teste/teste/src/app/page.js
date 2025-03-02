"use client";
import React, { useState } from "react";
import Carta from "@/components/card";

const Page = () => {
  const [ano, setAno] = useState("");
  const [feriados, setFeriados] = useState([]);
  const [erro, setErro] = useState("");

  const buscarFeriados = async () => {
    if (!ano.trim()) {
      setErro("Digite um ano");
      return;
    }

    setErro(""); 

    try {
      const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar feriados");
      }

      const data = await response.json();
      setFeriados(data);
    } catch (error) {
      setErro("Falha ao carregar os feriados.");
    }
  };

  return (
    <div>
      <h1>Feriados no Brasil</h1>

      <div>
        <label htmlFor="ano">Digite o ano:</label>
        <input
          type="number"
          id="ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Ex: 2025"
        />
        <button onClick={buscarFeriados}>Buscar</button>
      </div>

      {erro && <p>{erro}</p>}

      <div>
        {feriados.map((feriado, index) => (
          <Carta key={index} feriado={feriado} />
        ))}
      </div>
    </div>
  );
};

export default Page;
