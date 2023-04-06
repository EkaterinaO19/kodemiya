import React from 'react';
import styles from './Button.module.scss'
const Button = ({children, size, type, onClick}) => {
    return (
        <button className={`${styles.button} ${styles[size]}`}
                type={type} onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;