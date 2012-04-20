/**
 * Zepto - image carousel
 *
 * @todo - add error checking if element doesn't exist
 *         and if only one slide
 */
;(function( $ ){

    // Private vars
    // Set to true to output event data
    var _debug = true,
        _element,
        _items,
        _settings,
        _timerID;

    // Main methods for the plugin
    var methods = {

      init : function( options ) {
              // Override if options are set
              _settings = $.extend({
                'durationAnimation': 4000,
                'durationBetweenSlides': 5000
              }, options);

              // Return for chaining
              return this.forEach(function( elem ) {
                _element = elem,
                _items = $( _element ).children();

                $( _element ).carousel( 'slideFadeIn', 0 );
              });
            },

      slideFadeIn : function( num ) {
                      // animate args: property, duration in milliseconds, easing type
                      $( _items ).eq( num ).animate( {opacity: 1}, _settings.animationDuration, 'ease-in-out', function() {

                          // set timer on how long slide remains visible
                          setTimeout( function() { 
                            $( _element ).carousel( 'slideFadeOut', num )
                          }, _settings.durationBetweenSlides ); 
                      });
                   },

      slideFadeOut : function( num ) {
                      // animate args: property, duration in milliseconds, easing type
                      $( _items ).eq( num ).animate( {opacity: 0}, _settings.animationDuration, 'ease-in-out', function() {
                        $( _element ).carousel( 'slideFadeIn', $( _element ).carousel( 'calculateNextSlide', num ) ) 
                      });
                     },

      calculateNextSlide : function( num ) {
                            return ( $( _items ).size()  == (num + 1) ) ? 0 : num + 1;
                           },
    };

  $.fn.carousel = function( method ) {
    // To access methods directly from DOM
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      _log( 'Method ' + method + ' does not exist' );
    }
  };

  // Private 
  function _log(event) {
    if( _debug ) {
      console.log(event);
    }
  }

})( Zepto );
