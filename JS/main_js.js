import {anime_description} from '../data_carosuel/info_to_carousel.js';

const carousel = document.querySelector('.main-carousel');

let carousel_html = '';

anime_description.forEach((element) => {
  carousel_html += `
  <div class="carousel-cell">
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
  $('.main-carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false
  })
})


