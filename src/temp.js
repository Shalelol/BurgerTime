$(function() {
  var $topLeft = $('.top-left .blocking');
  var $topRight = $('.top-right .blocking');
  var $bottomLeft = $('.bottom-left .blocking');
  var $bottomRight = $('.bottom-right .blocking');

  console.log($bottomRight);

  var calcBackground = function(current, total) {

	var progress = current / total;

  
    if(progress < 0.25) {
      $topRight.css('transform', 'rotate(-' + (90 - (progress * 360)) + 'deg)');
    } else if (progress >= 0.25 && progress < 0.50) {
      $topRight.css('transform', 'rotate(0deg)');
      $bottomRight.css('transform', 'rotate(-' + (90 - (progress - 0.25) * 360) + 'deg)');
    } else if (progress >= 0.50 && progress < 0.75) {
      $topRight.css('transform', 'rotate(0deg)');
      $bottomRight.css('transform', 'rotate(0deg)');
      $bottomLeft.css('transform', 'rotate(-' + (90 - ((progress - 0.50) * 360)) + 'deg)');
    } else if (progress >= 0.75 && progress < 1){
      $topRight.css('transform', 'rotate(0deg)');
      $bottomRight.css('transform', 'rotate(0deg)');
      $bottomLeft.css('transform', 'rotate(0deg)');
      $topLeft.css('transform', 'rotate(-' + (90 - ((progress - 0.75) * 360)) + 'deg)');
    } else{
      $topRight.css('transform', 'rotate(0deg)');
      $bottomRight.css('transform', 'rotate(0deg)');
      $bottomLeft.css('transform', 'rotate(0deg)');
      $topLeft.css('transform', 'rotate(0deg)');
    }
  }

  var value = 0;

  var timeout = function(){
      calcBackground(value, 100);
      value++;

      if(value > 100)
        window.clearInterval(timeout);
    }
  window.setInterval(timeout, 100);

  window.calcBackground = calcBackground;
});
