
    $(".nav li > a").on("click", function() {
        $(".nav").find("li.active").removeClass("active");
        $(this).parent("li").addClass("active");
    });
