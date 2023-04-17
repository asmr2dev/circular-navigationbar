const moreButton = document.querySelector(".more-button");
const navigationBar = document.querySelector(".navigation-bar");

moreButton.onclick = () => {
    navigationBar.classList.toggle("active");
}