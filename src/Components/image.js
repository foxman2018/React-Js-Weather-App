import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="image" style= {{backgroundImage: `url(./${this.props.image}.png)`}}>
      </div>
    );
  }
}

export default Image;
