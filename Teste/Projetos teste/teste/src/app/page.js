"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [pselecionado, setPselecionado] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {dados.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>
                <button onClick={() => setPselecionado(produto)}>
                  {produto.title}
                </button>
              </td>
              <td>${produto.price}</td>
              <td>{produto.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {pselecionado && (
        <div style={{ marginTop: "20px" }}>
          <h2>Detalhes do Produto</h2>
          <img src={pselecionado.image} alt={pselecionado.title} width="150" />
          <p><strong>Título:</strong> {pselecionado.title}</p>
          <p><strong>Preço:</strong> ${pselecionado.price}</p>
          <p><strong>Descrição:</strong> {pselecionado.description}</p>
          <p><strong>Categoria:</strong> {pselecionado.category}</p>
        </div>
      )}
    </div>
  );
}