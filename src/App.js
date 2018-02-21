import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: 'black',
      fontSize: '12',
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }

  updateColor = color => { 
    this.setState({
      color
    })
  };

  updateSize = size => {
    this.setState({
      fontSize: size
    })
  };

  updateFamily = font => {
    this.setState({
      fontFamily: font
    })
  };

  updateEditStatus = status => {
    console.log(status)
    this.setState({
      allowEdit: status
    })
  };

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={ this.updateEditStatus } />
          <ColorChanger update={ this.updateColor } allowEdit={ this.state.allowEdit } />
          <SizeChanger update={ this.updateSize } allowEdit={ this.state.allowEdit } />
          <FamilyChanger update={ this.updateFamily } allowEdit={ this.state.allowEdit } />
        </div>
        <div className="textArea">
          <TextContainer
            fontSize={ this.state.fontSize }
            fontFamily={ this.state.fontFamily }
            fontColor={ this.state.color }/>
        </div>
      </div>
    )
  }
}

export default App;
