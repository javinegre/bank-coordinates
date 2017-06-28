import React from 'react';
import codeChecker from '../helpers/codeChecker';
import CoordsDisplay from './CoordsDisplay';

const initialState = {
  inputCode: '',
  result: ''
};

class Coords extends React.Component {

  constructor (props) {
    super(props);
    this.state = initialState;
  }

  focusInput () {
    this.$input.focus();
  }

  handleChange (ev) {
    const value = ev.target.value;

    this.setState({ inputCode: value });

    if ( value.length === 7 ) {
      const result = codeChecker(value.substr(0, 5), value.substr(5, 2));
      this.setState({ result: result });
      this.$input.blur();
    }
  }

  clearCode () {
    this.setState(initialState);
    this.$input.focus();
  }

  render () {
    return (
      <div className="coords">
        <input type="tel"
          maxLength="7"
          value={this.state.inputCode}
          onChange={this.handleChange.bind(this)}
          ref={el => {this.$input = el}} />
        <CoordsDisplay
          inputCode={this.state.inputCode}
          clearCode={this.clearCode.bind(this)}
          focusInput={this.focusInput.bind(this)} />
        <div className="coords-result">{this.state.result}</div>
      </div>
    )
  }
}

export default Coords;
