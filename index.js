// DOM - Document Object Model References
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const bulb = document.querySelector(".bulb");

const lightOn = () => {
  bulb.style.color = "#ffc107";
};

const lightOff = () => {
  bulb.style.color = "#dddddd";
};

btn1.addEventListener("click", lightOn);
btn2.addEventListener("click", lightOff);
