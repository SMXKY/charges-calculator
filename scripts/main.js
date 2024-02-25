import { uiChanges } from "./modules/ui-module.js";
import { selectButton } from "./modules/select-btn.js";
import { calculateCharges } from "./modules/calculations.js";

uiChanges();
selectButton();

document
  .querySelector(".js-claculate-charges")
  .addEventListener("click", () => {
    calculateCharges();
  });

document.querySelector(".js-reset-btn").addEventListener("click", () => {
  document.querySelectorAll(".js-amount-text").forEach((text) => {
    text.innerHTML = "0.00000 cfa";
  });
  document.querySelector(".js-amount-input").value = "";
});
