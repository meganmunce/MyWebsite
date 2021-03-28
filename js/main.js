// HTML STORAGE

whoiam = `
<div class="whoiamcontent">

  <div class="aboutmediv" style="opacity: 0;">
  <h2>About Me</h2>

  <img src="css/images/HeadshotCircleBorder.png" style="width: 30%; height: auto;">

  <p>I'm currently a junior at Northwestern University's Medill School of Journalism, Media, Integrated Marketing Communications studying journalism with a second major in political science. Next year, I'll earn a M.S. in journalism with a specialization in Media Innovation and Content Strategy through Medill's Accelerated Masters Program.</p>

  <p>I'm originally from the San Francisco Bay Area, where I first learned to love local politics, entrepreneurship, innovation and the salt water taffy from Pier 39.</p>

  <p>I'm passionate about the intersection of journalism and technology! As a second-generation immigrant and a digital native, finding new accessible means of storytelling is close to home. I'm interested in digital communication, social media engagement and multimedia reporting.</p>
  </div>

  <div class="educationdiv" style="opacity: 0;">
  <h2>Education</h2>

  <img src="css/images/NU.png" style="width: 30%; height: auto;">

  <p>Northwestern University Medill School of Journalism, Media, Integrated Marketing Communications</p>
  <p style="margin-bottom: 0; padding-bottom: 0;">B.S. journalism and political science</p>
  <p style="margin: 0; padding: 0;">M.S. journalism, specialization: Media Innovation and Content Strategy</p>
  <p style="margin-top: 0; padding-top: 0;">Expected June 2022</p>
  <p style="margin-bottom: 0; padding-bottom: 0;">GPA: 3.89</p>
  <p style="margin-top: 0; padding-top: 0;">Dean's List 7/7 quarters eligible</p>

  <p style="padding-bottom: 0; margin-bottom: 0;">Extracurriculars:</p>
  <ul style="font-size: 18px; text-align: left; padding-top: 2px; margin-top: 2px;">
    <li>The Daily Northwestern</li>
    <li>Northwestern Mock Trial</li>
    <li>Peer Adviser, New Student and Family Programs</li>
  </ul>
  </div>

<div class="aboutmebutton">
  <button class="return">Click here to return to the main menu</button>
  </div>

</div>
`

whereivebeen = `
<div class = "whereivebeencontent">

<div class="beenleft">
<h2>Choose an option:</h2>
<button class="showwork">See work experience</button>
<button class="showclips">See my clips</button>
<button class="return">Return to the main menu</button>
</div>

<div class="beenright">
<h1 style="text-align: center; color: #EBEBEB; padding-top: 10vh;">Empty for now!</h1>
</div>

</div>
`

whereimgoing = `
<div class="whereimgoingcontent">

<h3>Skills</h3>

<div id="skillgrid">

<div class="skillsheader1">
  <h5>Data Visualization</h5>
</div>

<div class="skill1 skillbox" style="box-shadow: 5px 5px #3ECCAF;">
  <div style="float: left; height: 75%;">
  <i class="fab fa-python fa-4x"></i></div>
  <p>Python</p>
</div>

<div class="skill2 skillbox" style="box-shadow: 5px 5px #3ECCAF;">
  <div style="float: left; height: 75%;">
  <img src="css/images/tableau.png" style="height: 125%;"></div>
  <p>Tableau</p>
</div>

<div class="skill3 skillbox" style="box-shadow: 5px 5px #3ECCAF;">
  <div style="float: left; padding-top: 1vh;">
  <i class="fas fa-file-excel fa-4x"></i></div><p style="margin-top: 0; padding-top: 1vh;">Excel/Google Sheets</p>

</div>

<div class="skillsheader2">
  <h5>Web Development</h5>
</div>

<div class="skill4 skillbox" style="box-shadow: 5px 5px #92C2F2;">
  <div style="float: left; height: 75%;">
  <i class="fas fa-code fa-4x"></i></div>
  <p>HTML</p>
</div>

<div class="skill5 skillbox" style="box-shadow: 5px 5px #92C2F2;">
  <div style="float: left; height: 75%;">
  <i class="fas fa-border-style fa-4x"></i></i></div>
  <p>CSS</p>
</div>

<div class="skill6 skillbox" style="box-shadow: 5px 5px #92C2F2;">
  <div style="float: left; height: 75%;">
  <i class="fab fa-js-square fa-4x"></i></i></div>
  <p>Javascript</p>
</div>

<div class="skillsheader3">
  <h5>Language</h5>
</div>

<div class="skill7 skillbox" style="box-shadow: 5px 5px #52528C;">
  <div style="float: left; height: 75%;">
  <i class="fas fa-comment-alt fa-4x"></i></div>
  <p>Spanish</p>
</div>

<div class="skill8 skillbox" style="box-shadow: 5px 5px #52528C;">
  <div style="float: left; height: 75%;">
  <i class="fas fa-spell-check fa-4x"></i></div>
  <p>AP Style</p>
</div>

<div class="skill9 skillbox" style="box-shadow: 5px 5px #52528C;">
  <div style="float: left; height: 75%;">
  <i class="fas fa-volume-up fa-4x"></i></div>
  <p style="margin-top: 0; padding-top: 1vh;">Public Speaking</p>
</div>

</div>

<h3>Contact Me!</h3>

<div style="display: flex; justify-content: space-evenly; margin-left: 25vw; margin-right: 25vw;">

  <a href="https://www.linkedin.com/in/meganmunce/" target="_blank">
    <i class="fab fa-linkedin fa-6x icon"></i>

</a>

<a href="https://twitter.com/meganmuncie?lang=en" target="_blank">
<i class="fab fa-twitter-square fa-6x icon"></i>

</a>

<a href="mailto:meganmunce2022@u.northwestern.edu">
<i class="fas fa-envelope-square fa-6x icon"></i>
</a>

<a href="https://github.com/meganmunce" target="_blank">
<i class="fab fa-github-square fa-6x icon"></i> </a>

<a href="https://medium.com/@meganmunce" target="_blank">
  <i class="fab fa-medium icon fa-6x"></i></a>

</div>

<div style="text-align: center; padding: 10vh;">
<button class="return" style="padding: 5px;">Click here to return to the main menu</button>
</div>

</div>

`

