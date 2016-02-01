var Minion;

Minion = {
  images: ['min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8'],
  randomMinionClass: function() {
    return Minion.images[Math.floor(Math.random() * Minion.images.length)];
  },
  spliceSss: function() {
    var t;
    t = Minion.images[Math.floor(Math.random() * Minion.images.length)];
    return Minion.images.splice(t, 1);
  },
  populateCellWithMinion: function() {
    return $.each($(".cell img"), function(i, ele) {
      var randMinion;
      randMinion = Minion.randomMinionClass();
      randMinion = Minion.spliceSss();
      return $(ele).addClass(randMinion).attr('src', "assets/img/" + randMinion + ".png");
    });
  },
  bindCellClick: function() {
    return $('.cell i').click(function() {
      var lastElementClicked;
      $('.rubberBand').removeClass('rubberBand').removeClass('infinite');
      $(this).addClass('rubberBand').addClass('infinite');
      return lastElementClicked = $(this);
    });
  },
  deselectCell: function() {
    return $('.cell i').click(function() {
      return $(this).removeClass('rubberBand').removeClass('infinite');
    });
  },
  setTimeout: function() {
    return window.setTimeout((function() {
      return $('.cell img').css('opacity', '0');
    }), 10000);
  },
  init: function() {
    Minion.populateCellWithMinion();
    Minion.bindCellClick();
    return Minion.setTimeout();
  }
};

$(function() {
  return Minion.init();
});
