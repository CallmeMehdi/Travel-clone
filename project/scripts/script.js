var elements = document.querySelectorAll(".fade-anim");
var scrollElements = document.querySelectorAll(".fade-anim-scroll");

console.log($(".ready").offset(),$(window).scrollTop())
function fading(){
    for(i=0;i<elements.length;i++){
        console.log($(window).scrollTop(),$(elements[i]).offset())
        if ($(window).scrollTop()>= elements[i].scrollTop){
            console.log("here")
            $(elements[i]).fadeIn(1000);
        }
    }
}

 $(document).ready(fading());
//  console.log(scrollElements);

setTimeout(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop()+ $(window).height();
        $(".fade-anim-scroll").each(function(){
            console.log($(this).offset().top)

            if(scroll>=$(this).offset().top +$(this).outerHeight()){
                console.log($(this))
                $(this).animate({'opacity':'1'},1000);

            }
        })   
    })
},1000)
 