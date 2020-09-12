$(".toggle").on("click",function(){
    $(this).find(".toggleContainer").toggleClass("active")
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active")

});

$(".searchButton").on("click",function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(".searchBar").css("height","100vh");
        $("#searchForm").css("opacity","1");
        $(".serachIcon").removeClass("fa-search").addClass("fa-times");
    }

    else {
        $(".searchBar").css("height","0vh");
        $("#searchForm").css("opacity","0");
        $(".serachIcon").addClass("fa-search").removeClass("fa-times");

    }
});

function fade(){
    $(".preloader").fadeOut("slow");
}

setTimeout(fade,3000);