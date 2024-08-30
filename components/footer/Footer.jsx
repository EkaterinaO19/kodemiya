import React from 'react';
import styles from './Footer.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";

const Footer = () => {
    return (
        <footer className={styles.footer} id={'contacts'}>
                <h1 className={styles.title}>Ниндзя Кодеры</h1>
            <div className={styles.links}>
                <NavbarItem link={'#courses'} label={'Курсы'} active />
                <NavbarItem link={'#advantages'} label={'Преимущества'}  />
                <NavbarItem  link={'#feedback'}  label={'Отзывы'}  />
                <NavbarItem  link={'#contacts'}  label={'Контакты'}  />
            </div>
            <div>
                <p>Подпишитесь на нас:</p>
                <div className={styles.contacts}>
                    <a href="https://t.me/coddemik" target="_blank">
                    <BsTelegram className={styles.contact}/>
                    </a>
                    <a href="https://wa.me/79241257278" target="_blank">
                    <BsWhatsapp className={styles.contact}/>
                    </a>
                    <SlSocialVkontakte className={styles.contact}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;