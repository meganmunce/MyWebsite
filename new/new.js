// EXPANDING SECTIONS FUNCTIONS

function expandExperience(){
  var fullwindow = window.innerWidth;
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".experience").addClass("expanded").removeClass("collapsed");
};

function expandAbout(){
  var fullwindow = window.innerWidth;
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".aboutme").addClass("expanded").removeClass("collapsed");
};

function expandSkills(){
  var fullwindow = window.innerWidth;
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".skills").addClass("expanded").removeClass("collapsed");
};

function expandClips(){
  var fullwindow = window.innerWidth;
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".clips").addClass("expanded").removeClass("collapsed");
};

//EXPANDING SECTIONS EVENT CALLERS

$(document).on('click','.experience', expandExperience);
$(document).on('click','.experiencetab', expandExperience);

$(document).on('click','.aboutme', expandAbout);
$(document).on('click','.aboutmetab', expandAbout);

$(document).on('click','.skills', expandSkills);
$(document).on('click','.skillstab', expandSkills);

$(document).on('click','.clips', expandClips);
$(document).on('click','.clipstab', expandClips);
