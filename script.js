let picNum = 1;
PictureDrivers(picNum);

// Next/previous controls
function plusSlides(n) {
  PictureDrivers(picNum += n);
}

// Thumbnail image controls
function currentSlide(n) {
  PictureDrivers(picNum = n);
}

// 

function PictureDrivers(n) {
  let i;
  let slides = document.getElementsByClassName("photoViews");
  let myPoints = document.getElementsByClassName("myPoint");
  if (n > slides.length) {picNum = 1}
  if (n < 1) {picNum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < myPoints.length; i++) {
    myPoints[i].className = myPoints[i].className.replace(" active", "");
  }
  slides[picNum-1].style.display = "block";
  myPoints[picNum-1].className += " active";
}






// AUTOMATIC SLIDESSHOW WILL DISPLAY
// let picNum = 0;
PictureDrivers();

function PictureDrivers() {
  let photoNum;
  let slides = document.getElementsByClassName("photoViews");
  for (photoNum = 0; photoNum < slides.length; photoNum++) {
    slides[photoNum].style.display = "none";
  }
  picNum++;
  if (picNum > slides.length) {picNum = 1}
  slides[picNum-1].style.display = "block";
  setTimeout(PictureDrivers, 17000); // Change picture every 17 seconds

}






//my typewriter
var s = 0;
var par = 'This project aims at innitiating increase in forest cover at Kajiado County to aid in climate change; to encourage sustainable exploitation of forestland for focusing on environmental conservation and protection and for the benefit of present and future generations of Kenyans; to respect socio-cultural values and to ensure access to justice, gender equity, and inclusiveness; to sustainably conserve irrigation catchments areas by facilitating human institutional capacity'; /* The text */
var speed = 77; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (s < par.length) {
    document.getElementById("typeHelper").innerHTML += par.charAt(s);
    s++;
    setTimeout(typeWriter, speed);
  }
}



// at the time the user scrolls the page, execute onscrollStaticNavbar
window.onscroll = function() {onscrollStaticNavbar()};

// Get the header by id
var header = document.getElementById("taticNavBar");

// Get the offset position of the navbar
var stopOnScroll = header.offsetTop;

// Add the stopOnScroll class to the header when you reach its scroll position. Remove "stopOnScroll" when you leave the scroll position
function onscrollStaticNavbar() {
  if (window.pageYOffset > stopOnScroll) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


//MY PARALLAX HEADER
document.querySelector('.top-of-header').onmousemove = (e) =>{

  document.querySelectorAll('.prllx_effect').forEach(elm =>{

    let speed = elm.getAttribute('on-hover-mover');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.on-hover-mover').onmouseleave = (e) =>{

  document.querySelectorAll('.prllx_effect').forEach(elm =>{

    elm.style.transform = `translateX(5px) translateY(7px)`;

  });

};



/* Toggle between showing and hiding the navigation menu links when the user clicks on the phone menu / bar icon */
function phoneDirection() {
  var x = document.getElementById("linkPhoneDirection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}





// MORE THAN 3 OR MULTIPLE SLIDESHOW
// let picNum = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// PictureDrivers(1, 0);
// PictureDrivers(1, 1);

// function plusSlides(n, no) {
//   PictureDrivers(picNum[no] += n, no);
// }

// function PictureDrivers(n, no) {
//   let photoNum;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {picNum[no] = 1}
//   if (n < 1) {picNum[no] = x.length}
//   for (photoNum = 0; photoNum < x.length; photoNum++) {
//     x[photoNum].style.display = "none";
//   }
//   x[picNum[no]-1].style.display = "block";
// }


