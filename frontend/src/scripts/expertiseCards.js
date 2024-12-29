(() => {
    $("#expertise-cards-container").on("mouseenter", function(e) {
        $(".expertise-card").each(function(index) {
            $(this).css("transform", `translateX(-${index * $(this).width()}px)`);
        });
    });
    $("#expertise-cards-container").on("mouseleave", function(e) {
        $(".expertise-card").each(function(index) {
            $(this).css("z-index", `10`);
            $(this).css("transform", `translateX(0px)`);
        });
    });
    $(".expertise-card").on("click", function(e) {
        $(this).css("transform", `translateY(-25px) scale(1.2)`);
        $(this).css("z-index", `100`);
    });
})();

