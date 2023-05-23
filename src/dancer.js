// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  //var dancer = {};

  // use jQuery to create an HTML <span> tag


};
  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // if()

    window.dancers.forEach(function(element) {
      var topAligned = (this.top - element.top < 100 && this.top - element.top > -100);
      var leftAligned = (this.left - element.left < 100 && this.left - element.left > -100)
      if(topAligned && leftAligned) {
        if (this.top !== element.top && this.left !== element.left) {
          this.top = $("body").height() * Math.random();
          this.left = $("body").width() * Math.random();
          console.log('hit')

          var styleSettings = {
            top: this.top,
            left: this.left
          };

          this.$node.css(styleSettings);
        }
      }
      //console.log(this.top);
      // if (this === element) {
      //   console.log('hi');
      // }
      //console.log(element);

    }, this)
    //console.log('window dancers ',window.dancers);

    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };


  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function() {
    this.left = 0;
    this.$node.css('left', 0);
  }

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
 // dancer.prototype.setPosition(top, left);




