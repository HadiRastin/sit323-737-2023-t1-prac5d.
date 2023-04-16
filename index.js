const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis'
});
client.set('numberOfBrowsing', 0);

app.get('/', (req, res) => {
  client.get('numberOfBrowsing', (err, visits) => {
    res.send('number Of Browsing' + visits);
    client.set('numberOfBrowsing', parseInt(visits) + 1);
  });
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
