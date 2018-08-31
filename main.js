// grab first div

const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function() {
    // how much the user scrolls from the top (YOffset)
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})