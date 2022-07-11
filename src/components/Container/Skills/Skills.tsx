import React from 'react'
import style from './Skills.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { skills } from './SkillsArray';
import { SwipeItem } from './SwipeItem'
export const Skills = () => {

    const { container, box, label } = style
    return (
        <div className={`${container} gridLayout`}>
            <div className={`${label} subhead`}>Hard Skills</div>
            <div className={`${box} boxItem`}>
                <Swiper
                    modules={[Pagination]}
                    direction={'horizontal'}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    shortSwipes
                    pagination={{ clickable: true }}
                >
                    {skills.map(i => <SwiperSlide key={skills.indexOf(i)}><SwipeItem array={i} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}