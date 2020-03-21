const express = require('express')
const cookieSession = require('cookie-session')

const app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['foo', 'bar'],
    maxAge: 24 * 60 * 60 * 1000
  }))

const port = 3000

app.get('/', (req, res) => {
      // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.end(req.session.views + ' views');
});

app.listen(port, () => console.log(`Cookie tester port ${port}!`));
