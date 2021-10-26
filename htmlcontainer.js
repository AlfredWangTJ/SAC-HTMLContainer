(function () {
  let template = document.createElement("template");
  template.innerHTML = `
	`;

  class HTMLContainer extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._dom;
      this._htmlcode = "<div></div>";
    }

    get code() {
      return this._htmlcode;
    }

    set code(val) {
      this._htmlcode = val;
    }

    onCustomWidgetAfterUpdate(oChangedProperties) {
      if ("code" in oChangedProperties) {
        this.changeHTML(oChangedProperties["code"]);
      }
    }

    changeHTML(val) {
      if (this._dom) {
        this._dom.parentNode.removeChild(this._dom);
      }

      this._dom = document.createElement("div");
      this._dom.innerHTML = val;
      this._shadowRoot.appendChild(this._dom);
    }
  }

  customElements.define("sac-htmlcontainer", HTMLContainer);
})();
