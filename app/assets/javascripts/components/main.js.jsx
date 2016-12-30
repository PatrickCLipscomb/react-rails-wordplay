'use strict';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this._bind('setGenericState', 'decideCurrentIpsum', 'removeMultiWords', 'changeTheme', 'getIpsum', 'goSolo', 'capitalize', 'punctuation', 'fillerWord', 'renderCreatorJSX', 'renderStandardJSX', 'makeIpsum', 'changeHeadImage')
    this.state = {
      ipsums: props.data[0],
      genericState: false,
      egoIpsum: false,
      activeIpsum: false,
      currentIpsum: "",
      genericIpsum: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      openingIpsum: "What are you waiting for? Go get some Ipsum.",
      showStandard: true
    }
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.setGenericState();
    this.decideCurrentIpsum();
  }

  changeHeadImage(themeName) {
    
  }

  decideCurrentIpsum() {
    if (this.state.activeIpsum) {
      this.setState({currentIpsum: this.state.currentIpsum})
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

  makeIpsum() {
    this.changeTheme('Generic');
    this.setState({showStandard: false})
  }

  changeTheme(themeValue) {
    var currentIpsumString;
    var fullIpsum;
    this.state.ipsums.forEach(function(ipsum) {
      if (ipsum.theme === themeValue) {
        fullIpsum = ipsum;
      }
    });
    if (fullIpsum) {
      currentIpsumString = this.state.openingIpsum;
    }
    if (themeValue === 'Generic') {
      currentIpsumString = this.state.genericIpsum
    }
    currentIpsumString === this.state.genericIpsum ? this.setState({ currentIpsum: currentIpsumString, activeIpsum: false}) : this.setState({ currentIpsum: currentIpsumString, activeIpsum: fullIpsum });
  }

  getIpsum(paraNum) {
    var paragraphNumber = parseInt(paraNum);
    var ipsumParagraphArray = [];
    var phrases = this.state.activeIpsum.phrases
    var _this = this;
    for (var elmo = 0; elmo < paragraphNumber; elmo++) {
      var ipsumStringArray = []
      for (var i = 0; i < phrases.length; i++) {
        ipsumStringArray.push(phrases[Math.floor(Math.random() * phrases.length)] + ' ');
        if (Math.floor(Math.random() * 100) < 35) {
          ipsumStringArray.push(_this.fillerWord());
          ipsumStringArray.push(phrases[Math.floor(Math.random() * phrases.length)] + ' ');
        }
        if (ipsumStringArray.length > 3 && Math.floor(Math.random() * 100) < 22) {
          ipsumStringArray.push(phrases[Math.floor(Math.random() * phrases.length)]);
          ipsumStringArray.push(_this.punctuation())
          ipsumStringArray.push(_this.capitalize(phrases[Math.floor(Math.random() * phrases.length)]) + ' ');
        }
      }
      ipsumStringArray.push(phrases[Math.floor(Math.random() * phrases.length)]);
      ipsumStringArray.push(_this.punctuation().trim())
      var firstWord = _this.capitalize(ipsumStringArray.shift());
      ipsumStringArray.unshift(firstWord);
      let ipsumString = ipsumStringArray.join("");
      ipsumParagraphArray.push(ipsumString)
    }
    this.setState({currentIpsum: ipsumParagraphArray});
  }

  goSolo() {
    var ipsumString = this.state.activeIpsum.phrases[this.randomInRange()];
    this.setState({currentIpsum: ipsumString});
  }

  randomInRange() {
    return Math.floor(Math.random() * this.state.activeIpsum.phrases.length)
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  punctuation() {
    var puncArray = ['. ', '! ', '? ', '. '];
    return puncArray[Math.floor(Math.random() * 4)];
  }

  fillerWord() {
    var theFiller;
    var fillerWords = ['and', 'or', 'while', 'then', 'and', 'where']
    if (Math.floor(Math.random() * 100) < 40) {
      theFiller = fillerWords[Math.floor(Math.random() * 6)]
      theFiller = theFiller.concat(', ');
    } else {
      theFiller = fillerWords[Math.floor(Math.random() * 6)] + ' ';
    }
    return theFiller;
  }



  renderStandardJSX() {
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
            <IpsumGenerator ipsums={this.state.ipsums} changeTheme={this.changeTheme} activeIpsum={this.state.activeIpsum} getIpsum={this.getIpsum} goSolo={this.goSolo} makeIpsum={this.makeIpsum} />
            <IpsumOutput currentIpsum={this.state.currentIpsum} activeIpsum={this.state.activeIpsum} />
          </div>
        </div>
    )
  }

  renderCreatorJSX() {
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
          <UserIpsumGenerator ipsums={this.state.ipsums} activeIpsum={this.state.activeIpsum} changeHeadImage={this.changeHeadImage}/>
        </div>
      </div>
    )
  }

  render() {
    return this.state.showStandard ? this.renderStandardJSX() : this.renderCreatorJSX()
  }
}