// END OF HTML CONTENT STORAGE


// WHO I AM FUNCTIONS
function expandAm() {
  $(".whoiaminfo").animate({opacity: "0"}, 'fast');
  setTimeout(replacewhoiam, 300);
};

function replacewhoiam() {
  document.querySelector('#abovethenavsection').innerHTML = whoiam;
  $(".aboutmediv").animate({opacity: "100"}, 1800);
  $(".educationdiv").animate({opacity: "100"}, 1800);
};

$(document).on('click','.whoiam', function(){
  var fullwindow = window.innerWidth;
  $(".whoiam").animate({width: fullwindow}, 'slow');
  document.querySelector('.whoiam').style.width = fullwindow;
  setTimeout(expandAm, 800);
  $(".whereivebeen").removeClass('expandingdiv');
  $(".whereimgoing").removeClass('expandingdiv');
});

$(document).on('click', '.return', function(){
  location.reload();
});

// WHERE IM GOING FUNCTIONS

function expandGoing() {
  $(".goinginfo").animate({opacity: "0"}, 'fast');
  $(".goinginfo").animate({opacity: "100"}, 'slow');
  setTimeout(replacewhereimgoing, 300);
};

function replacewhereimgoing() {
  document.querySelector('#abovethenavsection').innerHTML = whereimgoing;
};

$(document).on('click','.whereimgoing', function(){
  var fullwindow = window.innerWidth;
  $(".whereimgoing").animate({width: fullwindow}, 'slow');
  $(".whoiam").animate({width: 0}, 'slow');
  $(".whereivebeen").animate({width: 0}, 'slow');
  document.querySelector('.whereimgoing').style.width = fullwindow;
  setTimeout(expandGoing, 800);
  $(".whoiam").removeClass('expandingdiv');
  $(".whereivebeen").removeClass('expandingdiv');
});

// BEEN FUNCTIONS

function expandBeen() {
  $(".beeninfo").animate({opacity: "0"}, 'fast');
  $(".beeninfo").animate({opacity: "100"}, 'slow');
  setTimeout(replacebeen, 300);
};

function replacebeen() {
  document.querySelector('#abovethenavsection').innerHTML = whereivebeen;
};

$(document).on('click','.whereivebeen', function(){
  var fullwindow = window.innerWidth;
  $(".whereivebeen").animate({width: fullwindow}, 'slow');
  $(".whoiam").animate({width: 0}, 'slow');
  $(".whereimgoing").animate({width: 0}, 'slow');
  document.querySelector('.whereivebeen').style.width = fullwindow;
  setTimeout(expandBeen, 800);
  $(".whereimgoing").removeClass('expandingdiv');
  $(".whoiam").removeClass('expandingdiv');
});


  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

/* RESIZE HEADER

window.onscroll = function() {resizeheader()};

function resizeheader() {

var height = window.innerHeight;

  if (document.body.scrollTop >= height || document.documentElement.scrollTop >= height) {
    document.getElementById("navbar").style.height = "8vh";
    document.getElementById("navbar").style.padding = "5px";
    document.getElementById("headername").style.fontSize = "22px";
    document.querySelector(".navigation").style.fontSize = "18px";
    document.querySelector(".navigation").style.backgroundImage = "url(css/images/blue60percent.png)";
    document.querySelector(".navigation").style.backgroundColor = "none";
  }
  else {
    document.getElementById("navbar").style.height = "10vh";
    document.getElementById("navbar").style.padding = "15px";
    document.getElementById("headername").style.fontSize = "30px";
    document.querySelector(".navigation").style.fontSize = "20px";
    document.querySelector(".navigation").style.backgroundImage = "none";
    document.querySelector(".navigation").style.backgroundColor = "#091540";
  }
};

 */

/* ADD TYPING ANIMATION */

/*
function addTypingEffect1() {
  document.querySelector(".typeline1").classList.remove("hidethis");
  document.querySelector(".typeline1").classList.add("typethis");
};

function addTypingEffect2() {
  document.querySelector(".typeline2").classList.remove("hidethis");
  document.querySelector(".typeline2").classList.add("typethis");
};

function addTypingEffect3() {
  document.querySelector(".typeline3").classList.remove("hidethis");
  document.querySelector(".typeline3").classList.add("typethis");
};

function addTypingEffect4() {
  document.querySelector(".typeline4").classList.remove("hidethis");
  document.querySelector(".typeline4").classList.add("typethis");
};

window.onload = setTimeout(addTypingEffect1, 1000);
window.onload = setTimeout(addTypingEffect2, 3000);
window.onload = setTimeout(addTypingEffect3, 5000);
window.onload = setTimeout(addTypingEffect4, 9000);
*/
