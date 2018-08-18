import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class Weather extends Component {

  state = {
    value: ""
  }


  inputhandler = (e) =>{ 
    this.setState({value : e.target.value}); 
  }

  getWeatherForecast = (e, city) => {
   e.preventDefault(); 
   this.props.store.getForecastFlow(this.state.value);
    
  }

  render() {
    return (
      <div className="weatherContainer">
     
          <div className="header">
            <p>Check the weather on any city</p>
            <form onSubmit={this.getWeatherForecast}>
              <div className="formControl">
                <input type="text" name="city" onChange={this.inputhandler} placeholder="Paris" />
              </div>
              <input type="submit" name="submit" value="Check!"  />
            </form>
            
          </div>
         <div>
          {
            this.props.store.forecastInfo.location != null &&
            <div className="container">
                <div className="containerHeader">
                <h4>{this.props.store.forecastInfo.location.country}</h4>
                  <h2>{this.props.store.forecastInfo.location.name} <br />{this.props.store.forecastInfo.location.region}</h2>
                </div>
                <div className="content">
                  <div className="box">
                    <img alt="Weather Icon" src={this.props.store.forecastInfo.current.condition.icon} />
                  </div>
                  <div className="box">
                    <p>{this.props.store.forecastInfo.current.condition.text}</p>
                  </div>
                  <div className="box">
                    <p>{this.props.store.forecastInfo.current.feelslike_c}&#8451;</p>
                  </div>
              
                </div>
            </div>
            
            
          }
          </div>
      </div>
    );
  }
}

export default inject("store")(observer(Weather));