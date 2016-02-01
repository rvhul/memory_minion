Minion =
  # Minion characters within an array.
  images: ['min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8','min11', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8']

  # randomizeImages: ->
  #   Minion.images = Minion.images.sort((a, b) -> ((Math.random() < 0.5) ? 1 : -1))


  # Formula for populating each cell with a random Minion.
  randomMinionClass: ->
    randIndex = Math.floor(Math.random()*Minion.images.length)
    randImage = Minion.images[randIndex]
    Minion.images.splice(randIndex, 1)
    randImage

  # Populates each cell with a random Minion and adds a class of 'randMinion' to it which initialized the randomization function.
  populateCellWithMinion: ->
    $.each $(".cell img"), (i, ele) ->
      randMinion = Minion.randomMinionClass()
      $(ele).addClass(randMinion).attr('src', "assets/img/#{randMinion}.png")

  # Upon clicking a cell, animation begins by the addition of the animation class and lasts until user clicks a different cell.
  bindCellClick: ->
    $('.cell i').click ->
      $('.rubberBand').removeClass('rubberBand').removeClass('infinite')
      $(this).addClass('rubberBand').addClass('infinite')
      lastElementClicked = $(this)

  # Upon clicking the next cell the previous cell animation stops and animation class is removed.
  deselectCell: ->
    $('.cell i').click ->
      $(this).removeClass('rubberBand').removeClass('infinite')

  # Makes all cells invisible after 5 seconds of loading the page.
  setTimeout: ->
    window.setTimeout((() -> $('.cell img').css('opacity', '0')), 10000)

  init: ->
    Minion.populateCellWithMinion()
    Minion.bindCellClick()
    # Minion.deselectCell()
    Minion.setTimeout()
    Minion.randomMinionClass()

$ ->
  Minion.init()
