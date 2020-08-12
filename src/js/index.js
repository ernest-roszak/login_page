import "../scss/main.scss";

console.log("HELLO 🚀");

const selected = document.querySelector(".selected--js");
const optionsContainer = document.querySelector(".privacy__default--option");
const list = document.querySelector(".privacy__list");
const optionsList = document.querySelector(".privacy__item");
let defaultItem = document.querySelector(".privacy__item--public");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("privacy__default--active");
  list.classList.toggle("privacy__list--active");
  selected.innerHTML = `Public`;
  defaultItem.classList.toggle("privacy__item--default");
});

const publicItem = document.querySelector(".privacy__item--public");
const privateItem = document.querySelector(".privacy__item--private");
const friendsItem = document.querySelector(".privacy__item--friends");

publicItem.addEventListener("click", () => {
  selected.innerHTML = `Public`;
  selected.classList.add("privacy__item--public");
  selected.classList.remove("privacy__item--private");
  selected.classList.remove("privacy__item--friends");
  selected.classList.remove("privacy__item--default");
  list.classList.remove("privacy__list--active");
  optionsContainer.classList.remove("privacy__default--active");
});
privateItem.addEventListener("click", () => {
  selected.innerHTML = `Private`;
  selected.classList.add("privacy__item--private");
  selected.classList.remove("privacy__item--public");
  selected.classList.remove("privacy__item--friends");
  list.classList.remove("privacy__list--active");
  optionsContainer.classList.remove("privacy__default--active");
});
friendsItem.addEventListener("click", () => {
  selected.innerHTML = `Friends`;
  selected.classList.add("privacy__item--friends");
  selected.classList.remove("privacy__item--public");
  selected.classList.remove("privacy__item--private");
  list.classList.remove("privacy__list--active");
  optionsContainer.classList.remove("privacy__default--active");
});

const textarea = document.querySelector(".post__textarea");
textarea.addEventListener("keydown", autosize);
function autosize() {
  const el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

const media = document.getElementById("media");
const imagePreview = document.querySelector(".post__imagePreview");
const image = imagePreview.querySelector(".post__imagePreview--image");
const placeholder = imagePreview.querySelector(".post__imagePreview--placeholder");

media.addEventListener("change", function() {
  const file = this.files[0];


  if (file) {
    const reader = new FileReader();

    image.style.display = "block";
    placeholder.style.display = "none";
    media.style.display = "none";

    reader.addEventListener("load", function() {
      image.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  } else {
    image.style.display = null;
    placeholder.style.display = null;
    image.setAttribute("src", "");
  }
});
