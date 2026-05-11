document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".univer-card");

  cards.forEach(function (card) {
    const imageElement = card.querySelector(".univer-photo");
    const prevButton = card.querySelector(".prev-btn");
    const nextButton = card.querySelector(".next-btn");
    const imageDataElement = card.querySelector(".univer-images");

    if (!imageElement || !prevButton || !nextButton || !imageDataElement) {
      return;
    }

    let images = [];

    try {
      images = JSON.parse(imageDataElement.textContent);
    } catch (error) {
      console.error("Invalid image data:", error);
      return;
    }

    if (!images.length) {
      return;
    }

    let currentIndex = 0;

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;

      imageElement.classList.add("is-changing");

      setTimeout(function () {
        imageElement.src = images[currentIndex];

        imageElement.onload = function () {
          imageElement.classList.remove("is-changing");
        };
      }, 120);
    }

    prevButton.addEventListener("click", function () {
      showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      showImage(currentIndex + 1);
    });
  });
});