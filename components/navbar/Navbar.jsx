import React from 'react';
import {BsTelephoneFill} from 'react-icons/bs';
import styles from './Navbar.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";

const Navbar = () => {

    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <h1 className={styles.title}>Coddemiya.</h1>
                <div className={styles.menu}>
                    <NavbarItem label={'Home'} active />
                    <NavbarItem label={'Home'} active />
                    <NavbarItem label={'Home'} active />
                    <NavbarItem label={'Home'} active />
                    <NavbarItem label={'Home'} active />
                </div>
                <div className={styles.phone}>
                    <BsTelephoneFill />
                    <h1 className={styles.number}>8 898 989 88 98</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;