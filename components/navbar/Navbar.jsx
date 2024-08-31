import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faVk } from '@fortawesome/free-brands-svg-icons';
import styles from './Navbar.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";

const Navbar = () => {
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
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ниндзя Кодеры</h1>
                <div className={styles.menu}>
                    <NavbarItem link={'#courses'} label={'Курсы'} active/>
                    <NavbarItem link={'#advantages'} label={'Преимущества'}/>
                    <NavbarItem link={'#feedback'} label={'Отзывы'}/>
                    {/* <NavbarItem link={'#contacts'} label={'Контакты'}/> */}
                </div>
                <div >
                    <a href={telegramURL} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
                    </a>
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x"  />
                    </a>
                    <a href={vkURL} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faVk} size="2x" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;