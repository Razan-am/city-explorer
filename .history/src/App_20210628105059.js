import React, { Component } from 'react';
import AlertMessage from './AlertMessage';
import Image from 'react-bootstrap/Image';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      error: '',
      show: false,
    }
  }
  handlerData = (e) => {
    this.setState({
      display_name: e.target.value,
    })
  }
  handlerSubmit = async (e) => {
    e.preventDefault()
    try {
      let axiosResponed = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.0a80fd547a3c1e8574e39921b81514c5&q=${this.state.display_name}&format=json`)
      this.setState({
        display_name: axiosResponed.data[0].display_name,
        latitude: axiosResponed.data[0].lat,
        longitude: axiosResponed.data[0].lon,
        show: true,

      })
      console.log(axiosResponed.data)
    }catch (error){
      this.setState({
        error:"please provide a valid city name",
        alert:true,
        show:false,
      })
    }

  }
  render() {
    return (
      <>
      <AlertMessage 
      alert={this.state.alert}
      error={this.state.error}/>
        <form onSubmit={this.handlerSubmit} style={{ marginLeft: '100px', paddingTop: '20px', marginButton: '20px', display: 'block', width: '50px' }}>
          <input type='text' placeholder='City Name' onChange={(e) => { this.handlerData(e) }} />
          <button >Explorer!</button>
        </form>
        {this.state.show &&
          <span>
            <h5>{this.state.display_name}</h5>
            <Image alt='map' src={`https://maps.locationiq.com/v3/staticmap?key=pk.0a80fd547a3c1e8574e39921b81514c5&center=${this.state.latitude},${this.state.longitude}&zoom=1-8`} fluid style={{ margin: '100px', width: '1000px' }} />
          </span>
        }
      </>
    )
  }
}

export default App;
