import React from 'react';
import styles from './NavbarItem.module.scss'

const NavbarItem = ({ label, active}) => {
    return (
        <div className={`${styles.button} ${active ? styles.active : ''}`}>
            {label}
        </div>
    )
}

export default NavbarItem;

