// SCROLL TO TOP ON PAGE LOAD


window.onload = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};



//SHOW DROPDOWN MENU


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


// SLIDESHOW

function moveERight() {
  console.log("moving to the right");
  var eslidearray = document.getElementsByClassName("eslide");
  var i;
  for (i = 0; i < eslidearray.length; i++) {
    var eslide = eslidearray[i];
    if (eslide.classList.contains("shownslide") && eslide.nextElementSibling.classList.contains("shownslide") && eslide.nextElementSibling.nextElementSibling.classList.contains("hiddenslide")) {
      eslide.nextElementSibling.nextElementSibling.classList.remove("hiddenslide");
      eslide.nextElementSibling.nextElementSibling.classList.add("shownslide");
      eslide.previousElementSibling.classList.remove("shownslide");
      eslide.previousElementSibling.classList.add("hiddenslide");
      break;
    }
  }
};

function moveELeft() {
  console.log("moving to the right");
  var eslidearray = document.getElementsByClassName("eslide");
  var i;
  for (i = 0; i < eslidearray.length; i++) {
    var eslide = eslidearray[i];
    if (eslide.classList.contains("shownslide") && eslide.previousElementSibling.classList.contains("shownslide") && eslide.previousElementSibling.previousElementSibling.classList.contains("hiddenslide")) {
      eslide.previousElementSibling.previousElementSibling.classList.remove("hiddenslide");
      eslide.previousElementSibling.previousElementSibling.classList.add("shownslide");
      eslide.nextElementSibling.classList.remove("shownslide");
      eslide.nextElementSibling.classList.add("hiddenslide");
      break;
    }
  }
};

$(document).on('click', '.erightmove', moveERight);
$(document).on('click', '.eleftmove', moveELeft);


function moveNRight() {
  console.log("moving to the right");
  var nslidearray = document.getElementsByClassName("nslide");
  var i;
  for (i = 0; i < nslidearray.length; i++) {
    var nslide = nslidearray[i];
    if (nslide.classList.contains("shownslide") && nslide.nextElementSibling.classList.contains("shownslide") && nslide.nextElementSibling.nextElementSibling.classList.contains("hiddenslide")) {
      nslide.previousElementSibling.classList.add("slideleft");
      nslide.classList.add("slideleft");
      nslide.nextElementSibling.classList.add("slideleft");
      setTimeout(function(){
        nslide.nextElementSibling.nextElementSibling.classList.remove("hiddenslide");
        nslide.nextElementSibling.nextElementSibling.classList.add("shownslide");
        nslide.previousElementSibling.classList.remove("shownslide");
        nslide.previousElementSibling.classList.add("hiddenslide");
        setTimeout(function(){
          nslide.previousElementSibling.classList.remove("slideleft");
          nslide.classList.remove("slideleft");
          nslide.nextElementSibling.classList.remove("slideleft");
        },500);
      },500);
      break;
    }
  }
};

function moveNLeft() {
  console.log("moving to the right");
  var nslidearray = document.getElementsByClassName("nslide");
  var i;
  for (i = 0; i < nslidearray.length; i++) {
    var nslide = nslidearray[i];
    if (nslide.classList.contains("shownslide") && nslide.previousElementSibling.classList.contains("shownslide") && nslide.previousElementSibling.previousElementSibling.classList.contains("hiddenslide")) {
      setTimeout(function(){
        slide.previousElementSibling.previousElementSibling.classList.remove("hiddenslide");
        nslide.previousElementSibling.previousElementSibling.classList.add("shownslide");
        nslide.nextElementSibling.classList.remove("shownslide");
        nslide.nextElementSibling.classList.add("hiddenslide");
      },500);
      break;
    }
  }
};

$(document).on('click', '.nrightmove', moveNRight);
$(document).on('click', '.nleftmove', moveNLeft);

/* FUNCTION TO MOVE

function moveELeft () {
  console.log("eee");
  var explainercarousel = document.querySelector('.explainercarousel');
  var eslidewidth = document.querySelector('.eslide').offsetWidth;
  if (explainercarousel.style.right > "0")
    {console.log("nope");}
  else {
  explainercarousel.style.left = (explainercarousel.offsetLeft - eslidewidth) + "px";}
};

function moveERight () {
  console.log("aaa");
  var explainercarousel = document.querySelector('.explainercarousel');
  var eslidewidth = document.querySelector('.eslide').offsetWidth;
  if (explainercarousel.style.left = "0")
    {console.log("nah");}
  else {
  explainercarousel.style.left = (explainercarousel.offsetLeft + eslidewidth) + "px";}
};

$(document).on('click', '.eleftmove', moveELeft);
$(document).on('click', '.erightmove', moveERight);
*/
