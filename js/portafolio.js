
/*****************/
/*LOADING SCREEN HOME*/
/*****************/

$(window).load(function(){
     $('.preloader').fadeOut();
});



/*****************/
/*ANIMATED ON HOVER STYLES*/
/*****************/

animationHover('.behance','bounce');
animationHover('.vimeo','bounce');

function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};




var genLongShadow = function(num, color) {
  
  var value = '';
  
  for(var i = 1; i < num; i++) {
    value += i+'px '+i+'px 0px '+color;
    
    if(i != num-1) {
      value += ', ';
    }
  }
  
  
  return value;
};

document.querySelector('.behance').style.textShadow = genLongShadow(120, '#1656ca ');
document.querySelector('.dribble').style.textShadow = genLongShadow(120, '#1792ba ');


