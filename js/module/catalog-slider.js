export const initCatalogSlider1 = () => {
  const itemSlider = function () {
      const item = document.querySelector('.catalog-item-1');
      console.log(innerWidth)
      let swiper;
      if (item) {
          swiper = new Swiper(item, {
              // loop: true,
              direction: 'horizontal',
              spaceBetween: 15,
              loop: true,
              slidesPerGroup: 4,
              slidesPerView: 2,

              navigation: {
                nextEl: '.next-catalog--item',
                prevEl: '.prev-catalog--item', 
              },
              breakpoints: {
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
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
export const initCatalogSlider2 = () => {
  const itemSlider = function () {
      const item = document.querySelector('.catalog-item-2');
      console.log(innerWidth)
      let swiper;
      if (item) {
          swiper = new Swiper(item, {
              // loop: true,
              direction: 'horizontal',
              spaceBetween: 15,


              navigation: {
                nextEl: '.next-catalog--item',
                prevEl: '.prev-catalog--item', 
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