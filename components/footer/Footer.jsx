import React from 'react';
import styles from './Footer.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img />
            <div className={styles.logo}>

            </div>
            <div className={styles.links}>
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
            </div>
            <div className={styles.contacts}>
            </div>
        </footer>
    );
};

export default Footer;