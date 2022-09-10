// Empty constructor
function FacetecPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
FacetecPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'FacetecPlugin', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
FacetecPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.facetecPlugin = new FacetecPlugin();
  return window.plugins.factecPlugin;
};
cordova.addConstructor(FacetecPlugin.install);