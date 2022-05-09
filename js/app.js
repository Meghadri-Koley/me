$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots'
    });

let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');
let animation=document.querySelector('.animation');

hamberger.addEventListener('click',function(){
  mobileNav.classList.add('open');
});
times.addEventListener('click',function(){
  mobileNav.classList.remove('open');
});


})
var options = {
  strings: ["An aspiring Computer Science Engineer who enjoys connecting the dots: be it ideas from different disciplines, people from different teams, or applications from different industries. I have strong technical skills and an academic background in engineering, data structure, algorithm design and analysis and cloud computing.My passion lies in solving real world problems with tailored data and algorithms and communicating complex ideas in a simpler way. I emphasize on arriving to the solution at the earliest possible."],
  typeSpeed: 100,
  backSpeed:100,
};
var typed = new Typed('.typing', options);
typed();



