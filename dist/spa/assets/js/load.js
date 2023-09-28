let images = document.images,
    imagesTotalCount = images.length,
    preloader = document.querySelector(".load"),
    out = document.querySelector(".load span"),
    imagesLoadedCount = 0;
for (let i = 0; i < imagesTotalCount; i++) {
    imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
}

function imageLoaded() {
    imagesLoadedCount++;
    out.innerText = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + "%";
    if (imagesLoadedCount >= imagesTotalCount) {
        window.onload = function () {
            setTimeout(function () {
                document.querySelector(".page").classList.remove("hide");
                setTimeout(function () {
                    document.querySelector(".load__right").style.left = "200%";
                    document.querySelector(".load__left").style.left = "-100%";
                    document.querySelector(".load__body").style.opacity = "0";
                }, 40);
                setTimeout(function () {
                    document.querySelector(".load").remove();
                }, 1000);
            }, 500);
        };
    }
}