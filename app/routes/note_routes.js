
// note_routes.js

  module.exports = function(app, db) {
    app.post('/offers', (req, res) => {
      const offer = { text: req.body.body, title: req.body.title };
      db.collection('offers').insert(offer, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };