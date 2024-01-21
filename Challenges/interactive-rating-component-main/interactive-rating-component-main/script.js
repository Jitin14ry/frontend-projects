let submit = document.querySelector(".btn");

submit.addEventListener("click", (e) => {
  console.log("submit");
  let element = document.querySelector(".hidden");
  element.classList.add("thankyou");
  element.classList.remove("hidden");
  let container = document.querySelector(".container");
  console.log(container);
  container.style.display = "none";
});

let rates = document.querySelectorAll(".rating-value");

let rate = document.querySelector("#rate");

rates.forEach((e) => {
  e.addEventListener("click", () => {
    rate.innerHTML = e.innerHTML;
    rates.forEach(rate => {
        rate.classList.remove("selected")
    })
    e.classList.add("selected")
  });
});
