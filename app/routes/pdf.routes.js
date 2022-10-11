 
const controller = require("../controllers/pdf.controller");  
module.exports = function(app) {
  app.use(function(req, res, next) {
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "x-access-token, Origin, Content-Type, Accept"
    // );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next();
  }); 
  app.post('/api/pdf',controller.postHtml); 
};
