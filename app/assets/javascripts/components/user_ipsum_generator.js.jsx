"use strict";

class UserIpsumGenerator extends React.Component {
  constructor(props) {
    super(props)
    this._bind('themeList')
    console.log(this.props.ipsums)
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  themeList() {
    var themes = this.props.ipsums.map((ipsum) => {
      return <option key={ipsum.id + 1000} value={ipsum.theme}>{ipsum.theme}</option>
    });
    return themes;
  }

  render() {
    var userIpsumThemes = this.themeList()
    return(
      <div className="flex-item">
        <div>
          <div className="header-background">
            <h3 className="column-title">Create Your Own</h3>
          </div>
          <form>
            <label htmlFor="userLoaderPicker">Load yer generator</label>
            <select name="userLoaderPicker" id="userLoaderPicker">
              <option selected disabled>Load yer Ipsum</option>
              {userIpsumThemes}
            </select>
            <button type="submit">Load It</button>
            <button type="button">Delete generator</button>
          </form>
          <br />
          <form>
            <label htmlFor="wordAdd">Type here to add to your Ipsum generator!</label>
            <input type="text" name="wordAdd" id="wordAdd" />
            <button type="submit">Add Word or Phrase</button>
            <button type="reset" value="Reset">Clear</button>
          </form>
          <div className={this.props.activeIpsum.theme} id="stagingArea">
            <ul>
            </ul>
          </div>
          <form>
            <label htmlFor="bankDescription">Add a description</label>
            <input type="text" name="bankDescription" />
            <br />
            <label htmlFor="bankThemePic">Add a theme image</label>
            <input placeholder="http://yourURL.com/img.jpg" type="text" name="bankThemePic" />
            <br />
            <label htmlFor="bankThemeColor">Add a theme rgb-color</label>
            <input placeholder="51, 153, 255" type="text" name="bankThemeColor" />
            <br />
            <label htmlFor="nameBank">Choose a name</label>
            <input type="text" name="nameBank" id="nameBank" />
            <button type="submit">Save My Ipsum!</button>
            <button id="goBack" type="button">Go back</button>
          </form>
        </div>
      </div>
    )
  }
}
