console.log("Hey");

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
  }
})