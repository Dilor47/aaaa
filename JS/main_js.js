import {anime_description} from '../data_carosuel/info_to_carousel.js';

const carousel = document.querySelector('.carousel');

let carousel_html = '';

anime_description.forEach((element) => {
  carousel_html += `
  <div class="part">
          <div class="descr">
            <div class="all_info_anime">
              <h1>
                ${element.title}
              </h1>
              <div class="short_info">
                <p class="icon">${element.age_limit}</p>

                <div class="icons">
                  ${element.is_there_sub}
                  ${element.is_there_vSub}
                </div>
                
                <p class="date icon">${element.release_data}</p>
              </div>

              <p class="main_text">
                ${element.main_desc}
              </p>

              <div class="carousel_button">
                <i class="fa-solid fa-play fa-2xl"></i>
                <p class="fa-2xl">PLAY NOW</p>
              </div>
            </div>
          </div>
          <img src="${element.image}">
        </div>`
});

carousel.innerHTML = carousel_html;
console.log('done');


$(document).ready(() => {

  const $buttons = $('.picked_choice');
  $buttons.on('click', (event) => { 
    $buttons.removeClass('active');
    event.currentTarget.classList.add('active');
  })
})




let drag = false, initialX, scrollLeft_amount;


carousel.addEventListener('mousedown', (event) => {
  drag = true;
  initialX = event.clientX;
  carousel.style.cursor = 'grabbing';
  scrollLeft_amount = carousel.scrollLeft;
  event.preventDefault();
})


const dragging = (event) => {
  if(!drag) return;

  event.preventDefault();

  let widthX = event.clientX - initialX;
  carousel.scrollLeft = scrollLeft_amount - widthX;
  console.log(scrollLeft_amount - widthX);
} 
  
carousel.addEventListener('mousemove', dragging);


carousel.addEventListener('mouseup', () => {
  if(drag) {
    carousel.style.cursor = 'grab'
    drag = false;
    console.log('**************************************');
    console.log(scrollLeft_amount);
    console.log('**************************************');
  }
})
