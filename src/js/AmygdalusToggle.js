
class AmygdalusToggle extends HTMLElement {
  constructor () {
    super()
    this._selected = false
  }

  static get observedAttributes() {
    return [
      "selected"
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    
  }

  connectedCallback() {

  }

  get selected() {
    return this._selected
  }
  set selected(value) {
    if (value === true) {
      this._selected = true
      this.setAttribute('selected', '')
    }
    else if (value === false) {
      this._selected = false
      this.removeAttribute('selected')
    }
    else {

    }
  }

  _render() {

  }
}