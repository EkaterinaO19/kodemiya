import React from 'react';
import styles from './ProsComponent.module.scss'
import Image from "next/image";
import MiniCard from "@/components/miniCard/MiniCard";
import Sticker from "@/components/sticker/Sticker";

const ProsComponent = () => {
    return (
        <section className={styles.container} id={'advantages'}>
            <h1 className={styles.title}>Преимущества Обучения</h1>
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
                        title={'Профессиональное обучение'}
                        emoji={'/image/nerd.png'}
                        text={'Курсы разработаны опытными профессионалами в области программирования.'}
                    />
                    <MiniCard
                        title={' Адаптированный подход'}
                        emoji={'/image/nerd.png'}
                        text={'Занятия проводятся с учетом особенностей детского восприятия, используют интерактивные методики и практические задания для лучшего усвоения материала.'}
                    />
                    <MiniCard
                        title={' Развитие критического мышления'}
                        emoji={'/image/nerd.png'}
                        text={'Дети развивают аналитическое и логическое мышление, учатся решать задачи и разрабатывать собственные проекты.'}
                    />
                </div>
            </div>
            <Sticker text={'Развитие творческого мышления!'}
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
        </section>
    );
};

export default ProsComponent;