document.addEventListener("DOMContentLoaded", function () {
  const activitySwiper = new Swiper(".activity-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".activity-button-next",
      prevEl: ".activity-button-prev",
    },
  });

  const articlesSwiper = new Swiper(".articles-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".articles-button-next",
      prevEl: ".articles-button-prev",
    },
  });
});
