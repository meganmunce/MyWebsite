/**
* Template Name: Tempo - v4.0.1
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// HTML CONTENT STORAGE

jobs1 = `
<h5 style="text-align: left; margin-bottom: 0px;">Campus Editor, The Daily Northwestern</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, Jan. 2021 - March 2021</p>
<ul style="font-size: 18px;">
  <li>Lead editorial decisions related to on-campus coverage at Northwestern’s only daily student news publication</li>
    <li>Manage team of over 30 reporters writing daily stories and breaking news</li>
      <li>Report on top administrators, union leaders and student activists</li>
        <li>Budget and edit 15+ stories weekly</li>
</ul>

<h5 style="text-align: left; margin-bottom: 0px;">Web Editor, The Daily Northwestern</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, September 2020 - December 2020</p>
<ul style="font-size: 18px;">
  <li>Published stories on WordPress and promoted them through TweetDeck and Facebook</li>
    <li>Edited all social media posts and SEO headlines</li>
      <li>Pioneered special edition newsletters, such as a 2020 election edition</li>
        <li>Increased newsletter subscribers by 5.7% in two months</li>
</ul>`


jobs2 = `
<h5 style="text-align: left; margin-bottom: 0px;">Copy Editor, The Daily Northwestern</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Evanston, Ill., September 2019 - December 2019</p>
<ul style="font-size: 18px;">
  <li>Edited all stories for grammar and AP style</li>
    <li>Fact-checked 6+ stories nightly</li>
      <li>Updated and maintained the Daily’s stylebook</li>
</ul>

<h5 style="text-align: left; margin-bottom: 0px;">Social Media Editor, The Daily Northwestern</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Evanston, Ill., Jan. 2020 - March 2020</p>
<ul style="font-size: 18px;">
  <li>Tracked social media engagement on Twitter and Facebook</li>
    <li>Created targeted campaigns through Twitter and Instagram for investigative and longform stories</li>
      <li>Designed and posted original graphics for daily Instagram story newsletters</li>
</ul>`

jobs3 = `
<h5 style="text-align: left; margin-bottom: 0px;">Business Development & Marketing Intern, New Enterprise Associates</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, Aug. 2020 - March 2021</p>
<ul style="font-size: 18px;">
  <li>Track engagement metrics for internal social media channels</li>
  <li>Ghostwrite original content to spur organic engagement</li>
  <li>Create external marketing content for social media</li>
  <li>Pitched and developed original corporate innovation podcast</li>
</ul>

<h5 style="text-align: left; margin-bottom: 0px;">Content Volunteer, Parity.org</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, Aug. 2019 - Jan. 2020</p>
<ul style="font-size: 18px;">
  <li>Monitored news on women in business leadership</li>
  <li>Created posts for Facebook, Twitter and Instagram advocating for women’s leadership in business and spreading the nonprofit’s message
  </li>
</ul>`

jobs4 = `
<h5 style="text-align: left; margin-bottom: 0px;"> Junior Correspondent Intern, Organization for World Peace</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, Apr. 2019 - Aug. 2019</p>
<ul style="font-size: 18px;">
  <li>Aggregated stories about the military and diplomacy in the Middle East</li>
  <li>rote 12 articles summarizing current events and their historical context</li>
  <li>Attended remote editing and pitching meetings</li>

</ul>

<h5 style="text-align: left; margin-bottom: 0px;">Contributing Writer, Victory Briefs</h5>
<p style="margin-top: 0px; margin-bottom: 1vh;">Remote, Nov. 2018 - June 2019</p>
<ul style="font-size: 18px;">
  <li>Researched topics of domestic and international policy from price controls on the pharmaceutical industry to India's membership in the United Nations Security Council
  </li>
  <li>Wrote 2000 word briefs to educate high school debate students about necessary background information, pros and cons of each policy</li>
</ul>`

// END OF HTML CONTENT STORAGE


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#navbar')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)


  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

/* REPLACE WORK CONTENT */

jobs1shown = "true";
jobs2shown = "false";
jobs3shown = "false";
jobs4shown = "false";

const workGoLeft = () => {
  if (jobs1shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs4;
    console.log("replaced");
    jobs4shown = "true";
    jobs1shown = "false";
    return jobs4shown;
    return jobs1shown;
  }
  else if (jobs2shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs1;
    jobs1shown = "true";
    jobs2shown = "false";
    return jobs2shown;
    return jobs1shown;
  }
  else if (jobs3shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs2;
    jobs2shown = "true";
    jobs3shown = "false";
    return jobs2shown;
    return jobs3shown;
  }
  else if (jobs4shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs3;
    jobs3shown = "true";
    jobs4shown = "false";
    return jobs3shown;
    return jobs4shown;
  }
};

const workGoRight = () => {
  if (jobs1shown == "true") {
    console.log("replaced");
    document.querySelector('.workcontent').innerHTML = jobs2;
    jobs2shown = "true";
    jobs1shown = "false";
    return jobs2shown;
    return jobs1shown;
  }
  else if (jobs2shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs3;
    jobs3shown = "true";
    jobs2shown = "false";
    return jobs2shown;
    return jobs3shown;
  }
  else if (jobs3shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs4;
    jobs4shown = "true";
    jobs3shown = "false";
    return jobs4shown;
    return jobs3shown;
  }
  else if (jobs4shown == "true") {
    document.querySelector('.workcontent').innerHTML = jobs1;
    jobs1shown = "true";
    jobs4shown = "false";
    return jobs1shown;
    return jobs4shown;
  }
};


const addFadeOutLeft = () => {
  $(".workcontent").animate({opacity: "0"});
  setTimeout(workGoLeft, 500);
  setTimeout(fadeBackIn, 500);
};

const addFadeOutRight = () => {
  $(".workcontent").animate({opacity: "0"});
  setTimeout(workGoRight, 500);
  setTimeout(fadeBackIn, 500);
};

const fadeBackIn = () => {
  console.log("you should see it now");
  $(".workcontent").animate({opacity: "100"});
};

$(document).on('click', '.turnworkleft', addFadeOutLeft);
$(document).on('click', '.turnworkright', addFadeOutRight);

// AUTO ANIMATE WORK

workAnimation = "true";

//do {
//setInterval(addFadeOutRight, 5000);
//}
//while (workAnimation == "true");

const pauseWorkAnimation = () => {
  workAnimation = "false";
};

const playWorkAnimation = () => {
  workAnimation = "true";
};

$(document).on('click','.pauseWorkAnimation', pauseWorkAnimation);
// $(document)on.('click','.playWorkAnimation', workAnimation = "false");

/* FILTER CLIPS */


var clipsarray = document.getElementsByClassName("clip");

function showGenClips() {
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
};

$(document).on('click', '.genclips', showGenClips);
$(document).on('click', '.dataclips', showDataClips);
$(document).on('click', '.politicalclips', showPoliticalClips);

/* RESIZE HEADER */

window.onscroll = function() {resizeheader()};

function resizeheader() {

var height = window.innerHeight;

  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
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
