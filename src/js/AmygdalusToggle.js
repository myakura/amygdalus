/*eslint no-unused-vars: "off"*/
/*eslint no-console: "off"*/
class AmygdalusToggle extends HTMLElement {
  constructor () {
    super()
    this._selected = false
    console.log(`created: ${this.id ? this.id : this}`)
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.group(`attribute change: ${name}`)
    console.dir(this)
    console.log(`${name}: \`${oldValue}\` → \`${newValue}\``)
    console.groupEnd()
  }

  connectedCallback() {
    console.log(`connected: ${this.id ? this.id : this}`)
    console.dir(this)
  }

  get selected() {
    return this.hasAttribute('selected')
  }
  set selected(value) {
    if (value) {
      this.setAttribute('selected', '')
    }
    else {
      this.removeAttribute('selected')
    }
  }

  _render() {

  }
}