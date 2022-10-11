const puppeteer = require('puppeteer');  

exports.postHtml =  async (req, res) => { 
  // const apikey = req.header('Authorization'); 
  // if (!apikey){
  //   return res.status(404).send({ message: "Un-Authorized" }); 
  // } 
   
    const htmlContent = req.body.data;    
    // console.log(htmlContent)
    if (!htmlContent) {
        throw "Please provide a URL as the first argument";
    }
    try{
  
    const browser = await puppeteer.launch({ headless: true,  
     args: ['--no-sandbox', '--disable-setuid-sandbox'], });
    const page = await browser.newPage();
    await page.setContent(htmlContent,{waitUntil: 'networkidle0'});
    // await page.setContent(content,{waitUntil: 'networkidle0'} )
    const buffer = await page.pdf({
      format: "A4", 
      printBackground: true,
      margin: {
        left: "0px",
        top: "5px",
        right: "0px",
        bottom: "5px",
      },
      
    });
    res.send(buffer); 
    await browser.close();  
  }
 
catch(err) {
        res.status(500).send({ message: err.message });
    };
  
   
  
  };