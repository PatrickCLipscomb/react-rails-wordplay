'use strict':

class IpsumOutput extends React.Component {
  constructor(props) {
    super()
    this._bind('copyToClipboard');
    this.state = {
      genericIpsum: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
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
      <div class="flex-item" id="ipsumOUTPUT">
        <div class="header-background">
          <h3 class="column-title">Ipsum</h3>
        </div>
        <textarea id="copyTarget" value="Text to Copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea><button id="copyButton" onClick={this.copyToClipboard(document.getElementById('copyTarget'))}>Copy</button>
        <span id="addTags">add &lt;p&gt;&lt;/p&gt; tags</span>
      </div>
    )
  }
}
