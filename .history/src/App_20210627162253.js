import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cityName:'',
    }
  }
  handlerData= (e)=>{
    this.setState()
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