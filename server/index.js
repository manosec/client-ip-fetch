const express = require('express');
const requestIp = require('request-ip');
const cors = require('cors');

const app = express();

app.use(requestIp.mw());
app.use(cors());


app.get('/', (req, res) => {
  let clientIp = req.clientIp;

  if (clientIp && clientIp.includes(':')) {

    if (clientIp.includes('::ffff:')) {
      clientIp = clientIp.split('::ffff:')[1];
    } else {
      return res.send(`${clientIp}`);
    }
  }

  res.send(`${clientIp}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});