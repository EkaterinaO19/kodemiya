import React from 'react';
import styles from '@/components/mainScreen/MainScreen.module.scss'
import Button from "@/components/button/Button";
import Sticker from "@/components/sticker/Sticker";
import Image from 'next/image';
import img from '../../public/image/heart.png'
import Slider from "@/components/slider/SliderComponent";

const MainScreen = () => {
    return (
        <>
            <div className={styles.container}>
                <Sticker text={'Lorem ipsum dolor sit amet.'}
                         sticker={'/image/heart.png'}
                         top={'20%'}
                         left={'3%'}
                />
                <div className={styles.center}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                    <Button size={'medium'}>lorem</Button>
                </div>
                <Sticker text={'Lorem ipsum dolor sit amet.'}
                         sticker={'/image/nerd.png'}
                         top={'10%'}
                         right={'3%'}
                />
                <Sticker text={'Lorem ipsum dolor sit amet sit amet.'}
                         top={'18%'}
                         right={'4%'}
                />
                <Image
                    src="/shapes/sparkle.svg"
                    height={50} width={50}
                    alt={'Figure'}
                    className={styles.sparkle}
                />
                <Image
                    src="/shapes/half.svg"
                    height={50} width={50}
                    alt={'Figure'}
                    className={styles.half}
                />
            </div>
            <div className={styles.slider}>
                <Slider/>
            </div>
        </>
    );
};

export default MainScreen;