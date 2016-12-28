'use strict';

class Main extends React.Component {
  constructor(props) {
    super()
    this._bind('setGenericState', 'decideCurrentIpsum', 'removeMultiWords')
    this.state = {
      ipsums: props.data[0],
      genericState: false,
      egoIpsum: false,
      activeIpsum: false,
      currentIpsum: "",
      genericIpsum: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.setGenericState();
    this.decideCurrentIpsum();
  }

  decideCurrentIpsum() {
    if (this.state.activeIpsum) {
      this.setState({currentIpsum: this.state.egoIpsum})
      console.log('hello')
    } else {
      this.setState({currentIpsum: this.state.genericIpsum})
      console.log('hello2')
    }
    console.log(this.state.currentIpsum);
  }

  setGenericState() {
    var initialGenericState = {
      theme: "Ego Ipsum",
      motto: "Vainglorious filler text"
    }
    this.setState({genericState: initialGenericState})
  }

  removeMultiWords(theme) {
    var soloTheme;
    if (theme) {
      soloTheme = theme.split(" ")[0]
    } else {
      soloTheme = theme
    }
    return soloTheme;
  }

  render() {
    var themeContent = this.state.activeIpsum ? this.state.activeIpsum.theme : this.state.genericState.theme
    var themeImage = this.removeMultiWords(themeContent);
    var mottoContent = this.state.activeIpsum ? this.state.activeIpsum.motto : this.state.genericState.motto
    return(
        <div className="container textSetter">
          <div className="hero">
            <div id={themeImage}></div>
            <img  src="" />
          </div>
          <h1 id='nameDisplay'>{themeContent}</h1>
          <h2 id="themeDescription">{mottoContent}</h2>
          <h3 id="motto"><em>"Ex rabidus populus verbis"</em></h3>
          <div className="flex-container">
            <IpsumOutput currentIpsum={this.state.currentIpsum} />
          </div>
        </div>
    )
  }
}
