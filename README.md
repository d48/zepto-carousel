# Zepto-carousel.js 

A Zepto Plugin to create an image carousel for your website. This carousel simply fades the first element in, remains for a few seconds, and fades out using css3 animation tranforms for opacity.

All you need to set is the target element, and options if you would like to change the speed.


## Installation 

Make sure Zepto is loaded before the carousel plugin.

``` html
<script type="text/javascript" src="libs/zepto.min.js"></script>
<script type="text/javascript" src="libs/zepto-carousel.js"></script>
```


## Usage 

To use, simply target the element you want Zepto-carousel to be applied to. 

HTML:

``` html
<div id="wrappper">
     <ul id="my-carousel">
          <li>content that will fade in and out</li>
          <li>content that will fade in and out</li>
          <li>content that will fade in and out</li>
     </ul>
</div>
```

Javascript:

``` javascript
$('#my-carousel').carousel();
```

or with optional settings for speed:

``` javascript
// in milliseconds
// durationAnimation = how long fade effect animate for
// durationBetweenSlides = how long slides should stay up before next fade animation
$('#my-carousel').carousel({
     'durationAnimation': 5000,
     'durationBetweenSlides': 6000
});
```

CSS:

``` css
#my-carousel { 
     height: 400px; width: 200px; overflow: hidden; 
}

#my-carousel li { 
     /* uses Zepto's animate function with opacity, so set to 0 upon page load */
     opacity: 0; 
}
```


## Todo

* add error checking if element doesn't exist
* error check if only have one slide to animate through
