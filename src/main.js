var randomShit  = require('./randomShit');

var newRandomShit = () => (`<p> ${randomShit.hi} ${randomShit.event} </p> `);

var app = document.getElementById('app');
app.innerhtml = newRandomShit();

if(module.hot){
  module.hot.accept();
}
