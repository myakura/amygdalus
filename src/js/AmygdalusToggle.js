/*eslint no-unused-vars: "off"*/
/*eslint no-console: "off"*/
class AmygdalusToggle extends HTMLElement {
  constructor () {
    super()
    this.setAttribute('aria-role', 'button')
    this.setAttribute('aria-pressed', 'false')
    this._selected = false
    console.log(`created: ${this.id ? this.id : this}`)
  }

  static get observedAttributes() {
    return [
      'selected'
    ]
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
    this._selected = this.hasAttribute('selected')
    return this._selected
  }
  set selected(value) {
    if (value) {
      this._selected = true
      this.setAttribute('selected', '')
      this.setAttribute('aria-pressed', 'true')
    }
    else {
      this._selected = false
      this.removeAttribute('selected')
      this.setAttribute('aria-pressed', 'false')
    }
  }

  _render() {

  }
}