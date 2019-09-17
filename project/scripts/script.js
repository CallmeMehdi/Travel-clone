var elements = document.querySelectorAll(".fade-anim");
var scrollElements = document.querySelectorAll(".fade-anim-scroll");

function fading(){
    for(i=0;i<elements.length;i++){
        if ($(window).scrollTop()>= elements[i].scrollTop){
            $(elements[i]).fadeIn(1000);
        }
    }
}

 $(document).ready(fading());

setTimeout(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop()+ $(window).height();
        $(".fade-anim-scroll").each(function(){

            if(scroll>=$(this).offset().top +$(this).outerHeight()){
                $(this).animate({'opacity':'1'},1000);

            }
        })   
    })
},1000)
 
