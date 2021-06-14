const shareActive = document.querySelector(".profile");
const shareInactive = document.querySelector(".share-hidden");
const desktopShare = document.querySelector(".desktop-share");
const shareIcon = document.querySelector(".share");

shareActive.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    shareActive.style.display = "none";
    shareInactive.style.display = "flex";
  }
});

shareInactive.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    shareActive.style.display = "flex";
    shareInactive.style.display = "none";
  }
});

shareIcon.addEventListener("click", function (e) {
  if (window.innerWidth > 767) {
    desktopShare.classList.toggle("show");
  }
});
