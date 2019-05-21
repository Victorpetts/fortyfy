
//doesn't not work any more

let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let app     = express();

const port = 8081;

function getUrl(img) {
let url;
let patternForUrl = /\S+(?:url)\W/;
let regex = new RegExp(patternForUrl);
url = img.replace(patternForUrl,'');
console.log('What remains of img ', img);
patternForParentasis = /(\))/;
url = url.replace(patternForParentasis,'');
console.log('This is in function ' + url);
return url;
}



app.get('/', function(req, res){

  url = 'https://www.epicgames.com/fortnite/en-US/news';

  request(url, function(error, response, html){
    if(!error){
      let $ = cheerio.load(html);

      let titles, dates;

      var json = [];

      for (let i = 0; i < 13; i++) {
        let img = $('.invisible-image', html).text();

        let result = img;
        json.push({"img": result});
      }

      $('h4').each(function(i){
        json[i].date = $(this).text();
      })

    }

      // To write to the system we will use the built in 'fs' library.
      // In this example we will pass 3 parameters to the writeFile function
      // Parameter 1 :  output.json - this is what the created filename will be called
      // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
      // Parameter 3 :  callback function - a callback function to let us know the status of our function

      fs.writeFile('output.json', JSON.stringify(json, null, 2), function(err){
          if (err) throw err;
          console.log('File successfully written! - Check your project directory for the output.json file');

      })

      // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
      res.send('Check your console!')

  });
});

app.listen(process.env.PORT || port);
console.log(`Magic happens on port ${port}`);
exports = module.exports = app;

// json.push({"title":$('.row > a', html)[i].attribs.title, "date":$('h4', html)[i].attribs.class });

// $('h4').each(function(i){
//   json[i] = {"date":$(this).text()};
// })
