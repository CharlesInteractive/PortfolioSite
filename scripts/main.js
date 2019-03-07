

// Alert if IE11 or earlier.
function IECheck() {
    var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
    if(isIE){
        alert("Some features of this site may be incompatible with Internet Explorer. You will have a better experience switching to a modern browser."); 
    };
}IECheck();


// swap scenes for subpages
function swapScene(newScene) {
    var sceneContainer = document.getElementById('scene-container');
    sceneContainer.style.opacity = 0;
    setTimeout(function() {
        var tempContainer = document.getElementById('template-container');
        tempContainer.setAttribute("template", newScene);
        waitForElement("scene-container-subpage", function(){
            var sceneContainerNew = document.getElementById('scene-container-subpage');
            sceneContainerNew.style.opacity = 1;
        });
    }, 500);
};

// swap scenes for home button
function swapSceneHome() {
    var sceneContainerOld = document.getElementById('scene-container-subpage');
    sceneContainerOld.style.opacity = 0;
    setTimeout(function() {
        var tempContainer = document.getElementById('template-container');
        tempContainer.setAttribute("template", "src: scenes/home.html");
    }, 500);
};

// check if element is loaded (used for content sections)
function waitForElement(id, callback){
    var poops = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(poops);
            callback();
        }
    }, 100);
};

// Fade out and remove element function
function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.style.display = "none";
    }, speed);
};