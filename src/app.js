import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { waapi, stagger, createSpring, animate } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js: DOMContentLoaded - 開始');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 500,
    grabCursor: true,
  });
  console.log('Swiper initialized:', swiper);

  const handleSlideChange = () => {
    const realIndex = swiper.realIndex;
    console.log('実スライドインデックス:', realIndex);

    const targets = ['about', 'hobby', 'works'];
    const target = targets[realIndex];
    console.log('アクティブスライドの data-target:', target);

    document.querySelectorAll('.content').forEach((content) => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(`content-${target}`);
    if (activeContent) {
      activeContent.classList.add('active');

      const imagesToAnimate = activeContent.querySelectorAll('.content-img');
      waapi.animate(imagesToAnimate, {
        x: [0, -30, 0],
        ease: createSpring({ stiffness: 150, damping: 5 }),
        delay: stagger(75),
        loop: true,
      });
    }

    const activeSlide = swiper.slides[swiper.activeIndex];
    const swiperImagesToAnimate = activeSlide.querySelectorAll(
      '.portfolio-card img',
    );
    waapi.animate(swiperImagesToAnimate, {
      y: [0, -30, 0],
      ease: createSpring({ stiffness: 150, damping: 5 }),
      delay: stagger(75),
      loop: true,
    });
  };

  handleSlideChange();

  swiper.on('slideChange', handleSlideChange);
});
