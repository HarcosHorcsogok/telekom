import React from 'react';
import SingleInputWithButton from './SingleInputWithButton';
import caesarShift from './caesar_shift'
import { Link } from 'react-router-dom';

export default class ShiftGetter extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { was_encoding : false, coded_message : ''};
  }

  render() {
    const { shift, back } = this.props;
    return (
      <div>
      <SingleInputWithButton
          buttonLabel="Encode message"
          placeholder="Message to encode"
          onSubmit={ text => 
          {
            console.log(caesarShift(text, shift));
            this.setState( 
              { 
                was_encoding : true, coded_message : caesarShift(text, shift) 
              });
          }
        }
      />
      { this.state.was_encoding && <p>Encoded message: {this.state.coded_message}</p> }
      <Link to = "/"> <button>Home</button> </Link>
      </div>
    );
  }

}