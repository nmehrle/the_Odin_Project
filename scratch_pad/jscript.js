var bordersOn = true;
var menuOn=false;

$(document).ready(function() {
  makeGrid(20);
  activateBlack();
});

function toggleBorders() {
  var $pixel = $('.pixel');
  if(bordersOn) {
    $('#buttonWords').text("Turn Borders On ");
    $pixel.css("border-width",0);
    var curWid = $pixel.width();
    $pixel.width(curWid+2);
    bordersOn=false;
  }
  else {
    $('#buttonWords').text("Turn Borders Off");
    $pixel.css("border-width",1);
    var curWid = $pixel.width();
    $pixel.width(curWid-2);
    bordersOn=true;
  }
};

function makeGrid(size) {
  reset();
  var numPix=size;
  var pixSize = 600/numPix-2;
  for(var i =0; i<numPix; i++) {
    $('#gridWrapper').append('<div class="row"></div>');
  }
  for(var j=0; j<numPix; j++){
    var toAppend = '<div class="pixel"> </div>';
    $('.row').append(toAppend);
  }
  $('.row').height(pixSize);
  var $pixel = $('.pixel');
  $pixel.css("width",pixSize).css("height",pixSize);
};

function resize(col) {
  var size = prompt("Enter a new grid size");
  if (size!=null) {
    makeGrid(size);
    switch (col) {
      case 1:
        activateBlack();
        break;
      case 2:
        activateRandom();
        break;
      case 3:
        activateGreys();
        break;
      case 4:
        activateTrail();
        break;
    }
  }
};

function reset() {
  $('.pixel').remove();
  $('.row').remove();
  if(!bordersOn) {
    bordersOn=true;
    $('#buttonWords').text("Turn Borders Off");
  }
};

function activateBlack() {
  $('.pixel').mouseover(function() {
    $(this).css('background-color',"#000");
  });
};

function activateRandom() {
  $('.pixel').mouseover(function() {
    $(this).css('background-color',getRandomColor());
  });
};

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function activateGreys() {
  var letters = '0123456789abcdef'.split('');
  $('.pixel').mouseover(function() {
    var curCol = $(this).css('background-color');
    var curInd = letters.indexOf(parseRGB(curCol));
    if(curInd ===0) return;
    var nextVal = letters[curInd-1];
    var nextCol = '#'+nextVal+nextVal+nextVal;
    $(this).css('background-color',nextCol);
  });
};

function parseRGB(rgb) {
  var rgb = rgb.toString().split(',');
  var r   = rgb[0].substring(4)*1;
  return r.toString(16).substring(1);
};

function activateTrail() {
  $('.pixel').hover(function() {
    $(this).css('background-color','#000');
  },function() {
    $(this).animate({backgroundColor:"#fff"},800);
  }); 
};

function menu() {
  if (menuOn) {
    $('#all').animate({left:"0"});
    $('#menu').animate({left:"-240px"});
    $('#all').css('margin-left','0px');
    menuOn=false;
  }
  else {
    $('#all').css('margin-left','5px');
    $('#all').animate({left:"240px"});
    $('#menu').animate({left:0});
    menuOn=true;
  }
};
