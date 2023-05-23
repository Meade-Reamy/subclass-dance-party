var makeCircleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = this.timeBetweenSteps / 50;
  this.t = .05;
  this.radius =  Math.floor(Math.random() * 100) + 1;
  var defaultStyle = {
    // 'border-color': 'white',
   //  'background-image': 'url("assets/dancer_img_white.png")',
    // 'width': '500px'

   'background' : 'url("assets/dancer_img_white.png")',
   'background-size': '64px 64px',
   'width' : '64px',
   'height' :'64px',
   'border-width':'0px'
  }
  this.$node.css(defaultStyle);

  //this.xCenter = this.left;
  //this.yCenter = this.top;
  this.linedUp = false;
}
makeCircleDancer.prototype = Object.create(makeDancer.prototype);
makeCircleDancer.prototype.constructor = makeCircleDancer;
makeCircleDancer.prototype.oldStep = makeDancer.prototype.step;

makeCircleDancer.prototype.lineUp = function() {
  this.linedUp = true;
}

makeCircleDancer.prototype.step = function() {
  this.oldStep();
  this.t += .15;
  //var radius = 100;
  if (this.linedUp === false) {
    var newLeft = Math.floor(this.left + (this.radius * Math.cos(this.t)));
    var newTop = Math.floor(this.top + (this.radius * Math.sin(this.t)));
    this.top = newTop;
    this.left = newLeft;
  } else {
    var newLeft = Math.floor(0 + (this.radius * Math.cos(this.t)));
    var newTop = Math.floor(this.top + (this.radius * Math.sin(this.t)));
    this.top = newTop;
    this.left = newLeft;
  }



  var styleSettings = {
    top: newTop,
    left: newLeft,

  }

  this.$node.css(styleSettings);

}