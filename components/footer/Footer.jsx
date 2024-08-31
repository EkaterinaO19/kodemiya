import React from 'react';
import styles from './Footer.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";

const Footer = () => {
    const message = encodeURIComponent("Добрый день! Хочу записаться на пробный урок!");

    const telegramUsername = "ekaOsh"; 
    const telegramURL = `https://t.me/${telegramUsername}?text=${message}`;
    const whatsappURL = `https://wa.me/79241257278?text=Добрый%20день!%20Хочу%20записаться%20на%20пробный%20урок!`;
    const vkURL = `https://vk.com/club227003919`;

    return (
        <footer className={styles.footer} id={'contacts'}>
                <h2 className={styles.title}>Ниндзя Кодеры</h2>
            <div>
                <p>Контакты:</p>
                <div className={styles.contacts}>
                    <a href={telegramURL} target="_blank">
                    <BsTelegram className={styles.contact}/>
                    </a>
                    <a href={whatsappURL} target="_blank">
                    <BsWhatsapp className={styles.contact}/>
                    </a>
                    <a href={vkURL} target="_blank">
                    <SlSocialVkontakte className={styles.contact}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;