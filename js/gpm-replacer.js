function replace() {
  if (document.querySelector("paper-input.paper-input-0")) {
    if (
      document
        .querySelector("paper-input.paper-input-0")
        .getAttribute("value")
        .match(/\.mp3$/)
    ) {
      document.querySelector("paper-input.paper-input-0").setAttribute(
        "value",
        document
          .querySelector("paper-input.paper-input-0")
          .getAttribute("value")
          .replace(/(.*)\.mp3/, "$1")
      );
    }
  }
}

const observer = new MutationObserver(replace);
observer.observe(document.querySelector("body"), {
  childList: true
});

document.querySelector("body").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    if (
      document.querySelector(
        "paper-button.x-scope.paper-button-1[data-action='save']"
      )
    ) {
      document
        .querySelector(
          "paper-button.x-scope.paper-button-1[data-action='save']"
        )
        .dispatchEvent(new Event("click"));
    }
  }
});
