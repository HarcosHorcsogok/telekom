import React from 'react';
import InputText from './InputText';

export default class SingleInputWithButton extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  render() {
    const { buttonLabel, placeholder, onSubmit } = this.props;
    return (
      <div>
        <InputText
          ref={inputRef => this.inputRef = inputRef}
          placeholder={placeholder}
        ></InputText>
        <button
          onClick={() => onSubmit(this.inputRef.getValue())}
        >
          { buttonLabel }
        </button>
      </div>
    )
  }
}
