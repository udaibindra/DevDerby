var canvas = document.getElementByTagName('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#367dbc';
ctx.fillRect(10,10,100,100)



canvas.addEventListener('touchstart', function (event) {
  for (var i = 0; i < event.touches.length; i ++) {
    var touch = event.touches[i];
    ctx.beginPath();
    ctx.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.stroke();
  }
}, false);

canvas.addEventListener("touchmove", function (event) {
	for (var i = 0; i < event.touches.length; i ++) {
		ctx.beginPath();
		ctx.translate(touch.pageX,touch.pageY);
		ctx.fill();
    	ctx.stroke();
  }
}, false);
canvas.addEventListener("touchend", function () {}, false);