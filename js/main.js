// slick
$('.small_poster').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// swiper
const swiper = new Swiper('.web_exhibition .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    barClass: 'swiper-pagination-bar'
  },
  centeredSlides: true
})

// small_poster click_event(img)
const smallPoster = document.querySelectorAll('.web_performance .small_poster li')
const bigPoster = document.querySelector('.web_performance .big_poster img')

for(let i in smallPoster) {
  smallPoster[i].addEventListener('click', function() {
    bigPoster.src = this.children[0].src
  })
}