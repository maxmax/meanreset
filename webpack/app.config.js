var configuration = require('./base.config.js');

configuration.entry = {buddy: './src/buddy.js'};
configuration.output.filename = '../public/assets/[name].bundle.js';

module.exports = configuration;
