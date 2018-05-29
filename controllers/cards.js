const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if (!req.session.deck) {
      //The session name is being defined right here
      req.session.deck = [];
    }
    knex('cards').then((results) => {
      res.render("index", {
        cards:results, deck:req.session.deck
      });
    })
  },
  add: function(req, res) {
    knex('cards').insert({
      mana: `${req.body.mana}`,
      attack: `${req.body.attack}`,
      health: `${req.body.health}`,
      description: `${req.body.description}`
    }).then(() => {
      res.redirect('/');
    });
  },

  addToUsr: function(req, res) {
    knex('cards').where('id', `${req.params.id}`).then((pickedCard) => {
      req.session.deck.push(pickedCard[0]);
    })
    req.session.save(() => {
      res.redirect("/");
    })


  }
}
