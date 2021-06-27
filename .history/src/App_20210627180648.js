import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      display_name:'',
      latitude:'',
      longitude:'',
      images:'',
    }
  }
  handlerData= (e)=>{
    this.setState({
      display_name:e.target.value,
    })
  }
  handlerSubmit =async (e)=>{
    e.preventDefault()
    let axiosResponed = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.0a80fd547a3c1e8574e39921b81514c5&q=${this.state.display_name}&format=json`)
    this.setState({
      display_name:axiosResponed.data[0].display_name,
      latitude:axiosResponed.data[0].lat,
      longitude:axiosResponed.data[0].lon,

    })
    console.log(axiosResponed.data)
    // console.log(mapResponed);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <input type='text' placeholder='City Name' onChange={(e)=>{this.handlerData(e)}}/>
          <button>Explorer!</button>
        </form>
        <h1>{this.state.display_name}</h1>
        <h1>{this.state.latitude}</h1>
        <h1>{this.state.longitude}</h1>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=key=pk.0a80fd547a3c1e8574e39921b81514c5&center=${this.state.latitude},${this.state.longitude}&zoom=1-8`} fluid />
      </div>
    )
  }
}

export default App;
