const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan'); 
  
const app = express();
 
app.use(cors());
app.use(helmet());
app.use(morgan('combined')); 
app.use(express.json()); 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to makemyresume.co." });
});

// routes 
require('./app/routes/pdf.routes')(app); 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
 