// const { db, syncAndSeed } = require('./db');

const app = require('./index.js');
const port = process.env.PORT || 1337;

console.log('Starting up app');

app.listen(port, function() {
  console.log(`Server up: listening on port ${port}`);
});
