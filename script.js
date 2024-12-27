aboutmecontent = `

<img  class="bridge" src="goldengatevertical.png">

<div id="aboutme">

  <div id="introtext">
    <h1><span class="redhighlight">Megan Fan Munce</span></h1>
    <p>Hi! I'm a reporter for the <a href="https://www.sfchronicle.com/author/megan-fan-munce/" target="_blank">San Francisco Chronicle</a>.</p>
    <p>I have experience covering a variety of beats, from business to breaking news to climate.</p>
    <p>I first joined the Chronicle in 2023 as a Hearst Fellow. Before that, I spent a year at the Houston Chronicle covering local businesses, large and small, as well as the city's large Asian American population.</p>
    <p>I also did two fellowships at <a href="https://www.texastribune.org/about/staff/megan-munce/" target="_blank">The Texas Tribune</a>: one reporting on the 2021 state Legislature, and another working with the Tribune's audience engagement team.</p>
    <p>In 2022, I graduated from Northwestern University's Medill School of Journalism, Media, Integrated Marketing Communications with a B.S. in journalism and political science and an M.S. in journalism.</p>
  </div>

  <div id="socials">
      <a href="https://www.linkedin.com/in/meganmunce/" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
      <a href="https://twitter.com/meganfanmunce" target="_blank"><i class="fa-brands fa-x-twitter fa-2x"></i></a>
      <a href="mailto:megan.munce@sfchronicle.com" target="_blank"><i class="fa-solid fa-paper-plane fa-2x"></i></a>
  </div>

</div>


`

clipscontent = `

`

contactcontent = `

`
// var categories = document.getElementsByClassName("category");

$(document).on('click','.showclips', function(){
  document.querySelector('.aboutme').classList.add('hidden');
  document.querySelector('.aboutme').style.display = "none";
  document.querySelector('.clips').classList.remove('hidden');
});

$(document).on('click','.showaboutme', function(){
  document.querySelector('.aboutme').classList.remove('hidden');
  document.querySelector('.aboutme').style.display = "block";
});


//document.querySelector('.content').classList.add('hidden');

//$(document).on('click','.showaboutme', function(){
//  document.querySelector('.content').innerHTML = aboutmecontent;
//});

//$(document).on('click','.showclips', function(){
//  document.querySelector('.content').innerHTML = clipscontent;
//});

//$(document).on('click','.showcontact', function(){
//  document.querySelector('.content').innerHTML = contactcontent;
//});
