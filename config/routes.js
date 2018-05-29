//Update the name of the controller below and rename the file.
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);
  app.post('/cards', cards.add);
  app.get('/cards/:id', cards.addToUsr);
}
