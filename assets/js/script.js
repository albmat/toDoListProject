// Chake Off Specific toDos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//CLick on X to delete toDo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//input to create a new toDo
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        let toDoText = $(this).val();
        //clear up the input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>")
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
})