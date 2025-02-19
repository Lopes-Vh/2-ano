'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState({});

    const menuItems = [
        {
            key: 'pasta1',
            label: 'Pastas1',
            links: [
                { href: '/x/arq', label: 'Listar ' },
            ],
        },
        {
            key: 'pasta2',
            label: 'Pastas2',
            links: [
                { href: '/x/arq', label: 'Listar ' },
            ],
        },
        {
            key: 'pasta3',
            label: 'Pastas3',
            links: [
                { href: '/x/arq', label: 'Listar' },
            ],
        },
    ];

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
                    <a href="/"> 
                        <Image
                            className={styles.logo}
                            src="/img/logo.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </a>
                </div>

                <button
                    className={styles.button}
                    onClick={() => setMenuVisible(!menuVisible)}
                    aria-label="Toggle menu"
                >
                    {menuVisible ? '✖' : '☰'}
                </button>
            </div>
            <AnimatePresence>
                {menuVisible && (
                    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                        <ul className={styles.navOptions}>
                            {menuItems.map(({ key, label, links }) => (
                                <li className={styles.navItem} key={key}>
                                    <button onClick={() => toggleSubmenu(key)}>{label}</button>
                                    <AnimatePresence>
                                        {submenuVisible[key] && (
                                            <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={styles.submenu}>
                                                {links.map(({ href, label }) => (
                                                    <li key={href}>
                                                        <Link href={href}>{label}</Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
