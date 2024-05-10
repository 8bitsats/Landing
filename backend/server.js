const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  console.log('Received signup request:', req.body);
  // You can add code here to save the request to a database or send it via email.
  res.json({ message: 'Signup received!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
