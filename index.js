/* Fixed header behavior */
window.addEventListener("scroll", function () {
  const header = this.document.querySelector(".header_content_desktop");
  if (this.window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Projects slider */
new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
