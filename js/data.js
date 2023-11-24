const bands = [
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },
  { id: 1, src: '././src/img/bands/attez.png', description: 'attez' },
  { id: 2, src: '././src/img/bands/blackpink.png', description: 'attez' },
  { id: 3, src: '././src/img/bands/bts.png', description: 'attez' },
  { id: 4, src: '././src/img/bands/stray.png', description: 'attez' },
  { id: 5, src: '././src/img/bands/itzy.png', description: 'attez' },
  { id: 6, src: '././src/img/bands/twice.png', description: 'attez' },
  { id: 7, src: '././src/img/bands/nmixx.png', description: 'attez' },
  { id: 8, src: '././src/img/bands/enhypen.png', description: 'attez' },
  { id: 9, src: '././src/img/bands/txt.png', description: 'attez' },

];

let bandsItemToShow = 4;

export const showBands = ()  => {
    
    const bandsList = document.querySelector('.bands');
    console.log('Подключена функция showBands')

    const bandsItem = bands.filter(item => item.src);
    
    
    for (let i = 0; i < bandsItemToShow; i++) {
        const img = document.createElement('img');
        const li = document.createElement('li');
        console.log('Отображаем первые 8 элементов')

        img.classList.add('band-img');
        img.classList.add();

        img.src = bandsItem[i].src;
        img.alt = bandsItem[i].description;
        li.appendChild(img); 
        bandsList.appendChild(li);
    }

    const loadMoreButton = document.querySelector('.loadMoreButton');
    const loadMoreText = document.querySelector('.loadMoreText');
    loadMoreButton.addEventListener('click', () => {
        
        for (let i = bandsItemToShow; i < bandsItemToShow + 4; i++) {
            if (i < bandsItem.length) {
                console.log('Отображаем вторые 8 элементов')

                const img = document.createElement('img');
                console.log('Отображаем первые 8 элементов')
                const li = document.createElement('li'); 
                img.classList.add('band-img');
                img.src = bandsItem[i].src;
                img.alt = bandsItem[i].description;
                li.appendChild(img); 
                bandsList.appendChild(li); 
            } else {
                loadMoreButton.style.display = 'none'; 
                loadMoreText.style.display = 'none'
                break;
            }
        }
        bandsItemToShow += 8;
    });
} 


showBands();