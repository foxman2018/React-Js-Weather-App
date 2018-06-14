import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        {this.props.city && <p>Location: {this.props.city} </p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature} </p>}
        {this.props.description && <p>Conditions: {this.props.description} </p>}
        {this.props.date && <p>Local Time: {this.props.date} </p>}
        {this.props.lat && <p>Lat: {this.props.lat} </p>}
        {this.props.long && <p>Long: {this.props.long} </p>}
        {this.props.error && <p> {this.props.error} </p>}
      </div>
    );
  }
}

export default Weather;
