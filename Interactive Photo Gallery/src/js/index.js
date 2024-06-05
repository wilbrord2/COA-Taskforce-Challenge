const card = document.getElementById("card");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const navigate = document.getElementById("navigate");
const info = document.getElementById("info");
const navigate1 = document.getElementById("navigate1");
const info1 = document.getElementById("info1");
const navigate2 = document.getElementById("navigate2");
const info2 = document.getElementById("info2");
const navigate3 = document.getElementById("navigate3");
const info3 = document.getElementById("info3");
card.addEventListener("mouseover", () => {
  navigate.className = "show";
  info.className = "infOnHover";
});
card.addEventListener("mouseleave", () => {
  navigate.classList.remove("show");
  navigate.classList.add("hidden");
  info.classList.add("info");
  info.classList.remove("infOnHover");
});
card1.addEventListener("mouseover", () => {
  navigate1.className = "show";
  info1.className = "infOnHover";
});
card1.addEventListener("mouseleave", () => {
  navigate1.classList.remove("show");
  navigate1.classList.add("hidden");
  info1.classList.add("info");
  info1.classList.remove("infOnHover");
});
card2.addEventListener("mouseover", () => {
  navigate2.className = "show";
  info2.className = "infOnHover";
});
card2.addEventListener("mouseleave", () => {
  navigate2.classList.remove("show");
  navigate2.classList.add("hidden");
  info2.classList.add("info");
  info2.classList.remove("infOnHover");
});
card3.addEventListener("mouseover", () => {
  navigate3.className = "show";
  info3.className = "infOnHover";
});
card3.addEventListener("mouseleave", () => {
  navigate3.classList.remove("show");
  navigate3.classList.add("hidden");
  info3.classList.add("info");
  info3.classList.remove("infOnHover");
});
