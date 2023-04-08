import React from 'react';
import styles from './NavbarItem.module.scss'
import Link from "next/link";

const NavbarItem = ({ label, active, link}) => {
    return (
        <div className={`${styles.button} ${active ? styles.active : ''}`}>
            <Link href={link} className={styles.button}>
                {label}
            </Link>
        </div>
    )
}

export default NavbarItem;

