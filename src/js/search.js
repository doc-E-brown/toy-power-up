var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var Promise = window.TrelloPowerUp.Promise;

var btnCallback = function (t, opts) {
  return t.popup({
    title: 'Pull Requests',
    items: function (t, options) {
      // use options.search which is the search text entered so far
      // return a Promise that resolves to an array of items
      // similar to the items you provided in the client side version above
      return new Promise(function (resolve) {
        // you'd probably be making a network request at this point
        resolve([{
          text: 'Result 1',
          callback: function (t, opts) { }
        }, {
          text: 'Result 2',
          callback: function (t, opts) { }
        }]);
      });
    },
    search: {
      // optional # of ms to debounce search to
      // defaults to 300, override must be larger than 300
      debounce: 300,
      placeholder: 'Search pull requests',
      empty: 'No pull requests found',
      searching: 'Searching GitHub...'
    }
  });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: GRAY_ICON,
      text: 'GitHub',
      callback: btnCallback
    }];
  }
});