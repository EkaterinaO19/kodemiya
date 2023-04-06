import React from 'react';
import styles from './FeedbackCard.module.scss'
import Image from "next/image";
const FeedbackCard = ({image, text, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src={image}
                       alt={'image'}
                       width={200}
                       height={150}
                       className={styles.image}/>
            </div>
            <div className={styles.right}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;