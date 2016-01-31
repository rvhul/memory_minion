var Minion;

Minion = {
  shapes: ["cubes", "truck", "space-shuttle", "motorcycle", "subway"],
  randomShapeClass: function() {
    return "fa-" + Minion.shapes[Math.floor(Math.random() * Minion.shapes.length)];
  },
  populateCellWithShape: function() {
    return $.each($(".cell i"), function(i, ele) {
      return $(ele).addClass(Minion.randomShapeClass).addClass('animated').addClass('infinite');
    });
  },
  init: function() {
    return Minion.populateCellWithShape();
  }
};

$(function() {
  return Minion.init();
});
