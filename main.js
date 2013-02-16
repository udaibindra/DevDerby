var canvas = document.getElementByTagName('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,150,150);
  ctx.fillStyle = '#FFF';
  ctx.globalAlpha = 0.2;

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