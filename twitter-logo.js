(function() {
	var canvas = document.getElementById('viewport'),
	    ctx = canvas.getContext('2d');

	// draw body
	ctx.fillStyle = "#33ccff";
	ctx.beginPath();
	ctx.moveTo(42, 181);
	ctx.bezierCurveTo(105, 259, 210, 222, 232, 154);
	ctx.bezierCurveTo(241, 106, 198, 86, 186, 90);
	ctx.bezierCurveTo(159, 87, 149, 120, 146, 130);
	ctx.lineTo(120, 181);
	ctx.bezierCurveTo(106, 205, 60, 202, 42, 181);
	ctx.fill();


	// draw beak
	// bottom part
	ctx.moveTo(231, 154);
	ctx.lineTo(231, 141);
	ctx.bezierCurveTo(245, 146, 250, 144, 257, 144);
	ctx.bezierCurveTo(259, 144, 253, 153, 231, 154);
	ctx.fill();

	// top part
	ctx.moveTo(233, 143);
	ctx.lineTo(230, 130);
	ctx.bezierCurveTo(241, 135, 251, 129, 257, 129);
	ctx.bezierCurveTo(257, 125, 259, 136, 237, 142);
	ctx.fill();

	// draw crest
	ctx.beginPath();
	ctx.moveTo(155, 109);
	ctx.bezierCurveTo(155, 109, 163, 91, 179, 78);
	ctx.lineTo(178, 83);
	ctx.bezierCurveTo(178, 83, 183, 79, 192, 76);
	ctx.bezierCurveTo(192, 76, 194, 78, 186, 83);
	ctx.bezierCurveTo(213, 74, 205, 89, 183, 90);
	ctx.fill();

	// draw wings
	ctx.beginPath();
	ctx.moveTo(146, 131);
	ctx.bezierCurveTo(136, 115, 91, 98, 74, 92);
	ctx.bezierCurveTo(75, 104, 85, 120, 95, 119);
	ctx.bezierCurveTo(115, 118, 85, 119, 79, 120);
	ctx.bezierCurveTo(81, 128, 92, 140, 102, 142);
	ctx.bezierCurveTo(99, 142, 92, 143, 89, 148);
	ctx.bezierCurveTo(94, 159, 104, 161, 114, 161);
	ctx.bezierCurveTo(101, 171, 110, 180, 127, 180);
	ctx.lineTo(146, 131);
	ctx.fill();
}());
