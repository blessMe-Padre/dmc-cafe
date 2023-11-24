// JavaScript code
export const initLoadMore = () => {
    let hiddenItems = document.querySelectorAll(".band__list li.hidden");
    let visibleItems = document.querySelectorAll(".band__list li.is-visible");
  
    let loadMoreButton = document.querySelector(".loadMoreButton");
    let hideMoreButton = document.querySelector(".hideMoreButton");
    let loadMoreText = document.querySelector(".loadMoreText");
  
    let batchSize = 8;
    let currentIndex = 0;
  
    loadMoreButton.addEventListener("click", function () {
      let currentBatch = hiddenItems.length - currentIndex > batchSize ? batchSize : hiddenItems.length - currentIndex;
  
      for (let i = 0; i < currentBatch; i++) {
        hiddenItems[currentIndex].classList.add('is-visible');
        hiddenItems[currentIndex].classList.remove('hidden');
        currentIndex++;
      }
  
      if (currentIndex >= hiddenItems.length) {
        loadMoreButton.style.display = "none";
        loadMoreText.textContent = "Больше нет";
        hideMoreButton.classList.remove('hidden');
      }
    });
  
    hideMoreButton.addEventListener("click", function () {
      let elementsToHide = currentIndex - batchSize > 0 ? batchSize : currentIndex;
      
      for (let i = currentIndex - 1; i >= currentIndex - elementsToHide; i--) {
        hiddenItems[i].classList.remove('is-visible');
        hiddenItems[i].classList.add('hidden');
      }
      currentIndex -= elementsToHide;
  
      if (currentIndex <= batchSize) {
        hideMoreButton.classList.add('hide');
      }
      loadMoreButton.style.display = "block";
      loadMoreText.textContent = "Посмотреть еще";
    });
  };