import React from 'react';
import {BsTelephoneFill} from 'react-icons/bs';
import styles from './Navbar.module.scss'
import NavbarItem from "@/components/navbarItem/NavbarItem";

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <h1 className={styles.title}>Кодемия.</h1>
                <div className={styles.menu}>
                    <NavbarItem link={'#courses'} label={'Курсы'} active/>
                    <NavbarItem link={'#advantages'} label={'Преимущества'}/>
                    <NavbarItem link={'#feedback'} label={'Отзывы'}/>
                    <NavbarItem link={'#contacts'} label={'Контакты'}/>
                </div>
                <div className={styles.phone}>
                    <BsTelephoneFill/>
                    <h1 className={styles.number}>+66 64 653 1267</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;