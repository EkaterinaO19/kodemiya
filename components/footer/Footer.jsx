import React from 'react';
import styles from './Footer.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <h1 className={styles.title}>Coddemic</h1>
            <div className={styles.links}>
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
            </div>
            <div>
                <p>Lorem ipsum dolor.</p>
                <div className={styles.contacts}>
                    <BsTelegram />
                    <BsWhatsapp />
                    <SlSocialVkontakte />
                </div>
            </div>
        </footer>
    );
};

export default Footer;