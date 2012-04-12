/**
 * ORIGINAL AUTHOR'S COMMENTS:
 * Uses AMD or browser globals to create a jQuery plugin.
 * It does not try to register in a CommonJS environment since
 * jQuery is not likely to run in those environments.
 * See jqueryPluginCommonJs.js for that version.
 *
 * /
  
/**
 * MY ADDITIONAL COMMENTS: 
 * 
 * takes an anonymous function and designate it 'factory'.
 * this function is defined at the bottom of the file.
 * this is an anonymous function wrapped in a closure: 
 * (function($) {
 *    // do your stuff here.  
 * })(jQuery);
 * if this is awkward, read up on the module pattern.
 * it is really a great feature once you understand it.
 *
 * this is a great resource:
 * http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
 *
 * another excellent resource:
 * http://addyosmani.com/resources/essentialjsdesignpatterns/book/
 */
(function (factory) {
    
    // check for define and define.amd
    if (typeof define === 'function' && define.amd) {
        // AMD. Register this jQuery plugin as an anonymous module.
        // lists jQuery as a dependency, to load it before our code.
        define(['jquery'], factory);
    } else {
        // if define is not available, then we assume the user of our plugin has
        // already loaded the jQuery script before our script, like you always do with
        // plugins.  In that case, we explicitly pass jQuery into our factory function, so
        // that it is available for our plugin.
        factory(jQuery);
    }
}(
    // pass this function in as our factory function to be used above in the anonymous function.
    // this function takes jQuery as an argument, which will be provided either by define(), or
    // by the user of our plugin simply including the jQuery file before this file, which means
    // it will be a global object.
    function ($) {
        $.fn.jqueryPlugin = function () {
            // do plugin stuff.....
        };
    }
  
  )
);
