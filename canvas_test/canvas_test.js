function debug_print(msg)
{
	var debug_span = document.getElementById('debug_span');
	debug_span.innerHTML= msg;
}

function main()
{
	var canvas,
		context2d,
		index,
		width,
		pos_y,
		pos_x;

	debug_print('main');

	debug_print('Getting canvas...');
	canvas = document.getElementById('test_canvas');

	debug_print('Getting context...');
	context2d = canvas.getContext('2d');

	debug_print('Setting font...');
	context2d.fillStyle = "#aaffaa";
	context2d.font = 'italic 400 12px/2 Unknown Font, sans-serif';

	debug_print('Writing message...');	
	context2d.fillText('Hello, World!', 10, 10);
	context2d.save();

	debug_print('Drawing map...');	

	index = 20;
	width = 5;
	pos_y = 40;
	pos_x = 22

	for (i = 1; i <= index; i++) {
		context2d.fillText('.', pos_x, pos_y);
		pos_x += 12;

		if (i % width == 0) {
			pos_y += 12;
			pos_x = 22;
		}
	}
	context2d.fillText('@', pos_x, 44);
	context2d.save();


	debug_print('Render complete.');	
}