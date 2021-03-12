$(function(){

    var nextButton = $('div.next');
    var prevButton = $('div.prev');
    var bullets = $('i.fa-circle');
    var images = $('.images img');

    $(bullets).click({mode: "bullet"}, changeImage);

    nextButton.click({mode: "next"}, changeImage);
    prevButton.click({mode: "prev"}, changeImage);


    function checkIsActive(){

        for (var i= 0; i <images.length; i++) {
            if ($(images[i]).hasClass('active')) {
                    return i;
            }
        }
    }

    function changeImage(event){
        var index = checkIsActive(images);

        if( event.data.mode == "next" ){
            if( $(images[index]).hasClass("last")  ){
                 //immagine
                $(images[index]).toggleClass("active");
                $(images[0]).toggleClass("active");
                //bullet
                $(bullets[index]).toggleClass("active");
                $(bullets[0]).toggleClass("active");
            }
            else{
                //immagine
                $(images[index]).toggleClass("active").next().toggleClass("active");
                //bullet
                $(bullets[index]).toggleClass("active").next().toggleClass("active")
            }
        }

        else if( event.data.mode == "prev" ){
                if( $(images[index]).hasClass("first")  ){
                //immagine
                    $(images[index]).toggleClass("active");
                    $(images[images.length-1]).toggleClass("active");
                    //bullet
                    $(bullets[index]).toggleClass("active");
                    $(bullets[bullets.index-1]).toggleClass("active");
                }
                else{
                    //immagine
                    $(images[index]).toggleClass("active").prev().toggleClass("active");
                    //bullet
                    $(bullets[index]).toggleClass("active").prev().toggleClass("active")
                }
        }
        else{
            var bulletActive = $('i.active');
            var imageActive = $('.images img.active');

            index = $(this).index();
           //immagine
            $(images[index]).toggleClass("active");
            imageActive.toggleClass("active");
            //bullet
            $(bullets[index]).toggleClass("active");
            bulletActive.toggleClass("active");
            

        }
    }
});
