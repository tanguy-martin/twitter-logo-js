window.onload = function() {
    var canvas = document.getElementById('viewport'),
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(200, 250, 125, 0, 2*Math.PI, true);
    ctx.fill();
};