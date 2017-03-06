/*eslint no-unused-vars: "off"*/
/*eslint no-console: "off"*/
class AmygdalusSwitch extends HTMLElement {
  constructor () {
    super()
    this._selected = false
    console.group(`created${this.id ? `: #${this.id}` : ''}`)
    console.dir(this)
    console.groupEnd()
  }

  static get observedAttributes() {
    return [
      'selected'
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.group(`attribute value change`)
    console.dir(this)
    console.log(`${name}: \`${oldValue}\` → \`${newValue}\``)
    console.groupEnd()

    switch (name) {
      case 'selected':
        this._selected = true
        this.setAttribute('aria-pressed', 'true')
        break
    }
  }

  connectedCallback() {
    this.setAttribute('role', 'button')
    this.setAttribute('aria-pressed', `${this._selected}`)
    this.tabIndex = 0
    console.group(`connected${this.id ? `: #${this.id}` : ''}`)
    console.dir(this)
    console.groupEnd()
  }

  disconnectedCallback() {
    this.tabIndex = -1
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