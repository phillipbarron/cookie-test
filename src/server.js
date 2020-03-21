const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send({foo: 'bar'}));

app.listen(port, () => console.log(`Cookie tester port ${port}!`));
