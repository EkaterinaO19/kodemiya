import React from 'react';
import styles from './Feedback.module.scss';
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import FeedbackCard from "@/feedbackCard/FeedbackCard";

const Feedback = () => {
    return (
        <div className={styles.container}>
            {/*<div className={styles.title}>*/}
            {/*    <h1 >Lorem</h1>*/}
            {/*</div>*/}

            <Swiper
                slidesPerView={2}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={20}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <FeedbackCard image={'/persons/woman.jpg'}
                                  title={'Lorem ipsum.'}
                                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, possimus.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/woman.jpg'}
                                  title={'Lorem ipsum.'}
                                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, possimus.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/woman.jpg'}
                                  title={'Lorem ipsum.'}
                                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, possimus.'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackCard image={'/persons/woman.jpg'}
                                  title={'Lorem ipsum.'}
                                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, possimus.'}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Feedback;