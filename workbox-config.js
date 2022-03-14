module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};