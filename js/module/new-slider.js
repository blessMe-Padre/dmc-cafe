export const initNewSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.new-item');
        console.log(innerWidth)
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                loop: true,
                autoplay: {
                    delay: 3000
                },
                direction: 'horizontal',
                spaceBetween: 15,
                slidesPerView: 4,
                equalHeight: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 15
                    },
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 15
                    },
                    767: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                      slidesPerGroup: 4
                    }
                  }
            });
        }
    };

    itemSlider();
}