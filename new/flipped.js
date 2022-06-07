$("#clipsslideshow > div:gt(0)").hide();

setInterval(function() {
  $('#clipsslideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#clipsslideshow');
}, 4000);
