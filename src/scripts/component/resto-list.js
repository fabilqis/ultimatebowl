class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 style="padding-bottom:1em">
      <center><span class="title-content">Find Your Bowl</span></center>
    </h1>
    <div id="resto-lists" class="row"></div>
    `;
  }
}

customElements.define('resto-list', RestoList);
