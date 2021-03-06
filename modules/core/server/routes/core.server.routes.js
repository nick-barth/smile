'use strict';

var path = require('path');

module.exports = function (app) {
	// Root routing
	var core = require('../controllers/core.server.controller');

	// Define error pages
	app.route('/server-error').get(core.renderServerError);

	// Return a 404 for all undefined api, module or lib routes
	app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

	// Define application route
	app.route('/smile/*').get(core.renderIndex);

	app.get('/', function (req, res) {

		res.sendFile('index.html', { root: path.join(__dirname, '../../../../public/index') });
	});
};
