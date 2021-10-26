(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <form id="form">
        <fieldset>
            <legend>Custom HTML Code</legend>
                <textarea id="hcode" rows="8" cols="25"></textarea>
        </fieldset>
    </form>
              `;

  class HTMLContainerBuilder extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot
        .getElementById("form")
        .addEventListener("submit", this._submit.bind(this));
      this._htmlcode = "<div></div>";
    }

    _submit(dom) {
      dom.preventDefault();
      this.dispatchEvent(
        new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              code: this.code,
            },
          },
        })
      );
    }

    get code() {
      return this._shadowRoot.getElementById("hcode").value;
    }

    set code(val) {
      this._shadowRoot.getElementById("hcode").value = val;
    }
  }

  customElements.define("sac-htmlcontainer-builder", HTMLContainerBuilder);
})();
