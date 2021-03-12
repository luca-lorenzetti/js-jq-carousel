$(function(){

    var nextButton = $('div.next');
    var prevButton = $('div.prev');



    nextButton.click({mode: "next"}, changeImage);
    prevButton.click({mode: "prev"}, changeImage);

    function changeImage(event){
        var activeImage = $('.images img.active');

        if( event.data.mode == "next" ){
            if( $(activeImage).hasClass("last")  ){
                $(activeImage).toggleClass("active");
                $(".images img.first").toggleClass("active");
            }
            else{
                $(activeImage).toggleClass("active").next().toggleClass("active");
            }

        }
        if( event.data.mode == "prev" ){
            if( $(activeImage).hasClass("first")  ){
                $(activeImage).toggleClass("active");
                $(".images img.last").toggleClass("active");
            }
            else{
                $(activeImage).toggleClass("active").prev().toggleClass("active");
            }

        }
    
    }
});
