(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
        <div id="chc"></div>
	`;

	class HTMLContainer extends HTMLElement {
		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
		}

	}

	customElements.define("sac-htmlcontainer", HTMLContainer);
})();