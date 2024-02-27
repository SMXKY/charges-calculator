export function calculateCharges() {
  const amount = document.querySelector(".js-amount-input").value;
  const value = amount.split("");

  let timerID;
  let running = false;

  let counter = 0;
  let isValid = false;

  if (value.length > 0) {
    value.forEach((char) => {
      if (isNaN(char)) {
        document
          .querySelector(".js-check-amount-text")
          .classList.remove("off-element");

        document.querySelectorAll(".js-amount-text").forEach((text) => {
          text.innerHTML = "0.00000 cfa";
        });

        if (!running) {
          timerID = setTimeout(() => {
            document
              .querySelector(".js-check-amount-text")
              .classList.add("off-element");
          }, 2000);
          running = true;
        }
      } else {
        counter++;
      }
    });
  }

  if (counter === value.length && value.length > 0) {
    isValid = true;
  }

  if (isValid === true) {
    if (document.querySelector(".js-solo-btn").classList.contains("on-mtn")) {
      let charges = 0;

      const value = Number(document.querySelector(".js-amount-input").value);

      if (
        document.querySelector(".js-select-btn-text-display").innerHTML ===
        "Transfer"
      ) {
        if (value < 99000) {
          charges = value * 0.005;
        } else {
          charges = 500;
        }

        document.querySelector(".js-og-amount").innerHTML = value + " FCFA";
        document.querySelector(".js-charges-text").innerHTML =
          charges + " FCFA";
        document.querySelector(".js-total-amount").innerHTML =
          value + charges + " FCFA";
      } else {
        if (value >= 100) {
          if (value >= 100 && value <= 2499) {
            charges = 50;
          } else if (value >= 2500 && value <= 174999) {
            charges = value * 0.02;
          } else {
            charges = 3500;
          }

          document.querySelector(".js-og-amount").innerHTML = value + " FCFA";
          document.querySelector(".js-charges-text").innerHTML =
            charges + " FCFA";
          document.querySelector(".js-total-amount").innerHTML =
            value + charges + " FCFA";
        } else {
          document.querySelector(".js-check-amount-text").innerHTML =
            "You cannot withdraw less than 100fcfa";
          document
            .querySelector(".js-check-amount-text")
            .classList.remove("off-element");

          document.querySelectorAll(".js-amount-text").forEach((text) => {
            text.innerHTML = "0.00000 cfa";
          });

          if (!running) {
            timerID = setTimeout(() => {
              document
                .querySelector(".js-check-amount-text")
                .classList.add("off-element");
            }, 3000);
            running = true;
          }
        }
      }
    } else if (
      document.querySelector(".js-solo-btn").classList.contains("on-orange")
    ) {
      let charges = 0;

      const value = Number(document.querySelector(".js-amount-input").value);

      if (
        document.querySelector(".js-select-btn-text-display").innerHTML ===
        "Transfer"
      ) {
        if (value >= 50) {
          if (value <= 200000) {
            charges = value * 0.005;
          } else if (value > 200000 && value < 500000) {
            charges = 1000;
          }

          document.querySelector(".js-og-amount").innerHTML = value + " FCFA";
          document.querySelector(".js-charges-text").innerHTML =
            charges + " FCFA";
          document.querySelector(".js-total-amount").innerHTML =
            value + charges + " FCFA";
        } else {
          document.querySelector(".js-check-amount-text").innerHTML =
            "You cannot transfer less than 50fcfa";
          document
            .querySelector(".js-check-amount-text")
            .classList.remove("off-element");

          document.querySelectorAll(".js-amount-text").forEach((text) => {
            text.innerHTML = "0.00000 cfa";
          });

          if (!running) {
            timerID = setTimeout(() => {
              document
                .querySelector(".js-check-amount-text")
                .classList.add("off-element");
            }, 3000);
            running = true;
          }
        }
      } else {
        if (value >= 50) {
          if (value <= 3333) {
            charges = 50;
          } else if (value > 3333 && value <= 233333) {
            charges = value * 0.015;
          } else if (value > 233334 && value <= 500000) {
            charges = 3500;
          }
          document.querySelector(".js-og-amount").innerHTML = value + " FCFA";
          document.querySelector(".js-charges-text").innerHTML =
            charges + " FCFA";
          document.querySelector(".js-total-amount").innerHTML =
            value + charges + " FCFA";
        } else {
          document.querySelector(".js-check-amount-text").innerHTML =
            "You cannot withdraw less than 50fcfa";
          document
            .querySelector(".js-check-amount-text")
            .classList.remove("off-element");

          document.querySelectorAll(".js-amount-text").forEach((text) => {
            text.innerHTML = "0.00000 cfa";
          });

          if (!running) {
            timerID = setTimeout(() => {
              document
                .querySelector(".js-check-amount-text")
                .classList.add("off-element");
            }, 3000);
            running = true;
          }
        }
      }
    }
  }
}
