'use client'
import React, { useState, useEffect } from "react";
import Header from '@/components/header';
import styles from "./x.module.css";

const urlPadrao = "https://api-clinica-2a.onrender.com/x";

export default function X() {
    const [dados, setDados] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    async function apresentarTodosX() {
        try {
            const response = await fetch(urlPadrao);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setDados(data);
            setDadosFiltrados(data); 
        } catch (error) {
            console.log('Ocorreu algum erro:' + error);
        }
    }

    const pesquisarXPorNome = (nome) => {
        const filtrados = dados.filter((item) =>
            item.nome.toLowerCase().includes(nome.toLowerCase())
        );
        setDadosFiltrados(filtrados);
    };

    useEffect(() => {
        apresentarTodosX();
    }, []);

    return (
        <div className={styles.body}>
            <Header />
            <div className={styles.fundo}>
                <div className={styles.titulo2}>
                    <h1 className={styles.titulo}>Lista de X</h1>
                </div>

                <div className={styles.input}>  
                    <input
                        type="text"
                        placeholder="Pesquisar X por nome..."
                        onChange={(e) => pesquisarXPorNome(e.target.value)}
                    />
                </div>

                <div className={styles.tabela}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Especialidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosFiltrados.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
