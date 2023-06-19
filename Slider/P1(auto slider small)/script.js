let slider = document.querySelector(".slider");

setInterval(() => {
  scrollY();
}, 3000);

function scrollY() {
  if (scrollChecker()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function scrollChecker() {
  if (slider.scrollLeft + 400 > 1200) {
    return false;
  }
  return true;
}
