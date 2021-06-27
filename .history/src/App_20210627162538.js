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
    let axiosResponed = await axios.get(``),
    this.setState({
      
    })
  }
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='City Name'/>
          <button>Explorer!</button>
        </form>
      </div>
    )
  }
}

export default App;
