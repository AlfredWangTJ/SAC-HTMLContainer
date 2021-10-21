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
			this.addEventListener("changeCode", changeCode(this.HC.getCode()));
		}

                changeCode(code){
                        this.HC.getElementById("chc").innerHTML = code;
                }

	}


	customElements.define("alfred-wang-sac-htmlcontainer", HTMLContainer);
})();