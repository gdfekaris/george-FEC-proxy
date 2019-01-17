const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000; /* process.env.PORT || 3000; */

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
