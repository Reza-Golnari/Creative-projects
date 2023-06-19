let slider = document.querySelector(".slider");

setInterval(() => {
  scrollY();
}, 3000);

function scrollY() {
  if (scrollChecker()) {
    slider.scrollLeft += 400;
  } else {
    slider.scrollLeft = 0;
  }
}

function scrollChecker() {
  if (slider.scrollLeft + 400 > 1200) {
    return false;
  }
  return true;
}
