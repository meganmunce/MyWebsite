//HTML CONTENT

ogCONTENT = `

<div class="contentcontainer animate__animated animate__fadeInUp">

<div class="leftArrow purple">
    <button class="goLeft"><i class="fas fa-arrow-circle-left fa-3x"></i></button>
</div>

<div class="middlecontainer">

<div class="AboutMeHeader purple">
<h2>About Me!</h2>
<span class="bottomfeeder">
  <a href="#" class="gotoAboutMe">About Me</a>
  <a href="#"> / </a>
  <a href="#" class="gotoEducation">Education</a>
  <a href="#"> / </a>
</span>
</div>

<div class="AboutMeContent sticky blue">
  <h2>Hi, I'm Megan!</h2>
  <img src="css/images/HeadshotCircle.png" class="headshot">
  <p>I'm currently a junior at Northwestern University's Medill School of Journalism, Media, Integrated Marketing Communications studying journalism with a second major in political science.</p>
  <p>I'm originally from the San Francisco Bay Area, where I first learned to love local politics, entrepreneurship, innovation and the salt water taffy from Pier 39.</p>
  <p>I'm passionate about the intersection of journalism and technology! As a second-generation immigrant and a digital native, finding new accessible means of storytelling is close to home. I'm interested in digital communication, social media engagement and multimedia reporting.</p>
  <p>Use the arrows to the left and right to click through my interactive resume and learn more about me!</p>
</div>

</div>


<div class="rightArrow blue">
    <button class="goRight"><i class="fas fa-arrow-circle-right fa-3x"></i></button>
</div>

</div>

`

aboutmeHTML = `
<div class="AboutMeHeader purple">
<h2>About Me!</h2>
<span class="bottomfeeder">
  <a href="#" class="gotoAboutMe">About Me</a>
  <a href="#"> / </a>
  <a href="#" class="gotoEducation">Education</a>
  <a href="#"> / </a>
</span>
</div>

<div class="AboutMeContent sticky blue">
  <h2>Hi, I'm Megan!</h2>
  <img src="css/images/HeadshotCircle.png" class="headshot">
  <p>I'm currently a junior at Northwestern University's Medill School of Journalism, Media, Integrated Marketing Communications studying journalism with a second major in political science.</p>
  <p>I'm originally from the San Francisco Bay Area, where I first learned to love local politics, entrepreneurship, innovation and the salt water taffy from Pier 39.</p>
  <p>I'm passionate about the intersection of journalism and technology! As a second-generation immigrant and a digital native, finding new accessible means of storytelling is close to home. I'm interested in digital communication, social media engagement and multimedia reporting.</p>
  <p>Use the arrows to the left and right to click through my interactive resume and learn more about me!</p>
</div>


`

educationHTML = `

<div class="EducationHeader blue">
  <h2>Education</h2>
</div>

<div class="EducationContent sticky white">
  <h4>Northwestern University Medill School of Journalism — <span class="italic">Evanston, IL</span></h4>
  <h5>Bachelors of Science, journalism and political science, GPA: 3.85</h5>
  <p>Relevant Courses:</p>
  <ul>
    <li>Constitutional Law I & II</li>
    <li>Media Law & Ethics</li>
    <li>Law in the Political Arena</li>
    <li>Tools of the World Wide Web (HTML, CSS, Javascript)</li>
    <li>Introduction to Computer Programming (Python)</li>
    <li>Data Analysis & Visualization</li>
    <li>Political Reporting</li>
  </ul>
  <a href="#">View More ↓</a>
  <p>Awards and honors:</p>
  <ul>
    <li>Dean's List 5/5 quarters eligible</li>
    <li>Accepted to the Fall 2020 Election Medill on the Hill cohort, unable to attend due to COVID-19</li>
  </ul>
  <p>Extracurriculars:</p>
  <ul>
    <li>Public Relations Chair & Team Captain, <span class="italics">Northwestern Mock Trial</span></li>
    <li>Student Advisory Board Member, <span class="italics">American Mock Trial Association</span></li>
    <li>Student Member, <span class="italics">Asian American Journalists Association</span></li>
  </ul>

  <h4>Presentation High School — <span class="italic">San Jose, CA</span></h4>
  <h5>High School Degree, GPA: 4.43</h5>
  <p>Awards and honors:</p>
  <ul>
    <li>Honors in Language Study (Spanish)</li>
    <li>Honors in Social Studies</li>
    <li>Distinguished Student in Social Studies</li>
    <li>Distinguished Competitor in Speech & Debate</li>
  </ul>
  <p>Extracurriculars:</p>
  <ul>
    <li>Vice President, Speech and Debate</li>
    <li>Class Representative, Student Council</li>
    <li>Club Officer, Students for Political Action</li>
  <ul>
</div>
`

// FIRST PAGE

const moveDown = () => {
//  var height = document.documentElement.clientHeight;
//  window.scrollBy(0, height);
  document.getElementById('introcontainer').classList.add('animate__animated');
  document.getElementById('introcontainer').classList.add('animated__fadeOutUp');
  console.log("class added");
  setTimeout(replacethewholedamnthing, 500);
};

const replacethewholedamnthing = () => {
  document.querySelector('.thewholedamnthing').innerHTML = ogCONTENT;
  console.log("replaced");
};

// CONTENT FUNCTIONS


aboutMeShown = "true"
educationShown = "false"

const moveRight = () => {
  console.log("right click");
  if (aboutMeShown == "true") {
    showEducation();
  }
//  else if (educationShown == "true") {

  //}
};

const moveLeft = () => {
  console.log("left click");
  if (educationShown == "true") {
    showAboutMe();
  }
};

const showAboutMe = () => {
  document.querySelector('.middlecontainer').innerHTML = aboutmeHTML;
  document.querySelector('.leftArrow').classList.remove('blue');
  document.querySelector('.leftArrow').classList.add('purple');
  document.querySelector('.rightArrow').classList.remove('purple');
  document.querySelector('.rightArrow').classList.add('blue');
  aboutMeShown = "true";
  educationShown = "false";
  return aboutMeShown;
  return educationShown;
}

const showEducation = () => {
  document.querySelector('.middlecontainer').innerHTML = educationHTML;
  document.querySelector('.leftArrow').classList.remove('purple');
  document.querySelector('.leftArrow').classList.add('blue');
  document.querySelector('.rightArrow').classList.remove('blue');
  document.querySelector('.rightArrow').classList.add('purple');
  aboutMeShown = "false";
  educationShown = "true";
  return aboutMeShown;
  return educationShown;
}

// EVENT LISTENERS

document.querySelector('.goDown').onclick = moveDown;
// document.querySelector('.goRight').onclick = moveRight;
// document.querySelector('.goLeft').onclick = moveLeft;

// document.querySelector('.gotoAboutMe').onclick = showAboutMe;
// document.querySelector('.gotoEducation').onclick = showEducation;
