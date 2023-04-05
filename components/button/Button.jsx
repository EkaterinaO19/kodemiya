import React from 'react';
import styles from './Button.module.scss'
const Button = ({children, size}) => {
    return (
        <button className={`${styles.button} ${styles[size]}`}>
            {children}
        </button>
    );
};

export default Button;