export function uiChanges() {
  function sidebar() {
    document.querySelector(".js-menu-btn").addEventListener("click", () => {
      document.querySelector(".js-side-bar").classList.remove("off-element");
      document.querySelector(".js-side-bar").classList.remove("hide-side-bar");

      document
        .querySelector(".js-close-side-bar")
        .addEventListener("click", () => {
          document.querySelector(".js-side-bar").classList.add("off-element");
          document.querySelector(".js-side-bar").classList.add("hide-side-bar");
        });
    });
  }

  sidebar();

  function uiSwitch() {
    document.querySelectorAll(".js-orange-switch").forEach((btn) => {
      //button switch
      btn.addEventListener("click", () => {
        document.querySelectorAll(".js-mtn-btn").forEach((btn) => {
          btn.classList.remove("on-mtn");
        });
        document.querySelectorAll(".js-orange-btn").forEach((btn) => {
          btn.classList.add("on-orange");
        });

        document.querySelector(".js-solo-btn").classList.remove("on-mtn");
        document.querySelector(".js-solo-btn").classList.add("on-orange");
        document.querySelector(".js-solo-btn-text").innerHTML = "Orange Money";
        document
          .querySelector(".js-solo-btn-img")
          .setAttribute("src", "images-and-icons/Orange_logo.svg.png");

        //left grid switch

        document.querySelector(".js-select-btn").classList.remove("mtn-border");
        document.querySelector(".js-select-btn").classList.add("orange-border");
        document
          .querySelector(".js-drop-down-img")
          .setAttribute("src", "images-and-icons/icons/arrow-orange.png");

        document.querySelectorAll(".js-drop-down").forEach((dropDown) => {
          dropDown.classList.remove("mtn-background");
        });
        document.querySelectorAll(".js-drop-down").forEach((dropDown) => {
          dropDown.classList.add("orange-background");
        });

        document
          .querySelector(".js-amount-input")
          .classList.remove("mtn-border");
        document
          .querySelector(".js-amount-input")
          .classList.add("orange-border");

        document
          .querySelectorAll(".js-call-action-btns")
          .forEach((dropDown) => {
            dropDown.classList.remove("mtn-background");
          });
        document
          .querySelectorAll(".js-call-action-btns")
          .forEach((dropDown) => {
            dropDown.classList.add("orange-background");
          });

        document.querySelector(".js-right-grid").classList.remove("mtn-border");
        document.querySelector(".js-right-grid").classList.add("orange-border");
      });
    });

    document.querySelectorAll(".js-mtn-switch").forEach((btn) => {
      //button switch
      btn.addEventListener("click", () => {
        document.querySelectorAll(".js-mtn-btn").forEach((btn) => {
          btn.classList.add("on-mtn");
        });
        document.querySelectorAll(".js-orange-btn").forEach((btn) => {
          btn.classList.remove("on-orange");
        });

        document.querySelector(".js-solo-btn").classList.add("on-mtn");
        document.querySelector(".js-solo-btn").classList.remove("on-orange");
        document.querySelector(".js-solo-btn-text").innerHTML = "Mobile Money";
        document
          .querySelector(".js-solo-btn-img")
          .setAttribute("src", "images-and-icons/mtn-logo.webp");

        //left grid switch

        document.querySelector(".js-select-btn").classList.add("mtn-border");
        document
          .querySelector(".js-select-btn")
          .classList.remove("orange-border");
        document
          .querySelector(".js-drop-down-img")
          .setAttribute("src", "images-and-icons/icons/arrow-mtn.png");

        document.querySelectorAll(".js-drop-down").forEach((dropDown) => {
          dropDown.classList.add("mtn-background");
        });
        document.querySelectorAll(".js-drop-down").forEach((dropDown) => {
          dropDown.classList.remove("orange-background");
        });

        document.querySelector(".js-amount-input").classList.add("mtn-border");
        document
          .querySelector(".js-amount-input")
          .classList.remove("orange-border");

        document
          .querySelectorAll(".js-call-action-btns")
          .forEach((dropDown) => {
            dropDown.classList.add("mtn-background");
          });
        document
          .querySelectorAll(".js-call-action-btns")
          .forEach((dropDown) => {
            dropDown.classList.remove("orange-background");
          });

        document.querySelector(".js-right-grid").classList.add("mtn-border");
        document
          .querySelector(".js-right-grid")
          .classList.remove("orange-border");
      });
    });
  }

  uiSwitch();
}
