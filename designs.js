$(() => {
  // generates grid per user input
  makeGrid = () => {
    $('#sizePicker').submit((e) => {
      e.preventDefault();
      let width, height, row;

      if ($('#pixelCanvas').children().length > 0) {
        $('#pixelCanvas tr').remove();
      }

      height = $('#inputHeight').val();
      width = $('#inputWidth').val();
      row = '<tr>' + ('<td></td>').repeat(width) + '</tr>';

      for (var i = 0; i < height; i++) {
        $('#pixelCanvas').append(row);
      }
    });
  };

  // sets square color when clicked
  $('#pixelCanvas').on('click', 'td', (e) => {
    e.preventDefault();
    let color = $('#colorPicker').val();
    $(e.target).css('background-color', color);
  });

  makeGrid();
});