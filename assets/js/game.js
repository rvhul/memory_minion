var Minion;

Minion = {
  images: ['min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8'],
  randomMinionClass: function() {
    var randImage, randIndex;
    randIndex = Math.floor(Math.random() * Minion.images.length);
    randImage = Minion.images[randIndex];
    Minion.images.splice(randIndex, 1);
    return randImage;
  },
  populateCellWithMinion: function() {
    return $.each($(".cell img"), function(i, ele) {
      var randMinion;
      randMinion = Minion.randomMinionClass();
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
    Minion.setTimeout();
    return Minion.randomMinionClass();
  }
};

$(function() {
  return Minion.init();
});
