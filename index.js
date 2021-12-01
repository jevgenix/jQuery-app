
// creating variable using jQuery
$.todoLista = document.querySelector('.todo-lista');
// after document is ready, adding fuctions
$(document).ready(function () {
    // todo-button onclick function
    $(".todo-nappi").click(function (event) {
        // preventing submit feature
        event.preventDefault();
        // creating variables
        var input = $("input").val();
        var clear = $("input").val('');
        // adding todo, if input > 0
        if (input != '') {
            // appending html to ul element
            $('ul').append('<li>'
                + '<span class="check"><i class="fa fa-check" aria-hidden="true"></i></span>'
                + input
                + '<span class="close"><i class="fa fa-times" aria-hidden="true"></i></span></li>');
            // clearing input value
            clear;
            // save changes
            tallena();
        } else {           
            // alert and return
            alert("Looks like you missing the task.");
            return;
        }
    });
    // REMOVE TODO
    $('ul').on('click', '.close', function () {
        $(this).parent('li').fadeOut("normal", function () {
            $(this).remove();
            console.log("removed");
            // SAVE REMOVED
            tallena();
        });
    });
    // CHECK TODO
    $('ul').on('click', '.check', function () {
        $(this).parent('li').toggleClass('checked');
        console.log("checked");
        // SAVE CHECKED
        tallena();
    });
});

// LOCAL STORAGE USING JQUERY, CREATING ALL NEEDED VARIABLES
$.information = localStorage.getItem("jQueryTodo");
$('#myList').html($.information);
// MAIN FUNC TO SAVE THINGS IN LOCAL STORAGE
function tallena() {
    window.localStorage.jQueryTodo = $.todoLista.innerHTML;
}