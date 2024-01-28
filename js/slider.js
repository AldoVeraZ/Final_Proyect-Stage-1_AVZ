document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let isAutoplayEnabled = true;

  function nextSlide() {
    if (isAutoplayEnabled) {
      const currentTransformValue = getComputedStyle(slider).transform;
      const matrix = new DOMMatrix(currentTransformValue);
      const currentTranslateX = matrix.m41;
      const slideWidth = slider.clientWidth;

      slider.style.transition = "transform 0.4s ease-in-out";
      slider.style.transform = `translateX(${
        currentTranslateX - slideWidth
      }px)`;

      setTimeout(() => {
        slider.appendChild(slider.firstElementChild);
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
      }, 500);
    }
  }

  // Activar/desactivar autoplay al hacer clic en el slider
  slider.addEventListener("click", function () {
    isAutoplayEnabled = !isAutoplayEnabled;
  });

  // Función para avanzar al siguiente slide cada 3 segundos
  setInterval(nextSlide, 5000);
});
