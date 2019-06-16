// page
$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors: ['block1', 'block2', 'block3', 'block4'],
      menu: '#menu',
      css3: true,
      scrollingSpeed: 1000
  });
});



// title letters
$('.white').novacancy({
  'color': '#ffffff',
  'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
});

$('.blue').novacancy({
  'blink': 2,
  'off': 1,
  'color': '#154481',
  'glow': ['0 0 8px #358bfc', '0 0 3px #358bfc', '0 0 6px #358bfc']
});

$('.red').novacancy({
  'blink': 2,
  'off': 1,
  'color': 'red',
  'glow': ['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']
});