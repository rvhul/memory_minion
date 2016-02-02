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
  makeVisibleCellClick: function() {
    return $('.cell img').click(function() {
      $(this).css('opacity', '1').addClass('animated').addClass('pulse');
      if (Minion.firstclick === true) {
        Minion.firstsrc = $(this).attr('src').toString();
        Minion.firstCell = $(this);
        console.log(Minion.firstsrc);
        return Minion.firstclick = false;
      } else {
        Minion.secondsrc = $(this).attr('src').toString();
        Minion.secondCell = $(this);
        console.log(Minion.secondsrc);
        if (Minion.firstsrc === Minion.secondsrc) {
          console.log("Matched");
        } else {
          console.log("Not Matched");
          Minion.firstCell.css('opacity', '0');
          setTimeout((function() {
            return Minion.secondCell.css('opacity', '0');
          }), 500);
        }
        return Minion.firstclick = true;
      }
    });
  },
  timeAttack: function() {
    return $('#timer-container #timer').TimeCircles({
      'animation': 'smooth',
      'bg_width': 0.7,
      'fg_width': 0.1,
      'circle_bg_color': '#60686F',
      'time': {
        'Days': {
          'text': 'Days',
          'color': '#FFCC66',
          'show': false
        },
        'Hours': {
          'text': 'Hours',
          'color': '#99CCFF',
          'show': false
        },
        'Minutes': {
          'text': 'Minutes',
          'color': '#BBFFBB',
          'show': false
        },
        'Seconds': {
          'text': 'Seconds',
          'color': '#FF9999',
          'show': true
        }
      }
    });
  },
  setTimeout: function() {
    return window.setTimeout((function() {
      return $('.cell img').css('opacity', '0');
    }), 7000);
  },
  init: function() {
    Minion.rowCount = 0;
    Minion.columnCount = 0;
    Minion.firstclick = true;
    Minion.populateCellWithMinion();
    Minion.populateCellWithCoordinates();
    Minion.setTimeout();
    Minion.randomMinionClass();
    window.setTimeout(Minion.timeAttack, 5000);
    return window.setTimeout(Minion.makeVisibleCellClick, 5000);
  }
};

$(function() {
  Minion.init();
  return new WOW().init();
});
