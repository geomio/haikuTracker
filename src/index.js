import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './haiku.js';

$(document).ready(function() {
  $('#formArea').submit(function(event){
    event.preventDefault();
    let userPoemInput = $("#userPoemArea").val();
    let haikuObject = new Haiku(userPoemInput.split("\n"))
    haikuObject.linesAndWordSplitter();
  });  
});

//push user input lines into new object
//count lines in object
//return wether lines are or are not haiku
// if lines match count line syllables
//display user haiku maybe with counts