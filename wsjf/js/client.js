console.log('here');

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://http://promptus.github.io/wsjf/img/rice_black.svg';
var GREY_ROCKET_ICON = 'https://http://promptus.github.io/wsjf/img/rice_gray.svg';
var WHITE_ROCKET_ICON = 'https://http://promptus.github.io/wsjf/img/rice_white.svg';

function getColorForScore(score) {
  //yellow, purple, blue, red, green, orange, black, sky, pink, lime
  if (score >= 5) {
    return 'green';
  } else if (score >= 1) {
    return 'lime';
  } else if (score >= 0.5) {
    return 'yellow';
  } else {
    return 'orange';
  }
}

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'RICE',
      callback: function(t) {
        return t.popup({
          title: "RICE",
          url: 'estimate.html',
        });
      }
		}];
	},
  'card-badges': function(t, options) {
    return t.get('card', 'shared',  'wsjf')
    .then(function(wsjf) {
      if (wsjf) {
      return [{
        icon:  WHITE_ROCKET_ICON,
         text: wsjf  || 'No RICE!',
        color: wsjf ? getColorForScore(wsjf) : 'red',
    }];
  }
  });
          },
   'card-detail-badges': function(t, options) {
    return t.get('card', 'shared',  'wsjf')
    .then(function( wsjf) {
      return [{
        title: 'RICE',
        text: wsjf  || 'No RICE!',
        color: wsjf ? getColorForScore(wsjf) : 'red',
        callback: function(t) {
          return t.popup({
            title: "RICE",
            url: 'estimate.html',
          });
        }
      }]
    });
  },
  'show-settings': function(t, options){
    // when a user clicks the gear icon by your Power-Up in the Power-Ups menu
    // what should Trello show. We highly recommend the popup in this case as
    // it is the least disruptive, and fits in well with the rest of Trello's UX
    return t.popup({
      title: 'Custom Fields Settings',
      url: './settings.html',
      height: 184 // we can always resize later
    });
  }
          
});
