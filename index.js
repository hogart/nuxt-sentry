const path = require('path');

const defaults = {
    attachProps: true,
};

module.exports = function (moduleOptions) {
    const options = Object.assign({}, defaults, moduleOptions);

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'sentry.js',
        options,
    })
};

module.exports.meta = require('./package.json');
