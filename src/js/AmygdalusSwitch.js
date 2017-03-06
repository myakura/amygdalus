/*eslint no-unused-vars: "off"*/
/*eslint no-console: "off"*/
class AmygdalusSwitch extends HTMLElement {
  constructor () {
    super()
    this._selected = false
    console.group(`created${this.id ? `: #${this.id}` : ''}`)
    console.dir(this)
    console.groupEnd()

    const switchShadowRoot = this.attachShadow({ mode: 'open' })
    switchShadowRoot.innerHTML =
`
<link rel="stylesheet" href="/src/css/AmygdalusSwitch.css">
<div id="switch-container">
  <div id="switch-track"></div>
  <div id="switch-thumb"></div>
</div>
`
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
        if (newValue !== null) {
          this._selected = true
          this.setAttribute('aria-pressed', 'true')
        }
        else {
          // the value is null, meaning the attr is removed
          this._selected = false
          this.setAttribute('aria-pressed', 'false')
        }
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