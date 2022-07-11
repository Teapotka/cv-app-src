import style from './Container.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Skills } from './Skills/Skills';
import { Contacts } from './Contacts/Contacts';
export const Container = () => {
    return (
        <>
            <div className={style.box}>
                <Swiper
                    className={style.swiper}
                    modules={[Pagination]}
                    direction={'vertical'}
                    mousewheel
                    keyboard
                    loop
                    shortSwipes
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide><Home /></SwiperSlide>
                    <SwiperSlide><About /></SwiperSlide>
                    <SwiperSlide><Skills /></SwiperSlide>
                    <SwiperSlide><Contacts /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
