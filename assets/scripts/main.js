document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: ".activity-button-next",
      prevEl: ".activity-button-prev",
    },
  });
});
