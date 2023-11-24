export const initGeneralSlider = () => {
    console.log('initGeneralSlider');
    console.log(innerWidth)
    const swiper = new Swiper(".new-items-2", {
        slidesPerView: 2,
        spaceBetween: 15,
        grid: {
            rows: 2,
        },
        navigation: {
            nextEl: '.next-new--item',
            prevEl: '.prev-new--item',
        },

        breakpoints: {
            320: {
                grid: {
                    rows: 2,
                },
            },
            460: {
                grid: {
                    rows: 1,
                },
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
                grid: {
                    rows: 1,
                },
            },

            1023: {
                slidesPerView: 4,
                spaceBetween: 20,
                grid: {
                    rows: 1,
                },
            },
        }
    });
}