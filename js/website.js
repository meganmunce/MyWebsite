//HTML CONTENT


educationHTML = `
<div class="leftArrow blue">
    <button class="goLeft"><i class="fas fa-arrow-circle-left fa-3x"></i></button>
</div>

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
<div class="rightArrow white">
    <button class="goRight"><i class="fas fa-arrow-circle-right fa-3x"></i></button>
</div>
`


// FUNCTIONS

const moveDown = () => {
  var height = document.documentElement.clientHeight;
  window.scrollBy(0, height);
};

aboutMeShown = "true"
educationShown = "false"

const moveRight = () => {
  if (aboutMeShown == "true") {
    document.querySelector('.contentcontainer').innerHTML = educationHTML;
    aboutMeShown = "false";
    educationShown = "true";
    return aboutMeShown;
    return educationShown;
  }
  else if (educationShown =="true") {

  }
};

// EVENT LISTENERS

document.querySelector('.goDown').onclick = moveDown;
document.querySelector('.goRight').onclick = moveRight;
