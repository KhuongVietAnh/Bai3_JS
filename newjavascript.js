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
        setPoiterEvents(1);
        animate(count, slides);
        setTimeout(function () {
            setPoiterEvents(0);
        }, 1000);
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
        setPoiterEvents(1);
        animate(count, slides);
        setTimeout(function () {
            setPoiterEvents(0);
        }, 1000);
    });
    // click img Nav
    $(document).on("click", ".container__items_nav li", function () {
        var index = $(this).index();
        count = index;
        setPoiterEvents(1);
        animate(count, slides);
        setTimeout(function () {
            setPoiterEvents(0);
        }, 1000);
    });

    animate(0, slides);
    //funtion animate
    function animate(count, slides) {
        slides.animate({right: count * rightList}, 900);
        noneOpactity();
        $(".container__items_nav li").eq(count).animate({opacity: 0.5});
    }
    // funtion remove opacity
    function noneOpactity() {
        $(".container__items_nav li").animate({opacity: 1});
    }
    //call funtion
    autoPlay();
    //funtion autoplay
    function autoPlay() {
        var autoPlay = setInterval(function () {
            count++;
            if (count >= countImg.length)
            {
                count = 0;
            } else if (count < 0)
            {
                count = countImg.length - 1;
            }
            animate(count, slides);
        }, 2000);
    }
    //When the animation is being processed, the blanket does not allow the new animation to be clicked
    //When the animation is finished,allow the new animation to be clicked
    function setPoiterEvents(type) {
        var itemsNav = document.getElementsByClassName("container__items_nav__js");
        if (type === 1) {
            for (var i = 0; i < itemsNav.length; i++) {
                itemsNav[i].setAttribute('style', 'pointer-events: none;');
            }
        } else {
            for (var i = 0; i < itemsNav.length; i++) {
                itemsNav[i].setAttribute('style', 'pointer-events: auto;');
            }
        }
    }
});
