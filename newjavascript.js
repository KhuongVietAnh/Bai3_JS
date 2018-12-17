$(document).ready(function () {
    //set value right for tag ul
    var rightList = 648;
    var slides = $("#slides-js");
    //get total img
    var countImg = $(".list__items__js");
    var count = 0;
    //click button previous
    $(document).on("click", ".pre__js", function () {
        count--;
        if (count >= countImg)
        {
            count = 0;
        }
        if (count < 0)
        {
            count = countImg.length - 1;
        }
        animate(count, slides);
    });
    //click button next
    $(document).on("click", ".next__js", function () {
        count++;
        if (count >= countImg.length)
        {
            count = 0;
        } else if (count < 0)
        {
            count = countImg.length - 1;
        }
        animate(count, slides);
    });
    // click img Nav
    $(document).on("click", ".container__items_nav li", function () {
        var index = $(this).index();
        count = index;
        animate(count, slides);
    });
    //funtion animate
    function animate(count, slides) {
        slides.animate({right: count * rightList}, 1000);
        noneOpactity();
        $(".container__items_nav li").eq(count).animate({opacity: 0.5});
    }
    // funtion remove opacity
    function noneOpactity() {
        $(".container__items_nav li").animate({opacity: 1});
    }
});

