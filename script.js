

//aquiring current time from moment.js to display atop the page

$("#todaysDate").text(moment().format("LLLL"));

//Making a variable to grab the hourly time from moment.js

var time = moment().format("H");

//checking the time variable
//console.log(time);

//time to color code the hours

$("input").each(function(index,element) {

    var times = $(this).attr("time");
   
    //past hours are purple
   
   if (time > parseInt(times)) {
      $(this).css("border-color","purple", "opacity", "3");
    }
   
    //present hour is pink
  
    if (time == parseInt(times)) {
      $(this).css("border-color","#f441a5", "opacity", "5");
    }
  });

//saving to local storage

function save(){
    localStorage.setItem("nine",$("#input9").val());
    localStorage.setItem("ten",$("#input10").val());
    localStorage.setItem("eleven",$("#input11").val());
    localStorage.setItem("twelve",$("#input12").val());
    localStorage.setItem("one",$("#input1").val());
    localStorage.setItem("two",$("#input2").val());
    localStorage.setItem("three",$("#input3").val());
    localStorage.setItem("four",$("#input4").val());
    localStorage.setItem("five",$("#input5").val());
}

//getting what was saved after we refresh the page
  
function saveAll(){
    $("#input9").val(localStorage.getItem("nine"));
    $("#input10").val(localStorage.getItem("ten"));
    $("#input11").val(localStorage.getItem("eleven"));
    $("#input12").val(localStorage.getItem("twelve"));
    $("#input1").val(localStorage.getItem("one"));
    $("#input2").val(localStorage.getItem("two"));
    $("#input3").val(localStorage.getItem("three"));
    $("#input4").val(localStorage.getItem("four"));
    $("#input5").val(localStorage.getItem("five"));
};