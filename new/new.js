$(document).on('click','.experience', function(){
  var fullwindow = window.innerWidth;
  //$(".experience").animate({height: (fullwindow*0.8)}, '750ms');
  //$(".expanded").animate({height: (fullwindow*0.05)}, '750ms');
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".experience").addClass("expanded").removeClass("collapsed");
});

$(document).on('click','.aboutme', function(){
  var fullwindow = window.innerWidth;
  //$(".aboutme").animate({height: (fullwindow*0.8)}, '750ms');
  //$(".expanded").animate({height: (fullwindow*0.05)}, '750ms');
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".aboutme").addClass("expanded").removeClass("collapsed");
  //document.querySelector('.whereivebeen').style.width = fullwindow;
});

$(document).on('click','.skills', function(){
  var fullwindow = window.innerWidth;
  //$(".skills").animate({height: (fullwindow*0.80)}, '750ms');
  //$(".expanded").animate({height: (fullwindow*0.05)}, '750ms');
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".skills").addClass("expanded").removeClass("collapsed");
  //document.querySelector('.whereivebeen').style.width = fullwindow;
});

$(document).on('click','.clips', function(){
  var fullwindow = window.innerWidth;
  //$(".clips").animate({height: (fullwindow*0.80)}, '750ms');
  //$(".expanded").animate({height: (fullwindow*0.05)}, '750ms');
  $(".expanded").removeClass("expanded").addClass("collapsed");
  $(".clips").addClass("expanded").removeClass("collapsed");
  //document.querySelector('.whereivebeen').style.width = fullwindow;
});
