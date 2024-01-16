const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

window.onload = function() {
    modal.classList.add("open");
};

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});