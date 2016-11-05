;(function(window, undefined){
	window.tools = {
		alertMessage: function(message){
			alert(message);
		},
		warning: function(warning, id){
			window.tools.alertMassage(warning);
			if(id){
				var elem = document.getElementById(id);
				elem.value = warning;
				elem.innerHTML = warning;
			}
		},
	};
})(window);