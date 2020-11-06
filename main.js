document.body.addEventListener("keydown", function (e) {
  if (e.keyCode === 8) {
    if (document.querySelector("main").lastChild) {
      const letter = document.querySelector("p:last-child").remove();
    }
  }
  let main = document.querySelector(".container");
  if (
    (e.keyCode >= 65 && e.keyCode <= 90) ||
    e.keyCode == 219 ||
    e.keyCode == 221 ||
    e.keyCode == 222 ||
    e.keyCode == 186 ||
    e.keyCode == 190 ||
    e.keyCode == 188
  ) {
    main.insertAdjacentHTML("beforeend", `<p class = "letter" >${e.key}</p>`);

    function fadeIn() {
      if (document.querySelector("p").classList.contains("letter")) {
        const letter = document.querySelector("p:last-child").classList.add("visible");
      }
    }
    setTimeout(fadeIn);
  }
});
