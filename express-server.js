const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
