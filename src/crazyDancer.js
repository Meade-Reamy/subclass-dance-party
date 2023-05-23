var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = this.timeBetweenSteps / 2;
  this.stopped = false;
  //$(this.$node).on('click', this.stopBlinking.bind(this));
  $(this.$node).on( "mouseenter", this.stopBlinking.bind(this))
  $(this.$node).on( "mouseleave", this.startBlinking.bind(this));

  //this.$node.click(this.stopBlinking());
  //this.$node.on( "mouseenter", this.stopBlinking() ).on( "mouseleave", this.startBlinking() );
}
makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;
makeCrazyDancer.prototype.stopBlinking = function() {
  this.stopped = true;
}
makeCrazyDancer.prototype.startBlinking = function() {
  this.stopped = false;
}

makeCrazyDancer.prototype.oldStep = makeDancer.prototype.step;
//$(this.$node).on('click', this.stopBlinking());
makeCrazyDancer.prototype.step = function() {

  this.oldStep();
  if (this.stopped === false) {

    var arrayOfColors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']
    //['yellow', 'red', 'blue', 'green', 'orange', 'purple'. 'brown'];
    var randomNumber = Math.floor(Math.random() * arrayOfColors.length);
    var currentColor = '';
    var currentColor = arrayOfColors[randomNumber];
     var styleSettings = {
       border: '10px solid ' + currentColor,
       'background-color': currentColor,
       width: '20px',
       height: '20px',
     };
    this.$node.css(styleSettings);
  }

  //this.$node.css('border', '10px solid blue');

  //this.$node.toggle();
}