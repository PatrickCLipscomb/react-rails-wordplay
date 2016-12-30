'use strict';

class IpsumOutput extends React.Component {
  constructor(props) {
    super()
    this._bind('copyToClipboard', 'toggleTags', 'styleIpsumOutput');
    this.state = {
      openTag: "",
      closeTag: "",
      tagText: "add"
    }
  }

  componentDidUpdate() {
    console.log(this.props.activeIpsum);
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

  styleIpsumOutput() {
    var ipsumJSX;
    if (Array.isArray(this.props.currentIpsum)) {
      ipsumJSX = this.props.currentIpsum.map((ipsumOutput) => {
        return <p className="ipsumOutput">{this.state.openTag}{ipsumOutput}{this.state.closeTag}</p>
      })
    } else if (this.props.currentIpsum.split(" ").length < 9) {
      ipsumJSX = <h3 id="singleWordOutput" style={{color: this.props.activeIpsum.color}}>{this.props.currentIpsum}</h3>
      $('#addTags').hide();
    } else {
      ipsumJSX = <p id="ipsumOutput">{this.state.openTag}{this.props.currentIpsum}{this.state.closeTag}</p>
      $('#addTags').show();
    }
    return ipsumJSX
  }

  render() {
    var ipsumOutputJSX = this.styleIpsumOutput();
    return(
      <div className="flex-item" id="ipsumOUTPUT">
        <div className="header-background" style={{background: this.props.activeIpsum.color}}>
          <h3 className="column-title" style={{color: this.props.activeIpsum.accent}}>Ipsum</h3>
        </div>
        {ipsumOutputJSX}
        <button id="copyButton" onClick={this.copyToClipboard} style={{backgroundColor: this.props.activeIpsum.accent}}>Copy</button>
        <span id="addTags" onClick={this.toggleTags}>{this.state.tagText} &lt;p&gt;&lt;/p&gt; tags</span>
      </div>
    )
  }
}
