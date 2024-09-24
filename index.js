const btn_submit = document.getElementById("submit");
const ratingButtons = document.querySelectorAll(".radio-button");
const votingValue = document.getElementById("voting-value");
const main = document.querySelector(".main");
const container = document.querySelector(".container");
const thanksPage = document.querySelector(".thanks-page");
const againButton = document.getElementById("again");

let rate = null;
ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
  });
});

btn_submit.addEventListener("click", () => {
  // if (rate == null) {
  //   rate = "nothing ";
  // }
  if (rate != null) {
    votingValue.innerText = rate;
    thanksPage.classList.add("visible");
    container.classList.add("hidden");
  }
});

againButton.addEventListener("click", () => {
  container.classList.remove("hidden");
  thanksPage.classList.remove("visible");
  thanksPage.classList.add("hidden");
  container.classList.add("visible");
  container.classList.remove("visible");
  thanksPage.classList.remove("hidden");
});
