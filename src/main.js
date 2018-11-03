//style imports for build system
require('./scss/_main.scss');
import './scss/libs/icons/fonts/icons.eot';
import './scss/libs/icons/fonts/icons.svg';
import './scss/libs/icons/fonts/icons.ttf';
import './scss/libs/icons/fonts/icons.woff';

//libs import
import objectFitImages from 'object-fit-images';

//custom components imports
import slideNav from './js/slideNav.js';

ready(function(){
  objectFitImages();
  
  new slideNav();
});


//other helper functions
function ready(callback){
  // in case the document is already rendered
  if (document.readyState!='loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') callback();
  });
}
