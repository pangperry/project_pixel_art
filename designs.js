// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
makeGrid = () => {
  var width, height, color;

  $('#sizePicker').submit((e) => {
    e.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    color = $('#colorPicker').val();
  });
}

$(makeGrid());