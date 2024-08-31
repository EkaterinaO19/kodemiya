import React, { lazy, Suspense } from 'react';
import styles from './MainScreen.module.scss'; // use relative import
import Button from '@/components/button/Button'; // use alias path
import Sticker from '@/components/sticker/Sticker'; // use alias path
import Image from 'next/image';

const Slider = lazy(() => import('@/components/slider/SliderComponent'));
const MainScreen = () => {
    return (
        <>
            <section className={styles.container}>
                <Sticker text={'Люблю узнавать новое'}
                         sticker={'/image/heart.png'}
                         top={'23%'}
                         left={'3%'}
                />
                <div className={styles.center}>
                    <h1 className={styles.title}>Программирование для детей от 7 лет.</h1>
                    <span className={styles.title_second}>Индивидуальные онлайн-уроки программирования для детей и подростков от 7 до 17 лет. Занятия проводятся на русском и английском языках.!</span>
                    <Button size={'medium'}>Записаться</Button>
                </div>
                <Sticker text={'Хочу создавать свои игры'}
                         sticker={'/image/nerd.png'}
                         top={'10%'}
                         right={'3%'}
                />
                <Sticker text={'Обожаю компьютеры!'}
                         top={'25%'}
                         right={'1%'}
                />
                <Image
                    src="/shapes/sparkle.svg"
                    height={50}
                    width={50}
                    alt="Figure"
                    layout="fixed" // specify layout prop for optimal rendering
                    className={styles.sparkle}
                />
            </section>
            <div className={styles.slider}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Slider /> {/* lazy load the Slider component */}
                </Suspense>
            </div>
        </>
    );
};

export default MainScreen;