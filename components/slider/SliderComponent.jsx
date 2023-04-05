import Image from "next/image";
import styles from './SliderComponent.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";

import { FreeMode, Pagination, Lazy} from "swiper";

const SliderComponent = () => {


    return (
            <Swiper
                slidesPerView={2.7}
                spaceBetween={5}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <Image src={'/video/boy-lesson.jpg'}
                           alt={'Sticker'}
                           width={700} height={500}
                           className={styles.slide}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        src={'/video/main-video.mp4'}
                        controls={true}
                        width={700} height={500}
                        loop={true}
                        muted={true}
                        autoPlay={true}
                        className={styles.slide}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/video/red-girl.jpg'}
                           alt={'Sticker'}
                           width={700} height={500}
                           className={styles.slide}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/video/girl-computer.jpg'}
                           alt={'Sticker'}
                           width={700} height={500}
                           className={styles.slide}
                    />
                </SwiperSlide>
            </Swiper>
    );
};

export default SliderComponent;

// <div className={styles.card}>
//     <Image src={'/video/coding.jpg'}
//            alt={'Sticker'}
//            width={700} height={500}
//     />
// </div>