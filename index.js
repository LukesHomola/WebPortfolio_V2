/* Fixed header behavior */
window.addEventListener("scroll", function () {
  const header = this.document.querySelector(".header_content_desktop");
  if (this.window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Projects slider - mobile/small */
new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* Splide - projects */
document.addEventListener("DOMContentLoaded", function () {
  // Vnější Splide – projekty
  const outerSlider = new Splide("#my_projectsSwiper_desktop", {
    type: "slide",
    perPage: 1,
    pagination: true,
    arrows: false, // vlastní šipky
    drag: true,
    autoHeight: false,
    classes: {
      root: "splide my_projectsSwiper_desktop",
      track: "splide__track",
      list: "splide__list",
      slide: "splide__slide my_project_slide_desktop",
      pagination: "splide__pagination",
    },
  });

  outerSlider.mount(); // teprve teď to máš k dispozici

  // 👉 Zakázat drag při hoveru nad obrázkovou sekcí
  document.querySelectorAll(".my_project_images_desktop").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      outerSlider.options = { ...outerSlider.options, drag: false };
    });
    el.addEventListener("mouseleave", () => {
      outerSlider.options = { ...outerSlider.options, drag: true };
    });
  });

  // Napojení manuálních šipek (outer)
  const outerPrev = document.querySelector(
    ".splide__arrow--prev.splide__arrow_outer"
  );
  const outerNext = document.querySelector(
    ".splide__arrow--next.splide__arrow_outer"
  );

  if (outerPrev && outerNext) {
    outerPrev.addEventListener("click", () => outerSlider.go("<"));
    outerNext.addEventListener("click", () => outerSlider.go(">"));
  }

  // Vnitřní Splide – obrázky
  document.querySelectorAll(".my_innerSwiper_desktop").forEach((el) => {
    new Splide(el, {
      type: "loop",
      perPage: 1,
      drag: true,
      autoplay: true,
      interval: 2000,
      pauseOnHover: true,
      pauseOnFocus: true,
      pagination: true,
      arrows: true,
      classes: {
        root: "splide my_innerSwiper_desktop",
        track: "splide__track",
        list: "splide__list",
        slide: "splide__slide",
        pagination: "splide__pagination",
      },
    }).mount();
  });

  // Wheel scroll fix
  document
    .querySelectorAll(".my_innerSwiper_desktop .splide__track")
    .forEach((track) => {
      track.addEventListener(
        "wheel",
        (e) => {
          const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
          if (isHorizontal) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        { passive: false }
      );
    });
});
