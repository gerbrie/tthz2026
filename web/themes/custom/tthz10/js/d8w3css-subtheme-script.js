/**
 * @file
 * This file is to add any custom js for the drupal8 w3css sub-theme.
 */

/**
 * @file
 * This file is to add any custom js for the drupal8 w3css subtheme.
 */


 (function () {
  'use strict';
      const copyright = document.querySelector("#copyright-inner > div:nth-child(2) > p")
      const privacy = document.querySelector("#copyright-inner > div:nth-child(1) > p")
      window.addEventListener("DOMContentLoaded", event => {
        privacy.innerHTML = `<a href="/privacy-verklaring">© TTHZ CYCLING TEAM 2025 | Privacy verklaring</a>`;
/**        copyright.innerHTML = `Developed & Designed by: <a href="https://www.alaahaddad.com" target="_blank">Alaa Haddad</a> |
         Samenstelling en beheer: <a href="mailto: thkoen@gmail.com">Gerbrie</a>`**/
copyright.innerHTML = `Samenstelling en beheer: <a href="mailto: thkoen@gmail.com">Gerbrie</a>`
const images = document.querySelectorAll(".blazy--view > li > div > div > span > div > div > a")
         //images.forEach(image => image.innerHTML = '<img src="../../../../sites/default/files/9840575.png"/>')
         //images.forEach(image => image.innerHTML = '<i class="fas fa-expand"></i>')
         const nieuws = document.querySelector("#block-views-block-nieuws-block-1-3 > div.w3-row.element-container-wrapper > div > div.view-content > div > div.views-field.views-field-nothing > span")
        nieuws.insertAdjacentHTML("beforeend", " <i class='fa-solid fa-rss'></i>")

      })
       
 //randomImage slideshow     
       var x = document.querySelectorAll("#w3-slides-3 .w3-s-wr")
       var slideIndex = Math.floor(Math.random() * (x.length - 1 + 1) + 1)
       function randomImage() {
        var i;
        
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
      }
randomImage();

//randomImage slideshow mobile     
var x = document.querySelectorAll("#w3-slides-50 .w3-s-wr")
var slideIndex = Math.floor(Math.random() * (x.length - 1 + 1) + 1)
function randomImageMobile() {
 var i;
 
 for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > x.length) {slideIndex = 1}
 x[slideIndex-1].style.display = "block";
}
randomImageMobile();

//  carousel();

// function carousel() {
//    var i;
//    var x = document.querySelectorAll("#w3-slideshow-3>.w3-s-wr")
//    for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > x.length) {slideIndex = 1}
//    x[slideIndex-1].style.display = "block";
//    setTimeout(carousel, 2000); // Change image every 2 seconds
//  }

// Code recommended bij Alaa Haddad
// setInterval(function() {
//   document.querySelector(".w3-slideshow-inner a.w3-s-next").click();
// }, 5000);
       
// let slideSmallIndex = 0;
// carouselSmall();

// function carouselSmall() {
//   let i;
//   var x = document.querySelectorAll("#w3-slideshow-50>.w3-s-wr")
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideSmallIndex++;
//   if (slideSmallIndex > x.length) {slideSmallIndex = 1}
//   x[slideSmallIndex-1].style.display = "block";
//   setTimeout(carouselSmall, 5000); // Change image every 2 seconds
// }


       
    })()

   
