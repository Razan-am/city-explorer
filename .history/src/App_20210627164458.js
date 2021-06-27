import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cityName:'',
      latitude:'',
      longitude:'',
    }
  }
  handlerData= (e)=>{
    this.setState({
      cityName:e.target.value,
    })
  }
  handlerSubmit =async (e)=>{
    e.preventDefault()
    let axiosResponed = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.0a80fd547a3c1e8574e39921b81514c5&q=${this.state.cityName}&format=json`)
    this.setState({
      cityName:axiosResponed.data.cityName,
      latitude:axiosResponed.data.lat,
      longitude:axiosResponed.data.lon,
    })
    console.log(axiosResponed.data[0])
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <input type='text' placeholder='City Name' onChange={(e)=>{this.handlerData(e)}}/>
          <button>Explorer!</button>
        </form>
        <h1>{this.state.cityName}</h1>
        <h1>{this.state.latitude}</h1>
        <h1>{this.state.longitude}</h1>
      </div>
    )
  }
}

export default App;
