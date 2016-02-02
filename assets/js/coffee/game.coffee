Minion =
  # Minion characters within an array.
  images: ['min1', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min9', 'min10', 'min11', 'min12', 'min13', 'min14', 'min15', 'min16', 'min17', 'min18', 'min1', 'min2', 'min3', 'min4', 'min5', 'min6', 'min7', 'min8', 'min9', 'min10', 'min11', 'min12', 'min13', 'min14', 'min15', 'min16', 'min17', 'min18']

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

  # Modifies the html upon execution within browser to add row/column coordinates attributes which will be directly dependent on the compare function to identify a match.
  populateCellWithCoordinates: ->
    rowNo = 1
    colNo = 1
    $.each $('#board .row'), (i, row) ->
      colNo = 1
      $.each $(row).children('.cell'), (j, cell) ->
        cell.dataset.rowNo = rowNo
        cell.dataset.colNo = colNo
        colNo++
      rowNo++
    Minion.rowCount = rowNo
    Minion.columnCount = colNo

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

  # Make cell visible again upon a click event by changing the opacity back to 1.
  makeVisibleCellClick: ->
    $('.cell img').click ->
      $(this).css('opacity', '1')
      if (Minion.firstclick == true)
        Minion.firstsrc = $(this).attr('src').toString()
        console.log Minion.firstsrc
        Minion.firstclick = false
      else
        Minion.secondsrc = $(this).attr('src').toString()
        console.log Minion.secondsrc
        if Minion.firstsrc == Minion.secondsrc
          console.log "Matched"
        else
          console.log "not matched"
          $(secondsrc).css('opacity', '0')
        Minion.firstclick = true


  # Makes all cells invisible after 5 seconds of loading the page.
  setTimeout: ->
    window.setTimeout((() -> $('.cell img').css('opacity', '0')),5000)

  init: ->
    Minion.rowCount = 0
    Minion.columnCount = 0
    Minion.firstclick = true
    Minion.populateCellWithMinion()
    Minion.populateCellWithCoordinates()
    Minion.bindCellClick()
    # Minion.deselectCell()
    Minion.setTimeout()
    Minion.randomMinionClass()
    Minion.makeVisibleCellClick()

$ ->
  Minion.init()
