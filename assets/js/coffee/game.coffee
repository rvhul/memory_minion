Minion =
  shapes: ["cubes", "truck", "space-shuttle", "motorcycle", "subway"]

  randomShapeClass: ->
    "fa-" + Minion.shapes[Math.floor(Math.random()*Minion.shapes.length)]

  populateCellWithShape: ->
    $.each $(".cell i"), (i, ele) -> $(ele).addClass(Minion.randomShapeClass).addClass('animated').addClass('infinite')


  init: ->
    Minion.populateCellWithShape()

$ ->
  Minion.init()
