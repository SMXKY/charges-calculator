export function selectButton() {
  document.querySelector(".js-select-btn").addEventListener("click", () => {
    if (
      document
        .querySelector(".js-the-actual-options")
        .classList.contains("off-element")
    ) {
      document
        .querySelector(".js-the-actual-options")
        .classList.remove("off-element");
    } else {
      document
        .querySelector(".js-the-actual-options")
        .classList.add("off-element");
    }

    document.addEventListener("click", (e) => {
      if (
        !document.querySelector(".js-the-actual-options").contains(e.target) &&
        !document.querySelector(".js-select-btn").contains(e.target)
      ) {
        document
          .querySelector(".js-the-actual-options")
          .classList.add("off-element");
      }
    });
  });
}
