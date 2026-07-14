// Voyages Farah

document.addEventListener("DOMContentLoaded", function () {
    console.log("Bienvenue chez Voyages Farah !");
});

const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("مرحباً بك! نظام الحجز سيكون متوفراً قريباً.");
    });
}
