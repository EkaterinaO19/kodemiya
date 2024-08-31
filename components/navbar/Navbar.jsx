import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const message = encodeURIComponent("Добрый день! Хочу записаться на пробный урок!");

    // URLs for Telegram and WhatsApp
    const telegramUsername = "ekaOsh"; // Замените на ваш username
    const telegramURL = `https://t.me/${telegramUsername}?text=${message}`;
    const whatsappURL = `https://wa.me/79241257278?text=Добрый%20день!%20Хочу%20записаться%20на%20пробный%20урок!`
    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ниндзя Кодеры</h1>
                <div className={styles.menu}>
    
                <h3 className={styles.social}> 
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>
                </h3>
                <h3 className={styles.social}>
                    <a href={telegramURL} target="_blank" rel="noopener noreferrer">
                        Telegram
                    </a>
                </h3>         
                </div>
            </div>
        </nav>
    );
};

export default Navbar;