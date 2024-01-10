document.addEventListener("DOMContentLoaded", function () {
    var imagePaths = [
        "img/bartender1.png",
        "img/mood1.png",
        "img/geast1.png",
        "img/bartender2.png",
        "img/mood2.png",
        "img/geast2.png",
        "img/bartender3.png",
        "img/mood3.png",
        "img/geast3.png"
    ];

    var imageContainers = document.querySelectorAll(".drinks-main-container div img");
    var prikker = document.querySelectorAll(".prikker");

    var currentSetIndex = 0;

    function updateImages() {
        var startIndex = currentSetIndex * 3;

        for (var i = 0; i < imageContainers.length; i++) {
            imageContainers[i].src = imagePaths[startIndex + i];
            prikker[i].style.backgroundColor = "transparent";
        }

        prikker[currentSetIndex].style.backgroundColor = "#F6AE2D";

        currentSetIndex = (currentSetIndex + 1) % (imagePaths.length / 3);
    }

    function startInterval() {
        currentSetIndex = 0;
        intervalId = setInterval(updateImages, 2000);
    }

    var intervalId = setInterval(updateImages, 2000);
});