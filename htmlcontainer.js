(function() { 
/*	let template = document.createElement("template");
	template.innerHTML = `
        
	`;
*/
	class HTMLContainer extends HTMLElement {
		constructor() {
			super(); 
			let HC = this.createElement("DIV");
//			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("load", event => {
				var event = new Event("onInitialization");
				this.dispatchEvent(event);
			});
                        this.HC.id = "hcode";
		}
	}

	customElements.define("alfred-wang-sac-htmlcontainer", HTMLContainer);
})();