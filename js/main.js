
jQuery(function($) {
    $(function(){
        $('.firstbannercontainertopslider').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: "unslick",
                } 
            ] 
        });
        $('.testimonialscontainerslider').slick({
            arrows: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
        });
    });
});
let burgerbtn= document.querySelector(".menu__btn");
let menu= document.querySelector(".menu");
burgerbtn.onclick= function() {
    menu.classList.toggle("__active");
}
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
