const rp = require('request-promise');
const url = 'https://www.reddit.com';

rp(url)
  .then(function(){
    console.log(html);
  })
  .catch(function(err){

  });