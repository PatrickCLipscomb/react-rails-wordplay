'use strict';

class IpsumOutput extends React.Component {
  constructor(props) {
    super()
    this._bind('copyToClipboard', 'toggleTags');
    this.state = {
      openTag: "",
      closeTag: "",
      tagText: "add"
    }
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  copyToClipboard() {
    var textField = document.createElement('textarea')
    textField.innerText = this.state.openTag + this.props.currentIpsum + this.state.closeTag
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  toggleTags() {
    this.state.tagText === "add" ? this.setState({tagText: "remove", openTag: "<p>", closeTag: "</p>"}) : this.setState({tagText: "add", openTag: "", closeTag: ""})
  }

  render() {
    return(
      <div className="flex-item" id="ipsumOUTPUT">
        <div className="header-background">
          <h3 className="column-title">Ipsum</h3>
        </div>
        <p id="ipsumOutput">{this.state.openTag}{this.props.currentIpsum}{this.state.closeTag}</p><button id="copyButton" onClick={this.copyToClipboard}>Copy</button>
        <span id="addTags" onClick={this.toggleTags}>{this.state.tagText} &lt;p&gt;&lt;/p&gt; tags</span>
      </div>
    )
  }
}
