const handleHamburgerMenu = () => {
  const openHamburger = document.getElementById('js-open-hamburger')
  const closeHamburger = document.getElementById('js-close-hamburger')
  const hamburgerMenu = document.querySelector('.o-header__hamburger')

  openHamburger.addEventListener('click', () => {
    hamburgerMenu.classList.add('active')
    document.body.style.overflow = 'hidden'
  })

  closeHamburger.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    document.body.style.overflow = 'auto'
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const activitySwiper = new Swiper(".activity-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".activity-button-next",
      prevEl: ".activity-button-prev",
    },
  });

  const articlesSwiper = new Swiper(".articles-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: ".articles-button-next",
      prevEl: ".articles-button-prev",
    },
  });

  handleHamburgerMenu();
});
