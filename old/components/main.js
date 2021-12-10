// Change scenes function.
AFRAME.registerComponent('clickable',{
	init:function(){
		this.el.addEventListener('click',function(){
      disposeMats();
			var dataNewScene = this.dataset.newscene;
			var tempContainer = document.getElementById('template-container');
			var backScene = tempContainer.getAttribute("template").src;
			tempContainer.setAttribute("template", dataNewScene);
			tempContainer.setAttribute("data-back", "src: " + backScene);
      var sceneName = tempContainer.getAttribute('template').src;
		});
	}
});

// Disable aframe inspector.
AFRAME.registerComponent('disable-inspector', {
    dependencies: ['inspector'],
    init: function () {
      this.el.components.inspector.remove();
    }
  });

// Home button functionality.
AFRAME.registerComponent("buttonhome", {
    init:function() {
      this.el.addEventListener('click',function(){
        var tempContainer = document.getElementById("template-container");
        var homescene = "src: scenes/select-res-hall-cardboard.html";
        tempContainer.setAttribute("template", homescene);
        setRaycasterLink();
      });
    }
  });