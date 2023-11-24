export const initModal = () => {
    const accountBtn = document.querySelectorAll('.header-call-button .account');
    const modal = accountBtn.querySelector('.modal-wrapper');
  
    accountBtn.addEventListener('click', () => {
      modal.classList.toggle('active');
    });
  };