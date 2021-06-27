import React, { Component } from 'react';

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
    let axiosResponed = await axios.get(``)
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
          <input type='text' placeholder='City Name' onChange={(e)=>{this.}}/>
          <button>Explorer!</button>
        </form>
      </div>
    )
  }
}

export default App;
