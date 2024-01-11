function textchange(){
    document.getElementById('h2').innerHTML="sumona";
}

// date and time
function dateAndTime(){
    document.getElementById('date').innerHTML =Date();
}
// button on off
function lighton(){
    document.getElementById('img').src="on.gif";
}
function lightoff(){
    document.getElementById('img').src="off.gif";
}
// font size change
function bigFont(){
    document.getElementById('fontsize').style.fontSize ="50px";
}
function smallfont(){
    document.getElementById('fontsize').style.fontSize="30px"
}

//hide show
function hide(){
    document.getElementById('pa').style.display ='none';
}
function show(){
    document.getElementById('pa').style.display ='block';
}

// add number
let a =4;
let b = 5;
let result = a+b;
function add(){
    document.getElementById('result').innerHTML=result;
}

// count p tag
function countp(){
    var info = document.getElementsByTagName('p');
    alert(info.length);
}

// jq library
$(document).ready(function(){    
    // draggable degisn
    $( "#draggable" ).draggable();
    // accordion
    $( "#accordion" ).accordion({
        collapsible: true
      });

// form
    var data = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#c_name" ).autocomplete({
      source: data
    });


    // date picker
     $( "#datepicker" ).datepicker();

});