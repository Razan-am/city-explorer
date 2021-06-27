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
    let axiosResponed = await axios.get(`https://eu1.locationiq.com/v1/search.php?`)
    this.setState({
      cityName:axiosResponed.data.cityName,
      latitude:axiosResponed.data.latitude,
      longitude:axiosResponed.data.longitude,
    })
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