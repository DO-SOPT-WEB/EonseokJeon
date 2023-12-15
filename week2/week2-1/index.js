const topBtn = document.querySelector(".top-btn");
const description = document.querySelector(".content1__img__text__description");
const moreText = document.querySelector(".more");

if (description.textContent.length > 60) {
  moreText.style.display = "inline-block";
}

moreText.addEventListener("click", () => {
  moreText.style.display = "none";
  description.style.display = "inline-block";
  description.style.height = "auto";
});

document.addEventListener("scroll", () => {
  console.log(scrollY, window.innerHeight, scrollY / window.innerHeight);
  topBtn.style.opacity = scrollY / window.innerHeight;
});
