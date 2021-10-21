(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
        <div id="chc"></div>
	`;

	class HTMLContainer extends HTMLElement {
		constructor() {
			super(); 
			let HC = this.attachShadow({mode: "open"});
			HC.appendChild(template.content.cloneNode(true));
			this.addEventListener("load", event => {
				var event = new Event("onInitialization");
				this.dispatchEvent(event);
			});
		}
	}

	customElements.define("alfred-wang-sac-htmlcontainer", HTMLContainer);
})();