/*eslint no-unused-vars: "off"*/
/*eslint no-console: "off"*/
class AmygdalusToggle extends HTMLElement {
  constructor () {
    super()
    this._selected = false
    console.log(`created: ${this.id}`)
  }

  static get observedAttributes() {
    return [
      'selected'
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.group(`attribute change: ${name}`)
    console.dir(this)
    console.log(`${name}: \`${oldValue}\` -> \`${newValue}\``)
    console.log(`this._selected: ${this._selected}`)
    console.groupEnd()
  }

  connectedCallback() {
    console.group(`connected: ${this.id}`)
    console.dir(this)
    console.log(`this._selected: ${this._selected}`)
    console.groupEnd()
  }

  get selected() {
    return this._selected
  }
  set selected(value) {
    if (value === true) {
      this._selected = true
      this.setAttribute('selected', '')
    }
    if (value === false) {
      this._selected = false
      this.removeAttribute('selected')
    }
  }

  _render() {

  }
}