//Import React from React Package in package.json
import React, { Component } from 'react';
import './sass/global/Global.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from './components/headerComponent/header';
import FooterPage from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Form from "./components/formComponent/form";
import Weather from "./components/weatherComponent/weather";

const API_KEY = "7dfd0d20fc7f7b25682e62db16455c30";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Homepage />
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
        <FooterPage/>
      </div>
    );
  }
}

export default App;
