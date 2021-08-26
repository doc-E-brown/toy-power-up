var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var btnCallback = function (t, opts) {
  return t.popup({
    title: 'Search Catalogue',
    url: t.signUrl('section.html'),
    args: { myArgs: 'You can access these with t.arg()' },
    height: 278 // initial height, can be changed later
  });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    console.log("MSG");
    console.log(JSON.stringify(t));
    return [{
      icon: GRAY_ICON,
      text: 'Seach',
      callback: btnCallback
    }];
  }
});