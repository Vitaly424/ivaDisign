import { Swiper } from 'swiper';
import {
    Navigation,
    Pagination,
    EffectFade,
    Autoplay,
    EffectCreative,
    EffectFlip,
    EffectCards,
    EffectCoverflow,
} from 'swiper/modules';

export const introSlider = () => {
    const swiper = new Swiper('.js-intro-swiper', {
        modules: [
            Navigation,
            EffectFade,
            EffectFlip,
            EffectCards,
            Autoplay,
            EffectCreative,
            EffectCoverflow,
        ],
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            // Пауза между прокруткой
            delay: 5000,
        },
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
    });
};
