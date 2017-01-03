"use strict";

class UserIpsumGenerator extends React.Component {
  constructor(props) {
    super()
    this._bind('themeList', 'creatingIpsum', 'setIpsum', 'getPhrases', 'addingPhrase', 'addPhrase', 'removePhrase', 'initNewIpsum', 'saveIpsum', "goBack", "createNewIpsum", 'updateOldIpsum', 'makeItRED', 'removeTheRed')
    this.state = {
      ipsum: {theme: "", motto: "", phrases: [], color: "", image: "", accent: ""},
      phraseToAdd: ""
    }
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

  setIpsum(event) {
    var selectedIpsum = event.currentTarget.value;
    this.props.ipsums.forEach(function(ipsum) {
      if (ipsum.theme === selectedIpsum) {
        selectedIpsum = ipsum;
      }
    })
    this.setState({ipsum: selectedIpsum});
    this.props.changeHeadImage(selectedIpsum.theme)
  }

  creatingIpsum(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.ipsum[field] = value;
    this.setState({ipsum: this.state.ipsum});
  }


  getPhrases() {
    var ipsum = this.state.ipsum;
    var phrases = this.state.ipsum.phrases.map((phrase) => {
      if (phrase.length > 0) {
        return <li className={ipsum.theme + "LiIcon"} onClick={this.removePhrase} id={phrase}>{phrase}</li>
      }
    });
    return phrases;
  }

  addPhrase(event) {
    event.preventDefault();
    this.state.ipsum.phrases.unshift(this.state.phraseToAdd)
    this.setState({ipsum: this.state.ipsum, phraseToAdd: ""})
  }

  addingPhrase(event) {
    var value = event.target.value
    this.setState({phraseToAdd: value})
  }

  removePhrase(event) {
    var phraseIndex = this.state.ipsum.phrases.indexOf(event.target.id)
    this.state.ipsum.phrases.splice(phraseIndex, 1)
    this.setState({ipsum: this.state.ipsum})
  }

  initNewIpsum(event) {
    event.preventDefault();
    var newIpsum = {theme: "", motto: "", phrases: [""], color: "", image: "", accent: ""}
    this.setState({ipsum: newIpsum})
    document.getElementById('userLoaderPicker').value=0;
  }

  saveIpsum(event) {
    event.preventDefault();
    if (this.state.ipsum.phrases.length < 4) {
      this.makeItRED('phraseLabel');
      return
    } else if (this.state.ipsum.motto.length < 1) {
      this.makeItRED('mottoLabel');
      this.removeTheRed('phraseLabel');
      return
    } else if (this.state.ipsum.theme.length < 1) {
      this.makeItRED('themeLabel');
      this.removeTheRed('phraseLabel');
      this.removeTheRed('mottoLabel');
      return
    }
    this.removeTheRed('phraseLabel');
    this.removeTheRed('mottoLabel');
    this.removeTheRed('themeLabel');
    var data = this.state.ipsum
    this.props.ipsums.includes(data) ? this.updateOldIpsum(data) : this.createNewIpsum(data);
  }

  removeTheRed(targetID) {
    $('#' + targetID).removeAttr('class');
  }

  makeItRED(targetID) {
    $('#' + targetID).attr('class', 'makeItRED');
  }

  createNewIpsum(data) {
    $.ajax({
        method: 'POST',
        url: "/ipsums",
        dataType: 'JSON',
        data: { ipsum: data },
        success: ( (newIpsum) => {
            this.setState({ ipsum: {theme: "", motto: "", phrases: [""], color: "", image: "", accent: ""} });
            this.props.handleIpsumCreation(newIpsum);
        })
    });
  }

  updateOldIpsum(data) {
    var id = "ipsums/" + data.id.toString()
    $.ajax({
        method: 'PATCH',
        url: id,
        dataType: 'JSON',
        data: { ipsum: data },
        success: ( (updatedIpsum) => {
            this.setState({ ipsum: {theme: "", motto: "", phrases: [""], color: "", image: "", accent: ""} });
            this.props.handleIpsumUpdate(data, updatedIpsum);
        })
    });
  }

  goBack(event) {
    event.preventDefault();
    this.props.goBack();
  }

  render() {
    var userIpsumThemes = this.themeList();
    var ipsumPhrases = this.getPhrases();
    return(
      <div className="flex-item">
        <div>
          <div className="header-background" style={{background: this.state.ipsum.color}}>
            <h3 className="column-title" style={{color: this.state.ipsum.accent}}>Create Your Own</h3>
          </div>
          <form>
            <label htmlFor="userLoaderPicker">Load yer generator</label>
            <select name="userLoaderPicker" id="userLoaderPicker" onChange={this.setIpsum}>
              <option selected disabled>Load yer Ipsum</option>
              {userIpsumThemes}
            </select>
            <button type="button" className="generatorButton" style={{backgroundColor: this.state.ipsum.accent}} onClick={this.initNewIpsum}>New Ipsum Generator</button>
          </form>
          <br />
          <form>
            <label htmlFor="phrases" id="phraseLabel">Type here to add to your Ipsum generator!</label>
            <TextInput value={this.state.phraseToAdd} onChange={this.addingPhrase} type="text" name="phrases" id="phrases" />
            <button style={{backgroundColor: this.state.ipsum.accent}} className="generatorButton" onClick={this.addPhrase}>Add Word or Phrase</button>
          </form>
          <div className={this.props.activeIpsum.theme} id="stagingArea">
            <ul>
              {ipsumPhrases}
            </ul>
          </div>
          <form>
            <label htmlFor="motto" id="mottoLabel">Add a Motto</label>
            <TextInput value={this.state.ipsum.motto} onChange={this.creatingIpsum} type="text" name="motto" />
            <br />
            <label htmlFor="image">Add a theme image</label>
            <TextInput value={this.state.ipsum.image} onChange={this.creatingIpsum} placeholder="http://yourURL.com/img.jpg" type="text" name="image" />
            <br />
            <label htmlFor="color">Add a theme rgb-color</label>
            <TextInput value={this.state.ipsum.color} onChange={this.creatingIpsum} placeholder="rgb(51, 153, 255)" type="text" name="color" />
            <br />
            <label htmlFor="accent">Add a accent rgb-color</label>
            <TextInput value={this.state.ipsum.accent} onChange={this.creatingIpsum} placeholder="rgb(55, 140, 260)" type="text" name="accent" />
            <br />
            <label htmlFor="theme" id="themeLabel">Choose a name</label>
            <TextInput value={this.state.ipsum.theme} onChange={this.creatingIpsum} type="text" name="theme" />
            <button type="submit" style={{backgroundColor: this.state.ipsum.accent}} className="generatorButton" onClick={this.saveIpsum}>Save My Ipsum!</button>
            <button id="goBack" type="button" onClick={this.goBack} style={{backgroundColor: this.state.ipsum.accent}}>Go back</button>
          </form>
        </div>
      </div>
    )
  }
}
