(function Hello () {

    var  leftgear = document.getElementById("leftgear");
        
    window.addEventListener("scroll", function() {
        leftgear.style.transform= "rotate("+window.pageYOffset+"deg)";
        leftgear.style.webkitTransformOrigin= "center center"
});

}());