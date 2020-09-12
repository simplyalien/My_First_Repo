// Create event listener to enter items below
$("#enter").on("click", function(){

    var task=$("#todoItem").val();

    $("#todoList").append("<div class='task'>" + task + "<div class='x fa-times'></div></div>");


    console.log(task)
})


$(document).on("click", ".x", function(){
    $(this).parent().remove();
})

$(document).on("click", ".task", function(){
    $(this).toggleClss("done");
    
    if ($(this).hasClass("done")) {
        $(this).find("div").removeClass("fa-times");
        $(this).find("div").addClass("fa-check");

    else ($(this).find("div").addClass("fa-times";
    }
    })


// Create event listener to delete items below

// Create event listener to toggle 
