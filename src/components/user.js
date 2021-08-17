import React, { Component } from 'react';
export class users extends Component {
  state = {
    name: 'deepthi'
  };
  changeNameOne = () => {
    this.setState({
      name: 'deepu'
    });
  };
  changeNameTwoagain = () => {
    this.setState({
      name: newName
    });
  };
  changeNameFromInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Manage user</h2>
        <p>
          Nmae:
          <input type="text" onChange={this.changeNameFromInput} />
        </p>
        <button onClick={this.changeNameOne}>change name one</button>
        <button onClick={() => this.changeNameTwo('g venkata deepthi')}>
          change name two
        </button>
        <button
          onClick={this.changeNameTwo.bind(
            this.changeNameOne,
            'trainer jhon smith'
          )}
        >
          change name two again
        </button>
      </div>
    );
  }
}
export default App;