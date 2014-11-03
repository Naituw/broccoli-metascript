var Filter = require('broccoli-filter')
var MetaScript = require('metascript')

module.exports = MetaScriptFilter
MetaScriptFilter.prototype = Object.create(Filter.prototype)
MetaScriptFilter.prototype.constructor = MetaScriptFilter
function MetaScriptFilter (inputTree, options) {
	if (!(this instanceof MetaScriptFilter)) {
		return new MetaScriptFilter(inputTree, options)
	}
	Filter.call(this, inputTree, options)
	this.options = options || {}
}

MetaScriptFilter.prototype.extensions = ['js']
MetaScriptFilter.prototype.targetExtension = 'js'

MetaScriptFilter.prototype.processString = function (string, relativePath) {
	return MetaScript.transform(string, relativePath, this.options.scope);
}