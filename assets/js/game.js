var Minion;

Minion = {
  images: ['min1', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min9', 'min10', 'min11', 'min12', 'min13', 'min14', 'min15', 'min16', 'min17', 'min18', 'min1', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min9', 'min10', 'min11', 'min12', 'min13', 'min14', 'min15', 'min16', 'min17', 'min18'],
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
  populateCellWithCoordinates: function() {
    var colNo, rowNo;
    rowNo = 1;
    colNo = 1;
    $.each($('#board .row'), function(i, row) {
      colNo = 1;
      $.each($(row).children('.cell'), function(j, cell) {
        cell.dataset.rowNo = rowNo;
        cell.dataset.colNo = colNo;
        return colNo++;
      });
      return rowNo++;
    });
    Minion.rowCount = rowNo;
    return Minion.columnCount = colNo;
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
  makeVisibleCellClick: function() {
    return $('.cell img').click(function() {
      $(this).css('opacity', '1');
      if (Minion.firstclick === true) {
        Minion.firstsrc = $(this).attr('src').toString();
        console.log(Minion.firstsrc);
        return Minion.firstclick = false;
      } else {
        Minion.secondsrc = $(this).attr('src').toString();
        console.log(Minion.secondsrc);
        if (Minion.firstsrc === Minion.secondsrc) {
          console.log("Matched");
        } else {
          console.log("not matched");
          $(secondsrc).css('opacity', '0');
        }
        return Minion.firstclick = true;
      }
    });
  },
  setTimeout: function() {
    return window.setTimeout((function() {
      return $('.cell img').css('opacity', '0');
    }), 5000);
  },
  init: function() {
    Minion.rowCount = 0;
    Minion.columnCount = 0;
    Minion.firstclick = true;
    Minion.populateCellWithMinion();
    Minion.populateCellWithCoordinates();
    Minion.bindCellClick();
    Minion.setTimeout();
    Minion.randomMinionClass();
    return Minion.makeVisibleCellClick();
  }
};

$(function() {
  return Minion.init();
});
