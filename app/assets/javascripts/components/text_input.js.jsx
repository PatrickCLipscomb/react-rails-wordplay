"use strict";

class TextInput extends React.Component {
  constructor(props) {
    super()
    this._bind()
  }

  _bind(...methods) {
      methods.forEach((method) => this[method] = this[method].bind(this));
  }

  render() {
    return(
      <input type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange} />
    )
  }
}
