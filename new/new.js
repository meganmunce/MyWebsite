// EXPANDING SECTIONS FUNCTIONS

function expandExperience(){
  $(".mobileunderline").removeClass("mobileunderline");
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".experience").addClass("expanded").removeClass("collapsed");
  $(".experiencetab").addClass("mobileunderline");
};

function expandAbout(){
  $(".mobileunderline").removeClass("mobileunderline");
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".aboutme").addClass("expanded").removeClass("collapsed");
  $(".aboutmetab").addClass("mobileunderline");
};

function expandSkills(){
  $(".mobileunderline").removeClass("mobileunderline");
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".skills").addClass("expanded").removeClass("collapsed");
  $(".skillstab").addClass("mobileunderline");
};

function expandClips(){
  $(".mobileunderline").removeClass("mobileunderline");
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".clips").addClass("expanded").removeClass("collapsed");
  $(".clipstab").addClass("mobileunderline");
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


// FILTER CLIPS

var clipsarray = document.getElementsByClassName("clip");

function showGenClips() {
  console.log("should show gen clips now");
  var i;
  for (i = 0; i < clipsarray.length; i++) {
    var clip = clipsarray[i];
    var isagenclip = clip.classList.contains('genclip');
    var ishidden = clip.classList.contains('hidethis');
    if (isagenclip == true && ishidden == true) {
      clip.classList.remove('hidethis');
    }
    else if (isagenclip == false && ishidden == false){
      clip.classList.add('hidethis');
    }
  }
  document.querySelector('.beenrightheadertext').innerHTML = "General Clips";
};

function showDataClips() {
  var i;
  for (i = 0; i < clipsarray.length; i++) {
    var clip = clipsarray[i];
    var isadataclip = clip.classList.contains('dataclip');
    var ishidden = clip.classList.contains('hidethis');
    if (isadataclip == true && ishidden == true) {
      clip.classList.remove('hidethis');
    }
    else if (isadataclip == false && ishidden == false){
      clip.classList.add('hidethis');
    }
  }
  document.querySelector('.beenrightheadertext').innerHTML = "Data Clips";
};

function showPoliticalClips() {
  var i;
  for (i = 0; i < clipsarray.length; i++) {
    var clip = clipsarray[i];
    var isapoliticalclip = clip.classList.contains('politicalclip');
    var ishidden = clip.classList.contains('hidethis');
    if (isapoliticalclip == true && ishidden == true) {
      clip.classList.remove('hidethis');
    }
    else if (isapoliticalclip == false && ishidden == false){
      clip.classList.add('hidethis');
    }
  }
  document.querySelector('.beenrightheadertext').innerHTML = "Political Clips";
};

function showInteractiveClips() {
  var i;
  for (i = 0; i < clipsarray.length; i++) {
    var clip = clipsarray[i];
    var isaninteractiveclip = clip.classList.contains('interactiveclip');
    var ishidden = clip.classList.contains('hidethis');
    if (isaninteractiveclip == true && ishidden == true) {
      clip.classList.remove('hidethis');
    }
    else if (isaninteractiveclip == false && ishidden == false){
      clip.classList.add('hidethis');
    }
  }
  document.querySelector('.beenrightheadertext').innerHTML = "Interactive Clips";
};

$(document).on('click', '.general', showGenClips);
$(document).on('click', '.data', showDataClips);
$(document).on('click', '.political', showPoliticalClips);
$(document).on('click', '.interactive', showInteractiveClips);
