function expandContact() {
  $("#aboutme").css("height", "85%")
  $("#aboutme").css("margin-bottom", "0")
  $("#aboutme").css("overflow", "hidden")
  $(".aboutcontent").css("opacity", "0")
  $("#readme").css("height", "75%")
  $("#readme").css("margin-bottom", "0")
  $("#readme").css("overflow", "hidden")
  $(".readcontent").css("opacity", "0")
  $("#contactme").css("height", "65%")
  $(".contactcontent").css("opacity", "1")
  $("#contactme").css("overflow", "scroll")
  var read = document.querySelector('#readme');
  read.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'});
};

function expandRead() {
  $("#aboutme").css("height", "85%")
  $("#aboutme").css("overflow", "hidden")
  $(".aboutcontent").css("opacity", "0")
  $("#readme").css("height", "70%")
  $("#readme").css("margin-bottom", "3%")
  $("#readme").css("overflow", "scroll")
  $(".readcontent").css("opacity", "1")
  $("#contactme").css("height", "3%")
  $("#contactme").css("overflow", "hidden")
  $(".contactcontent").css("opacity", "0")
  $(".scrollreminder").css("opacity", "1")
};

function expandAbout() {
  $("#aboutme").css("height", "85%")
  $("#aboutme").css("overflow", "scroll")
  $(".aboutcontent").css("opacity", "1")
  $("#readme").css("height", "20%")
  $("#readme").css("margin-bottom", "0")
  $("#readme").css("overflow", "hidden")
  $(".readcontent").css("opacity", "0")
  $("#contactme").css("height", "10%")
  $("#contactme").css("overflow", "hidden")
  $(".contactcontent").css("opacity", "0")
  var read = document.querySelector('#readme');
  read.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'});
};

function collapse() {
  $("#aboutme").css("height", "30%")
  $("#aboutme").css("overflow", "hidden")
  $(".aboutcontent").css("opacity", "0")
  $("#readme").css("height", "20%")
  $("#readme").css("overflow", "hidden")
  $("#readme").css("margin-bottom", "0")
  $(".readcontent").css("opacity", "0")
  $("#contactme").css("height", "10%")
  $("#contactme").css("overflow", "hidden")
  $(".contactcontent").css("opacity", "0")
  var read = document.querySelector('#readme');
  read.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'});
};

$(document).on('click','#contactme', expandContact);
$(document).on('click','#readme', expandRead);
$(document).on('click','#aboutme', expandAbout);
$(document).on('click','.collapse', collapse);
