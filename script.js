let imagecontainer = document.querySelector(".imagecontainer");
let image1 = document.querySelectorAll("img");
let previousBtn = document.querySelector(".prev");
let forwardBtn = document.querySelector(".forw");

let currentImg = 0;
let totalImg = image1.length;
forwardBtn.addEventListener("click", () => {
  if (currentImg < totalImg - 1) {
    currentImg++;
    updateSlider();
  } else {
    currentImg = 0;
    updateSlider();
  }
});
previousBtn.addEventListener("click", () => {
  if (currentImg > 0) {
    currentImg--;
    updateSlider();
  } else {
    currentImg = totalImg - 1;
    updateSlider();
  }
});

function updateSlider() {
  imagecontainer.style.transform = `translateX(-${currentImg * 100}%)`;
  console.log("current image index is ", currentImg);
}
