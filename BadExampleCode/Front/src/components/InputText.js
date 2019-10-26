import React from 'react';
export default class InputText extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  updateState(event) {
    this.setState({
      value: event.target.value,
    });
  }

  getValue() {
    return this.state.value;
  }

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => this.updateState(e)}
      ></input>
    );
  }
}
