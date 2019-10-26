import React from 'react';
import SingleInputWithButton from './SingleInputWithButton';

var shift_query = async function(str)
{
  const response = await fetch(`/api/` + str);
  console.log(response);
  return response;
  
  let string_response = JSON.parse(response);

  console.log(string_response);

  return string_response.shift;
}

export default class ShiftGetter extends React.Component {
  constructor(props)
  {
    super(props);
    this.string = "asd";
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <SingleInputWithButton
          buttonLabel="Get shift"
          placeholder="Key"
          onSubmit={value => shift_query(value).then( res =>
            {
              console.log(res);
              this.string = res;
              onSubmit(this.string)
            }
          )}
        ></SingleInputWithButton>
      </div>
    );
  }
}