import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, size, type, onClick}) => {
    const message = encodeURIComponent("Добрый день! Хочу записаться на пробный урок!");

    // URLs for Telegram and WhatsApp
    const telegramUsername = "ekaOsh"; // Замените на ваш username
    const telegramURL = `https://t.me/${telegramUsername}?text=${message}`;
    const whatsappURL = `https://wa.me/79241257278?text=Добрый%20день!%20Хочу%20записаться%20на%20пробный%20урок!`
    const vkURL = `https://vk.com/club227003919`
    // Handle button click
    const handleSignup = () => {
      // Attempt to open Telegram
      const win = window.open(telegramURL, '_blank');
      // If Telegram does not open, fallback to WhatsApp
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.open(whatsappURL, '_blank');
      }
    };

    return (
        <button className={`${styles.button} ${styles[size]}`}
                type={type} onClick={handleSignup}
        >
            {children}
        </button>
    );
};

export default Button;