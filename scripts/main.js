// Fade out and remove element function.
function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.style.display = "none";
    }, speed);
};

// Alert if IE11 or earlier.
var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(isIE){
 alert("Browser incompatable."); 
}

// document.addEventListener("DOMContentLoaded", function(event) { 
//     var sceneContainer = document.getElementById('scene-container');
//     sceneContainer.style.transition = "opacity 500ms ease";
//     sceneContainer.style.opacity = 1;
//   });

function swapScene(newScene) {
    console.log(newScene);
    var sceneContainer = document.getElementById('scene-container');
    // sceneContainer.style.transition = "opacity 500ms ease";
    sceneContainer.style.opacity = 0;

    setTimeout(function() {
        var tempContainer = document.getElementById('template-container');
        tempContainer.setAttribute("template", newScene);
        // sceneContainer.style.transition = "opacity 500ms ease";
        setTimeout(function(){
            var sceneContainerNew = document.getElementById('scene-container');
            sceneContainerNew.style.opacity = 1;
        }, 100);
        
    }, 500);
    // var tempContainer = document.getElementById('template-container');
    // tempContainer.setAttribute("template", newScene);
}