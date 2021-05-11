
handwritingOn = "true"
noteOff = `<p>The handwriting<br>was cute, change<br> it back</p>`
noteOn = `<p>Your handwriting is <br>awful Megan, make <br>it a normal font</p>`

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
