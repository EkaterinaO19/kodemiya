import React from 'react';
import styles from './MiniCard.module.scss';
import Image from "next/image";

const MiniCard = ({emoji, text, title}) => {
    return (
        <div className={styles.container}>
            <Image src={emoji} alt={'Emoji'} height={30} width={30} className={styles.emoji}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default MiniCard;