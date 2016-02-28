function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


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

  var time = +getParameterByName('time');

  if(!time) return;

  if((new Date()).valueOf() > time) {
    console.log((new Date()).valueOf() - time);
    console.log((new Date()).valueOf());
    return;
  }

  var openTime = (new Date()).valueOf();

  var timeout = function(){
      var now = (new Date()).valueOf() - openTime;
      calcBackground(now, time - openTime);
      $('.goal-time').text(moment(time).countdown().toString());

      if(now > time)
        window.clearInterval(timeout);
    }
  window.setInterval(timeout, 100);
});
