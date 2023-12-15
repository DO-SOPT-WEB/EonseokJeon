const topBtn = document.querySelector(".top-btn");
const img = document.querySelector(".content1__img__text");
const description = document.querySelector(".content1__img__text__description");
const moreText = document.querySelector(".more");
const heroSection = document.querySelector(".imgs");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

if (description.textContent.length > 60) {
  moreText.style.display = "inline-block";
}

img.addEventListener("mouseleave", () => {
  description.style.height = "5.8rem";
  moreText.style.display = "inline-block";
});

moreText.addEventListener("click", () => {
  moreText.style.display = "none";
  description.style.display = "inline-block";
  description.style.height = "auto";
});

prevBtn.onclick = () => {
  heroSection.scrollLeft -= 1680;
};

nextBtn.onclick = () => {
  heroSection.scrollLeft += 1680;
};

document.addEventListener("scroll", () => {
  topBtn.style.opacity = scrollY / window.innerHeight;
});
