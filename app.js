const express = require('express');
const { createServer } = require('http');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname,'dist/index.html'));
})

const port = process.env.PORT || '3000'

app.set('port', port);

const server = createServer(app);

server.listen(port, () => console.log(`server running on port ${port}`))
