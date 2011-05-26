/***********************************************************************

    Martijn Vermaat's homepage

    Copyright 2011, Martijn Vermaat <martijn@vermaat.name>

      http://martijn.vermaat.name
      https://github.com/martijnvermaat/homepage

    Licensed under the MIT license, see the LICENSE file

      http://en.wikipedia.org/wiki/Mit_license

    This code uses:
      jQuery          http://jquery.com

***********************************************************************/


$(document).ready(function() {

    var links = [{text: 'me at github',
                  url: 'https://github.com/martijnvermaat'},
                 {text: 'twurker',
                  url: 'http://wja'},
                 {text: 'last.fm profile',
                  url: 'http://sdf'},
                 {text: 'infinitary rewriting in coq',
                  url: 'master-project'},
                 {text: 'other code',
                  url: 'code'},
                 {text: 'subversion repositories',
                  url: 'http://sdf'},
                 {text: 'another link',
                  url: 'http://sdf'},
                 {text: 'and another one',
                  url: 'http://sdf'},
                 {text: 'one last',
                  url: 'http://sdf'}];

    /* todo: get rid of black? */
    var colors = ['#ff00ff', '#0000ff', '#00ffff', '#ff0000', '#000000',
                  '#00ff00', '#ff8000', '#808000', '#80ff80'];

    shuffle(colors);
    shuffle(links);

    // Add navigation links to page
    function addNavigation() {

        var list = $('<ul>').appendTo($('<footer>').appendTo($('body')));
        $.each(links, function(i, link) {
            list.append($('<li>').append($('<a>').attr('href', link.url).text(link.text).css('color', colors[i])));
        });

    }

    // Add navigation
    addNavigation();

});


// http://stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling/962890#962890
function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}
