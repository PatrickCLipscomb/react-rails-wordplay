"use strict";

class IpsumGenerator extends React.Component {
  constructor(props) {
    super()
    this._bind('listThemes', 'changeTheme', 'getIpsum');
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  listThemes() {
    var themes = this.props.ipsums.map((ipsum) => {
      return <option key={ipsum.id} value={ipsum.theme}>{ipsum.theme}</option>
    })
    return themes;
  }

  changeTheme(event) {
    var themeName = event.currentTarget.value;
    this.props.changeTheme(themeName);
  }

  getIpsum(event) {
    event.preventDefault();
    this.props.getIpsum();
  }

  render() {
    var ipsumThemes = this.listThemes();
    return(
      <div className="flex-item">
        <div>
          <div className="header-background" style={{background: this.props.activeIpsum.color}}>
            <h3 className="column-title" style={{color: this.props.activeIpsum.accent}}>Choose A Theme</h3>
          </div>
          <div className="generatorDIV">
            <form id="ipsumForm">
              <label htmlFor="theme">Themes:</label>
              <select onChange={this.changeTheme} name="theme">
                <option value="Generic">Ego Ipsum</option>
                {ipsumThemes}
              </select>
              <label htmlFor="oneWord" >One Word/Phrase:</label>
              <button id="oneWord" type="button" onClick={this.props.goSolo} style={{backgroundColor: this.props.activeIpsum.accent}}>Go solo.</button>
              <label htmlFor="paragraphs">Paragraphs:</label>
              <input type="range" min="1" max="21" id="paragraphs" name="paragraphs" value="1"></input><h5 id="rangeValue">1</h5>
              <button type="submit" id="importantButton" onClick={this.getIpsum} style={{backgroundColor: this.props.activeIpsum.accent}}>Get Ipsum!</button>
            </form>
          </div>
          <div className='generatorDIV float-right'>
            <p>
              Don't bother with broken Latin babble when you can get filler text inspired by some of the best purveyors of spew out there in the game right now.
            </p>
            <p>
              Dont care to stroke anyones ego, but your own?  Lets make this about YOU. Check out <a href="#" id="makeYourOwn">Make Your Own Ipsum Generator</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
