import React from 'react';
import styles from './Footer.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";
import {AiFillFacebook} from "react-icons/all";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img />
            <div className={styles.logo}>
                <h1>Coddemic</h1>
            </div>
            <div className={styles.links}>
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
                <NavbarItem label={'Home'} />
            </div>
            <div className={styles.contacts}>
                <p>Lorem ipsum dolor.</p>
                <AiFillFacebook />
            </div>
        </footer>
    );
};

export default Footer;