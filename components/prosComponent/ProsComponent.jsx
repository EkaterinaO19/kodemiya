import React from 'react';
import styles from './ProsComponent.module.scss'
import Image from "next/image";
import MiniCard from "@/components/miniCard/MiniCard";
import Sticker from "@/components/sticker/Sticker";

const ProsComponent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lorem ipsum.</h1>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Image src={'/video/boy-lesson.jpg'}
                           alt={'Image'}
                           width={500} height={300}
                           className={styles.image}
                    />
                </div>
                <div className={styles.right}>
                    <MiniCard
                        title={'Lorem ipsum.'}
                        emoji={'/image/nerd.png'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reiciendis?'}
                    />
                    <MiniCard
                        title={'Lorem ipsum.'}
                        emoji={'/image/nerd.png'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reiciendis?'}
                    />
                    <MiniCard
                        title={'Lorem ipsum.'}
                        emoji={'/image/nerd.png'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reiciendis?'}
                    />
                </div>
            </div>
            <Sticker text={'Lorem ipsum dolor sit amet.'}
                     sticker={'/image/nerd.png'}
                     top={'100%'}
                     right={'1%'}
            />
            <Image src={'/shapes/nature.svg'}
                   alt={'Shape'}
                   width={60}
                   height={60}
                   className={styles.nature}
            />
        </div>
    );
};

export default ProsComponent;