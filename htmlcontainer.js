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
		}

                onCustomWidgetAfterUpdate(oChangedProperties) {
			if ("code" in changedProperties) {
				this.getElementsByID("chc").innerHTML = changedProperties["code"];
			}
		    }
	}
	
	customElements.define("sac-htmlcontainer", HTMLContainer);
})();