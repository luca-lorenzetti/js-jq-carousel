$(function(){

    var nextButton = $('div.next');
    var prevButton = $('div.prev');
    var bullets = $('i.fa-circle');

    $(bullets).click({mode: "bullet",targetBullet: $(this)}, changeImage);

    nextButton.click({mode: "next"}, changeImage);
    prevButton.click({mode: "prev"}, changeImage);


    function changeImage(event){
        var activeImage = $('.images img.active');
        var bulletActive = $('i.active');

        if( event.data.mode == "next" ){
            if( $(activeImage).hasClass("last")  ){
                 //immagine
                $(activeImage).toggleClass("active");
                $(".images img.first").toggleClass("active");
                //bullet
                $(bulletActive).toggleClass("active");
                $("i.first").toggleClass("active");
            }
            else{
                //immagine
                $(activeImage).toggleClass("active").next().toggleClass("active");
                //bullet
                $(bulletActive).toggleClass("active").next().toggleClass("active")
            }
        }

        else if( event.data.mode == "prev" ){
                if( $(activeImage).hasClass("first")  ){
                //immagine
                    $(activeImage).toggleClass("active");
                    $(".images img.last").toggleClass("active");
                    //bullet
                    $(bulletActive).toggleClass("active");
                    $("i.last").toggleClass("active");
                }
                else{
                    //immagine
                    $(activeImage).toggleClass("active").prev().toggleClass("active");
                    //bullet
                    $(bulletActive).toggleClass("active").prev().toggleClass("active")
                }
        }
        else{
            console.log(event.data.targetBullet)
        }
    
    }
});
