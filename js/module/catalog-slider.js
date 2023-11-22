export const initCatalogSlider = () => {
  const itemSlider = function () {
      const item = document.querySelector('.catalog-item');
      console.log(innerWidth)
      let swiper;
      if (item) {
          swiper = new Swiper(item, {
              // loop: true,
              direction: 'horizontal',
              spaceBetween: 15,


              // If we need pagination
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              breakpoints: {
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    grid: {
                      rows: 2,
                      cols: 2,
                    },
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },

                  767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  }
                }
          });
      }
  };

  itemSlider();
}