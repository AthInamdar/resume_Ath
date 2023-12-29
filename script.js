var rect= document.querySelector("#rectangle");
var names= document.querySelector("#name");


rect.addEventListener("mousemove",function(val) {
    var rectPosi=rect.getBoundingClientRect();
    var redColor= (val.clientX -rectPosi.left)/2;
    gsap.to(rect, {
        backgroundColor: `rgb(${redColor},0,${255-redColor})`,
        ease: Power4,
        boxShadow: "0px 0px 50px 2px  black",
    });
    gsap.to(names, {
        backgroundColor: `rgb(${255-redColor},0,${redColor})`,
        ease: Power4,
    });
    document.body.style.backgroundColor= "rgba(255,215,0,0.6)"
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect, {
        backgroundColor: `rgb(188, 198, 204)`,
        ease: Power4,
        boxShadow: "0px 0px 0px 0px",
    });
    gsap.to(names, {
        backgroundColor: `rgb(188, 198, 204)`,
        ease: Power4,
    });
    document.body.style.backgroundColor= "rgb(188, 198, 204)"
    
})