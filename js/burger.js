const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-linkovi");
  const navLinks = document.querySelectorAll(".nav-linkovi li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Disabluje scroll na stranici
    document.body.classList.toggle("disableYScroll");

    // Animira linkove
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });

    // Animira burger ikonicu
    burger.classList.toggle("toggle");
  });
};

navSlide();
