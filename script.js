$("#todaysDate").text(moment().format("LLLL"));

function save(){
    localStorage.setItem("nine",$("#input9").val())
    localStorage.setItem("ten",$("#input10").val())
    localStorage.setItem("eleven",$("#input11").val())
    localStorage.setItem("twelve",$("#input12").val())
    localStorage.setItem("one",$("#input1").val())
    localStorage.setItem("two",$("#input2").val())
    localStorage.setItem("three",$("#input3").val())
    localStorage.setItem("four",$("#input4").val())
    localStorage.setItem("five",$("#input5").val())
}
  
function saveAll(){
    $("#input9").val(localStorage.getItem("nine"))
    $("#input10").val(localStorage.getItem("ten"))
    $("#input11").val(localStorage.getItem("eleven"))
    $("#input12").val(localStorage.getItem("twelve"))
    $("#input1").val(localStorage.getItem("one"))
    $("#input2").val(localStorage.getItem("two"))
    $("#input3").val(localStorage.getItem("three"))
    $("#input4").val(localStorage.getItem("four"))
    $("#input5").val(localStorage.getItem("five"))
};
