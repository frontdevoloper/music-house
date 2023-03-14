const headers = document.querySelectorAll('.filters__header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const icon = header.querySelector('.filters__icon');
    icon.classList.toggle('active');    
    const filtersBody = header.parentElement.querySelector('.filters__body');
    filtersBody.classList.toggle('active');  
  })
})