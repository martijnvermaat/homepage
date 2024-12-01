$(document).ready(function() {
  $('a').each(function() {
    $(this).css('color', '#' + Math.floor(Math.random() * 16777215).toString(16));
  });
});
