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

                onCustomWidgetAfterUpdate(changedProperties) {
			if ("code" in changedProperties) {
				this.getElementsByID("chc").innerHTML = changedProperties["code"];
			}
		    }
	}

	customElements.define("sac-htmlcontainer", HTMLContainer);
})();