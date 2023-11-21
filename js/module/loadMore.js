const loadMoreBtn = document.querySelector('.load-more-js');

if (loadMoreBtn) {
    let itemsToShow = 4; 
    console.log('Жмяк')


    loadMoreBtn.addEventListener('click', (event) => {
        bandItems = document.querySelectorAll('.band__item');
        for (let i = itemsToShow; i < itemsToShow + 4; i++) {
            if (bandItems[i]) {
                bandItems[i].style.display = 'block';
            }
        }
        event.preventDefault()
        itemsToShow += 8; 
        if (itemsToShow >= bandItems.length) {
            // loadMoreBtn.style.display = "none";
        }
    });
    
}

// const hideMoreBtn = document.querySelector('.hide-more-js');

// if (hideMoreBtn) {
//   let itemsToShow = 4;
//   let bandItems = document.querySelectorAll('.band__item');

//   hideMoreBtn.addEventListener('click', () => {
//     for (let i = itemsToShow; i < itemsToShow + 8; i++) {
//       if (bandItems[i]) {
//         bandItems[i].style.display = 'block'; 
//       }
//     }

    
//     for (let i = 0; i < itemsToShow; i++) {
//       if (bandItems[i] && !bandItems[i].classList.contains('is-visible')) {
//         bandItems[i].style.display = 'none';
//       }
//     }

//     itemsToShow += 8;

    
//     if (itemsToShow >= bandItems.length) {
//       hideMoreBtn.style.display = "none";
//     }
//   });
// }