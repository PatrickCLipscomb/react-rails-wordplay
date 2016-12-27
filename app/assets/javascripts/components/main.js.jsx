'use strict';

class Main extends React.Component {
  constructor(props) {
    super()
    this._bind('setGenericState')
    this.state = {
      genericState: null;
    }
  }
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    onComponentMount() {
      this.setGenericState();
    }

    setGenericState() {
      var initialGenericState = {
        theme: "Ego Ipsum",
        motto: "Vainglorious filler text",
        image: "genericImg"
      }
      this.setState({genericState: initialGenericState})
    }

    copyToClipboard(textContent) => {
      var textField = document.createElement('textarea')
      textField.innerText = textContent
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }

  render() {
    return(
      <body>
        <div class="container textSetter">
          <div class="hero">
            <img src="img/egokitty.png">
          </div>
          <h1 id='nameDisplay'>Ego Ipsum</h1>
          <h2 id="themeDescription">Vainglorious filler text</h2>
          <h3 id="motto"><em>"Ex rabidus populus verbis"</em></h3>
          <div class="flex-container">
            <IpsumOutput />
          </div>
        </div>
      </body>
    )
  }
}
