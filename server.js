// const { createServer } = require('http');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');

const handle = routes.getRequestHandler(app);
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post('/api/contact', (req, res) => {
    const { email, name } = req.body;
    console.log(req.body);
    res.send('success');

    // mailer({ email, name, text: message }).then(() => {
    //   console.log('success')
    //   res.send('success')
    // }).catch((error) => {
    //   console.log('failed', error)
    //   res.send('badddd')
    // })
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
