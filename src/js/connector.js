console.log("Hey");

var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

window.TrelloPowerUp.initialize({
  'card-badges': function (t, ops) {
    t.alert({
      'message': 'Hey hey'
    })


    return t.card("all")
      .then(function (card) {
        console.log(card);
        return [{
          text: card.idShort
        }];
      })
  },

  'card-back-section': function (t, options) {
    return {
      title: 'My Card Back Section',
      icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
      content: {
        type: 'iframe',
        url: t.signUrl('./html/section.html'),
        height: 230, // Max height is 1500.
        action: {
          text: 'My Action',
          callback: (t) => t.popup({
            'title': 'Pop Up',
            items: []
          }),
        },
      }
    };
  }
})