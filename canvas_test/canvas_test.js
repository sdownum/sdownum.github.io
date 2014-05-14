function debug_print(msg)
{
	var debug_span = document.getElementById('debug_span');
	debug_span.innerHTML= msg;
}

function main()
{
	var canvas,
		context2d;

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

	debug_print('Render complete.');	
}