var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    Infinity: true
});

window.addEventListener("scroll", function(){
    let navScroll = document.getElementById('header');
    navScroll.classList.toggle("fixed", window.scrollY > 0)
})
