import React from 'react';
import styles from './CourseCard.module.scss'
import Button from "@/components/button/Button";
import Image from "next/image";
const CourseCard = ({main, text, price, image}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>{main}</h3>
                <h3>{price}</h3>
                <p className={styles.text}>
                    {text}
                </p>
                <Button size={'small'}>Записаться</Button>
            </div>
            <div className={styles.right}>
                <Image src={image}
                       alt={'Image'}
                       width={500} height={300}
                       className={styles.image}
                />
            </div>
        </div>
    );
};

export default CourseCard

