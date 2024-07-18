window.onload = function() {
    document.getElementsByClass('top').scrollIntoView();
}
function loader(){
    var tl=gsap.timeline()
    tl.from(".line h1",{
        y:100,
        opacity:0,
        duration:0.5,
        stagger:0.1
    })
    tl.from(".line h4",{
        opacity:0
    })
    var h5timer=document.querySelector("#loader-counter h5")
    var grow=0
    setInterval(function(){
        if(grow<100){
            h5timer.innerHTML=grow++
        }
        else{
            h5timer.innerHTML=grow
        }
    })
    tl.to("#loader",{
        opacity:0,
        delay:1,
    })
    tl.from("#page1",{
        opacity:0,
        y:"100%",
        zIndex:998
    })
    tl.from(".pg1-text h1",{
        y:"100%",
        duration:0.5,
        stagger:0.2
    })
    tl.from("#pg2-container",{
        opacity:0,
        duration:2,
        delay:0.1
    })
    tl.to("main",{
        backgroundColor:"#151515"
    })
    tl.from("#mouse",{
        opacity:0
    })
}
loader()
function mouse(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#mouse",{
            x:dets.x,
            y:dets.y
        })
    })
    Shery.makeMagnet("#page1 .nav-r h1",{});
}
mouse()
function page1(){
    var flag=document.querySelector("#pg1-2")
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x-500,
            y:dets.y-250
        })
    })
    flag.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    flag.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
    
}
page1()
function page2(){
    var box1 = document.querySelector("#pg2-container")
    box1.addEventListener("mouseenter",function(){
        gsap.to("#mouse",{
            opacity:0,
            display:"none"
        })
        box1.addEventListener("mousemove",function(dets){
            gsap.to("#pointer",{
                x:dets.x-1600,
                y:dets.y-250
            })
        })
    })
    box1.addEventListener("mouseleave",function(){
        gsap.to("#mouse",{
            opacity:1,
            display:"flex"
        })
        gsap.to("#pointer",{
            top:"-10%",
            left:"70%"
        })
    })
    var box2=document.querySelector("#pg2-container video")
    flag=0
    box2.addEventListener("click",function(){
        if(flag==0){
            box2.play(),
            box2.style.opacity=1,
            document.querySelector("#pointer").innerHTML=`<i class="ri-pause-circle-line"></i>`
            gsap.to("#pointer",{
                scale:0.5
            })
            flag=1
        } 
        else{
            box2.pause(),
            box2.style.opacity=0,
            document.querySelector("#pointer").innerHTML=`<i class="ri-play-circle-line"></i>`
            gsap.to("#pointer",{
                scale:1
            })
            flag=0
        }
    })  
}
page2()
function page3(){
    gsap.from("#page3 h1",{
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:"#page3 h1",
            scroller:"body"
        }
    })
    gsap.from(".ruler-pg3",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".ruler-pg3",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element .pg3-ruler",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element2 .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element2 .pg3-ruler",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element4 .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element4 .pg3-ruler",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element5 .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element5 .pg3-ruler",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element6 .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element6 .pg3-ruler",
            scroller:"body"
        }
    })
    gsap.from(".pg3-element7 .pg3-ruler",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".pg3-element7 .pg3-ruler",
            scroller:"body"
        }
    })
    Shery.imageEffect(".pg3-image",{
        style:5,
        config:{"a":{"value":2.52,"range":[0,30]},"b":{"value":0.34,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.805639492840662},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":2.44,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.45,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
    gsap.from(".pg3-ruler",{

    })
    var circle=document.querySelector(".circle-container")
    circle.addEventListener("mouseenter",function(){
        gsap.to(".circle1",{
            opacity:1,
            zIndex:998,
            duration:1
        })
    })
    circle.addEventListener("mouseleave",function(){
        gsap.to(".circle1",{
            opacity:0,
            zIndex:997,
            duration:1
        })
    })
    var circle2=document.querySelector(".circle-container2")
    circle2.addEventListener("mouseenter",function(){
        gsap.to(".circle1",{
            opacity:1,
            zIndex:998,
            duration:1
        })
    })
    circle2.addEventListener("mouseleave",function(){
        gsap.to(".circle1",{
            opacity:0,
            zIndex:997,
            duration:1
        })
    })
    var circle3=document.querySelector(".circle-container3")
    circle3.addEventListener("mouseenter",function(){
        gsap.to(".circle1",{
            opacity:1,
            zIndex:998,
            duration:1
        })
    })
    circle3.addEventListener("mouseleave",function(){
        gsap.to(".circle1",{
            opacity:0,
            zIndex:997,
            duration:1
        })
    })
}
page3()
function page4(){
    gsap.from(".ruler1-pg4",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".ruler1-pg4",
            scroller:"body"
        }
    })
    gsap.from(".ruler-pg4",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".ruler-pg4",
            scroller:"body"
        }
    })
}
page4()
function page6(){
    gsap.from("#pg6-text",{
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:"#pg6-text",
            scroller:"body"
        }
    })
    gsap.from(".ruler1-pg6",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".ruler1-pg6",
            scroller:"body"
        }
    })
    gsap.from(".ruler-pg6",{
        transform:"translateX(100%)",
        duration:2,
        scrollTrigger:{
            trigger:".ruler-pg6",
            scroller:"body"
        }
    })
}
page6()