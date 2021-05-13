
handwritingOn = "true"
noteOff = `<p>The handwriting<br>was cute, change<br> it back</p>`
noteOn = `<p>Your handwriting is <br>awful Megan, make <br>it a normal font</p>`

pres = `
<p style="font-size: 18px;">Roles of the President:<br></p>
<p style="font-size: 14px;"><span class="numbers" style="font-size: 14px;">(</span>Click to see Vice President<span class="numbers" style="font-size: 14px;">)</span></p>
<ul>
  <li style=" font-size: 16px;">The President shall oversee and assist the operations of the Executive Board and ensure that they are appropriate and efficient</li>
  <li style=" font-size: 16px;">The President shall oversee and introduce the coaches of the program, ensuring that they understand their roles in the organization.</li>
  <li style=" font-size: 16px;">The President shall represent the program when the presidential presence is necessary, including to some funding organizations and to the Student Organization Finance Office <span style=" font-size: 16px;" class="numbers">(</span>SOFO<span style=" font-size: 16px;" class="numbers">)</span></li>
</ul>
`

vp = `
<p style="font-size: 18px;">Roles of the Vice President:<br></p>
<p style="font-size: 14px;"><span class="numbers" style="font-size: 14px;">(</span>Click to see President<span class="numbers" style="font-size: 14px;">)</span></p>
<ul>
  <li style=" font-size: 16px;">The Vice President shall organize the recruitment of new members via advertising, activities fairs, info sessions, and try-outs.</li>
  <li style=" font-size: 16px;">The Vice President shall address all social conflicts within the program which prevent it from appropriately functioning.	</li>
  <li style=" font-size: 16px;">The Vice President shall monitor the program to ensure that this constitution is followed.</li>
  <li style=" font-size: 16px;">The Vice President shall record minutes of all executive meetings to be sent to all team members and coaches.		</li>
</ul>
`

$(document).on('click','.changetonormal', function(){
  if (handwritingOn == "true") {
    document.getElementById("allofit").style.fontFamily = "Crimson Text, serif";
    document.querySelector(".buttontext").innerHTML = noteOff;
    changenumbersFont();
    handwritingOn = "false";
    return handwritingOn;
  }
  else if (handwritingOn == "false"){
    document.getElementById("allofit").style.fontFamily = 'handwritingregular';
    document.querySelector(".buttontext").innerHTML = noteOn;
    changenumbersHand();
    handwritingOn = "true";
    return handwritingOn;
  }
});

function changenumbersFont() {
  var numarray = document.getElementsByClassName("numbers");
  var i;
  for (i = 0; i < numarray.length; i++) {
    var num = numarray[i];
    num.style.fontFamily = "Crimson Text, serif";
    }
};

function changenumbersHand() {
  var numarray = document.getElementsByClassName("numbers");
  var i;
  for (i = 0; i < numarray.length; i++) {
    var num = numarray[i];
    num.style.fontFamily = "handwritingregular";
  };
  console.log("changed");
};

presshown = "true";

$(document).on('click','.flipthis', function(){
  if (presshown == "true") {
    document.querySelector(".flipthis").innerHTML = vp;
    presshown = "false";
    return presshown;
  }
  else if (presshown == "false"){
    document.querySelector(".flipthis").innerHTML = pres;
    presshown = "true";
    return presshown;
  }
});
