import React, {useEffect, useState} from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import styles from './Navbar.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";

const TOP_OFFSET = 66;
const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={styles.navigation}>
            <div className={`${styles.container} ${showBackground ? styles.toggled : ''}`}>
                <div className={styles.logo}>
                    <h1>Coddemiya.</h1>
                </div>
                <div className={styles.menu}>
                    <NavbarItem label={'Home'} active/>
                    <NavbarItem label={'Home'} active/>
                    <NavbarItem label={'Home'} active/>
                    <NavbarItem label={'Home'} active/>
                    <NavbarItem label={'Home'} active/>
                </div>
                <div className={styles.phone}>
                    <BsTelephoneFill />
                    <h1>8 898 989 88 98</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;