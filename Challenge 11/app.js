const testimoniesContainer = document.querySelector("#testimonies");
const testimonies = document.querySelectorAll(".testimony");
const gap = Number(
  getComputedStyle(document.querySelector(".testimony")).gap.replace("px", "")
);
const numberOfTestimony = testimonies.length;
const totalGap = gap * (numberOfTestimony - 1);
const testimonyWidth =
  (testimoniesContainer.scrollWidth - totalGap) / numberOfTestimony;
const btnLeft = document.querySelector(".carousel__btn--left");
const btnRight = document.querySelector(".carousel__btn--right");

// Set the scrollbar based on the index
// testimoniesContainer.style.transform = `translateX(-${
//   (testimonyWidth + gap) * index
// }px)`;
