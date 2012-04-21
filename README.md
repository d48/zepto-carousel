# Zepto-carousel.js 

A Zepto.js Plugin to create an image carousel for your website. This carousel simply fades the first element in, remains for a few seconds, and fades out using css3 animation tranforms for opacity.

All you need to set is the target element, and options if you would like to change the speed.


## Installation 

Make sure [Zepto.js](http://zeptojs.com/) is loaded before the carousel plugin.

``` html
<script type="text/javascript" src="lib/zepto.min.js"></script>
<script type="text/javascript" src="lib/zepto-carousel.js"></script>
```

## Demo

View JSFiddle [here](http://jsfiddle.net/design48/rzeVK/2/)

## Usage 

To use, simply target the element you want Zepto-carousel to be applied to. 

HTML:

``` html
<ul id="my-carousel">
	<li>content that will fade in and out</li>
	<li>content that will fade in and out</li>
	<li>content that will fade in and out</li>
</ul>
```

Javascript:

``` javascript
$('#my-carousel').carousel();
```

or with optional settings for speed:

``` javascript
// in milliseconds
// speed = how long fade effect animates for
// duration = how long slides should stay up before next fade animation
$('#my-carousel').carousel({
     'speed': 5000,
     'duration': 6000
});
```

CSS:

``` css
#my-carousel { 
    height: 200px; 
    width: 400px;
    margin: 20px;
    overflow: none;
    position: relative;
}

#my-carousel li { 
    display: inline;
    float: left;
    left:0;
    /* uses Zepto's animate function with opacity, so set to 0 for initial page load */
    opacity: 0; 
    position: absolute;
    top: 0;
}
```


## Todo

* Update plugin design pattern to better manage private variables and use of _this_
* add error checking if element doesn't exist
* error check if only have one slide to animate through
