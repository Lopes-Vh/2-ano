'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState({
        medico: false,
        paciente: false,
        consulta: false,
    });

    const toggleSubmenu = (item) => {
        setSubmenuVisible((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <h1 className={styles.title}>Header</h1>
                    <Image
                        className={styles.logo}
                        src="/im g/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>
                <button
                    className={styles.button}
                    onClick={() => setMenuVisible(!menuVisible)}
                    aria-label="Toggle menu"
                >
                    {menuVisible ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <AnimatePresence>
                {menuVisible && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ul className={styles.navOptions}>
                            <li className={styles.navItem} key="medico">
                                <button onClick={() => toggleSubmenu('medico')}>
                                    Médico
                                </button>
                                <AnimatePresence>
                                    {submenuVisible.medico && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={styles.submenu}
                                        >
                                            <li>
                                                <Link href="/medico/agenda">Agenda</Link>
                                            </li>
                                            <li>
                                                <Link href="/medico/perfil">Perfil</Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li className={styles.navItem} key="paciente">
                                <button onClick={() => toggleSubmenu('paciente')}>
                                    Paciente
                                </button>
                                <AnimatePresence>
                                    {submenuVisible.paciente && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={styles.submenu}
                                        >
                                            <li>
                                                <Link href="/paciente/historico">Histórico</Link>
                                            </li>
                                            <li>
                                                <Link href="/paciente/dados">Dados</Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li className={styles.navItem} key="consulta">
                                <button onClick={() => toggleSubmenu('consulta')}>
                                    Consulta
                                </button>
                                <AnimatePresence>
                                    {submenuVisible.consulta && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={styles.submenu}
                                        >
                                            <li>
                                                <Link href="/consulta/solicitar">Solicitar</Link>
                                            </li>
                                            <li>
                                                <Link href="/consulta/status">Status</Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;