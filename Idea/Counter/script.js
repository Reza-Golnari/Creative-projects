const $ = document;
const experienceNum = $.querySelector(".num-1");
const resumeNum = $.querySelector(".num-2");
const teamNum = $.querySelector(".num-3");
const projectNum = $.querySelector(".num-4");
let mainTime = 4000;
let experienceValue = 4;
let resumeValue = 229;
let teamValue = 58;
let projectValue = 164;
let i = 0;
let x = 0;
let y = 0;
let z = 0;

window.addEventListener("load", () => {
  let numTimer = setInterval(() => {
    if (i <= resumeValue) {
      //   console.log(i);
      i++;
      resumeNum.textContent = i;
    }
  }, mainTime / resumeValue);
  setTimeout(() => {
    clearInterval(numTimer);
  }, mainTime);

  let numTimer2 = setInterval(() => {
    if (x <= experienceValue) {
      //   console.log(x);
      x++;
      experienceNum.textContent = x;
    }
  }, mainTime / experienceValue);

  setTimeout(() => {
    clearInterval(numTimer2);
  }, mainTime);

  let numTimer3 = setInterval(() => {
    if (y <= projectValue) {
      //   console.log(y);
      y++;
      projectNum.textContent = y;
    }
  }, mainTime / projectValue);
  setTimeout(() => {
    clearInterval(numTimer3);
  }, mainTime);

  let numTimer4 = setInterval(() => {
    if (z <= teamValue) {
      //   console.log(z);
      z++;
      teamNum.textContent = z;
    }
  }, mainTime / teamValue);
  setTimeout(() => {
    clearInterval(numTimer4);
  }, mainTime);
});
