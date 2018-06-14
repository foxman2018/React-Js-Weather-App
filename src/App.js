import React, { Component } from 'react';
import Titles from './Components/titles';
import Form from './Components/form';
import Weather from './Components/weather';
import Image from './Components/image';
import './App.css';

const API_KEY = "bb416c77b3b4338b50101f962da130ea";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    lat: undefined,
    long: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    date: undefined,
    image: 'default',
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const weather = data.weather[0].description;
    const today = data.dt;
    console.log(weather);

    if (city && country) {
      this.setState({
        temperature: data.main.temp.toFixed(0),
        city: data.name,
        lat: data.coord.lat,
        long: data.coord.lon,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        date: new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(today),
        image: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        lat: undefined,
        long: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        date: undefined,
        image: 'default',
        error: 'Please enter a Location'
      });
    }
  }

  render() {
    return (
      <div className="App">

        <Image
          image={this.state.image}
        />

        <div className="container-fluid">

          <div className="row titles">
              <Titles />
          </div>

          <div className="col-md-4 align-text-bottom details">
            <Weather
              temperature={this.state.temperature}
              lat={this.state.lat}
              long={this.state.long}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              date={this.state.date}
              error={this.state.error}
            />
          </div>

          <div className="container-fluid form">
            <div className="row">
              <div className="col-md-12 align-text-bottom">
                <Form getWeather={this.getWeather}/>
              </div>
            </div>
        </div>

        </div>


      </div>
    );
  }
}

export default App;
