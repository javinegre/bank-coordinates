import React from 'react';

class CoordsDisplay extends React.Component {
  constructor (props) {
    super(props);
  }

  getDigit (idx) {
    return this.props.inputCode.substr(idx, 1);
  }

  getSecretClassName () {
    let len = this.props.inputCode.length;

    if ( len > 5 ) {
      len = 5;
    }

    return `coords-display-secret coords-display-secret-${len}`;
  }

  render () {
    return (
      <div className="coords-display">
        <div className="coords-display-prompt" onClick={this.props.focusInput}>
          <div className={this.getSecretClassName()}></div>
          <div className="coords-display-digit">{this.getDigit(5)}</div>
          <div className="coords-display-digit">{this.getDigit(6)}</div>
        </div>
        <button className="coords-display-btn" onClick={this.props.clearCode.bind(this)} disabled={!this.props.inputCode.length}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="none" stroke="#0050B4" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="M1.5 1.5l9 9M1.5 10.5l9-9"/></svg>
        </button>
      </div>
    );
  }
}

export default CoordsDisplay;
