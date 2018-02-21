import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      allowEdit: props.allowEdit
    })
  }

  render() {
    return (
      <select onChange={ e => this.props.update(e.target.value) } className="dropDownContainer" disabled={ this.state.allowEdit === 'false' } >
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}